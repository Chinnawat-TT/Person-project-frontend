

export default function SignUpPage() {
  return (
    <div className=" flex flex-col items-center">
      <h1>CREATE AN ACCOUNT</h1>
      <div>
        <span>You will receive the confirmation mail to your email address associated with account. Please make sure to check your incoming email from us.</span>
        <div>
        <h4>EMAIL ADDRESS</h4>
        <input type="text" placeholder="Enter a valid email" />
        </div>
        <div>
        <h4>PASSWORD</h4>
        <input type="text" placeholder="Enter a valid password" />
        </div>
        <button className=" border bg-black text-white rounded-lg py-2 px-5">REGISTER</button>
      </div>
    </div>
  )
}
