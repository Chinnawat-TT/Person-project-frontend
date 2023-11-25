import { useEffect, useState } from "react";
import Joi from "joi";
import SignUpInput from "../features/auth/SignUpInput";
import { useAuth } from "../hooks/use-Auth";
import { toast } from "react-toastify";
import InputErrorMessage from "../features/auth/InputErrorMessage";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";


const LoginSchema = Joi.object({
  email : Joi.string().trim().email({ tlds: false }).required(),
  password : Joi.string().trim().min(6).required()
})
const validateLogin = input =>{
  const { error } = LoginSchema.validate(input , { abortEarly : false })
  console.log(error)
  if(error){
      const result = error.details.reduce((acc,el) =>{
          const { message , path} =el
          acc[path[0]]=message
          return acc
      },{})
      return result
  }

}

export default function LoginPage() {
  const [input ,setInput]=useState({
    email : "",
    password : ""
  })
  const [error,setError]=useState({})
  const { login , authUser} =useAuth()
  const [loading , setLoading] =useState(false)
 

  const handleChangeInput = (event) =>{
    setInput({ ...input , [event.target.name]:event.target.value })
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    const validateError = validateLogin(input)
    if(validateError){
      return setError(validateError)
    }
    setError({})
    login(input).catch(err => toast.error(err.response?.data.message) )
    
      
  }

  console.log(authUser)

  if(authUser){
    return <Navigate to="/"/>
  }
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 350);
  },[])
  return (
    <>
    {loading && <Loading/>}
    <div className=" flex  justify-center items-center h-[90vh] " >
      <form onSubmit={handleSubmit}>
        <div>
        <h1>LOGIN</h1>
        <span>Login with your email address and password.</span>
        </div>
        <div>
          <h4>EMAIL ADDRESS</h4>
          
          <SignUpInput 
          placeholder="Enter a valid email"
          onChange={handleChangeInput}
          name="email"
          value={input.email}
          hasError={error.email}
          />
          {error.email && <InputErrorMessage message={error.email}/>}
        </div>
        <div>
          <h4>PASSWORD</h4>
          <SignUpInput
          type="password"
          onChange={handleChangeInput}
          name="password"
          value={input.password}
          hasError={error.password}
          />
          {error.password && <InputErrorMessage message={error.password}/>}
        </div>
        <button className="  border rounded-md px-5 py-2 bg-black text-white">LOGIN</button>
      </form>
      
    </div>
    </>
  )
}
