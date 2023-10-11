import Joi from "joi";
import RegisterInput from "./RegisterInput";
import { useState } from "react";
import { useAuth } from '../hooks/use-Auth'

const registerSchema = Joi.object({
  fullName: Joi.string().trim().required(),
  email: Joi.string().trim().email({ tlds: false }).required(),
  password: Joi.string().trim().required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

const validateRegister = input =>{
  const { error } = registerSchema.validate(input , { abortEarly : false })
  if(error){
      const result = error.details.reduce((acc,el) =>{
          const { message , path} =el
          acc[path[0]]=message
          return acc
      },{})
      return result
  }

}

export default function SignUpPage() {
  const [input, setinput] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const { register } =useAuth()

  const handleChangeInput = (event) => {
    console.log(event.target.value);
    setinput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validateError = validateRegister(input);
    if (validateError) {
      return setError(validateError);
    }
    setError({});
    register(input).catch( err => console.log(err))
  };
  return (
    <form
      className=" flex flex-col items-center justify-center h-[90vh] "
      onSubmit={handleSubmit}
    >
      <h1>CREATE AN ACCOUNT</h1>
      <div>
        <span>
          You will receive the confirmation mail to your email address
          associated with account. Please make sure to check your incoming email
          from us.
        </span>
        <div>
          <h4>FULLNAME</h4>
          <RegisterInput
            placeholder="fullname"
            value={input.fullName}
            onChange={handleChangeInput}
            name="fullName"
          />
        </div>
        <div>
          <h4>EMAIL ADDRESS</h4>
          <RegisterInput
            placeholder="email"
            value={input.email}
            onChange={handleChangeInput}
            name="email"
          />
        </div>
        <div>
          <h4>PASSWORD</h4>
          <RegisterInput
            placeholder="password"
            value={input.password}
            onChange={handleChangeInput}
            name="password"
          />
        </div>
        <div>
          <h4>CONFIRM PASSWORD</h4>
          <RegisterInput
            placeholder="confirm password"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            name="confirmPassword"
          />
        </div>

        <button className=" border bg-black text-white rounded-lg py-2 px-5">
          REGISTER
        </button>
      </div>
    </form>
  );
}
