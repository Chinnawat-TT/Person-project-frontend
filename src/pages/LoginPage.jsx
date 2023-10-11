

export default function LoginPage() {
  return (
    <div className=" flex  justify-center items-center " >
      <div>
        <div>
        <h1>LOGIN</h1>
        <span>Login with your email address and password.</span>
        </div>
        <div>
          <h4>EMAIL ADDRESS</h4>
          <input type="text" />
        </div>
        <div>
          <h4>PASSWORD</h4>
          <input type="password" />
        </div>
        <button className="  border rounded-md px-5 py-2 bg-black text-white">LOGIN</button>
      </div>
      <div className=" flex flex-col ">
        <h4>CREATE AN ACCOUNT</h4>
        <span>If you create an account, it takes less time to go through checkout
      and complete your orders. Register today for free! </span>
       <button className="  border rounded-md px-5 py-2 bg-black text-white">CREATE AN ACCOUNT</button>
      </div>
    </div>
  )
}
