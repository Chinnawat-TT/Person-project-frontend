import Joi from "joi";
import SignUpInput from "../features/auth/SignUpInput";
import { useState } from "react";
import { useAuth } from '../hooks/use-Auth'
import { toast } from "react-toastify"
import InputErrorMessage from "../features/auth/InputErrorMessage";

const SignUpSchema = Joi.object({
  fullName: Joi.string().trim().required(),
  email: Joi.string().trim().email({ tlds: false }).required(),
  password: Joi.string().trim().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

const validateSignUp = input =>{
  const { error } = SignUpSchema.validate(input , { abortEarly : false })
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
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});
  const { signup } =useAuth()

  const handleChangeInput = (event) => {
   
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validateError = validateSignUp(input);
    if (validateError) {
      return setError(validateError);
    }
    setError({});
    signup(input).catch( err => toast.error(err.response?.data.message))
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
        <div className=" flex  ">
          <h4>FULLNAME</h4>
          <SignUpInput
            placeholder="fullname"
            value={input.fullName}
            onChange={handleChangeInput}
            name="fullName"
            hasError={error.fullName}
          />
          {error.fullName && <InputErrorMessage message={error.fullName}/>}
        </div>
        <div className=" flex ">
          <h4>EMAIL ADDRESS</h4>
          <SignUpInput
            placeholder="email"
            value={input.email}
            onChange={handleChangeInput}
            name="email"
            hasError={error.email}
          />
          {error.email && <InputErrorMessage message={error.email}/>}
        </div>
        <div className=" flex ">
          <h4>PASSWORD</h4>
          <SignUpInput
            placeholder="password"
            value={input.password}
            onChange={handleChangeInput}
            name="password"
            hasError={error.password}
            type="password"
          />
          {error.password && <InputErrorMessage message={error.password}/>}
        </div>
        <div className=" flex ">
          <h4>CONFIRM PASSWORD</h4>
          <SignUpInput
            placeholder="confirm password"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            name="confirmPassword"
            hasError={error.confirmPassword}
            type="password"
          />
          {error.confirmPassword && <InputErrorMessage message={error.confirmPassword}/>}
        </div>

        <button className=" border bg-black text-white rounded-lg py-2 px-5">
          SignUp
        </button>
      </div>
    </form>
  );
}
