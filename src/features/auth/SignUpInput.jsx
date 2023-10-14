
export default function SignUpInput({ type ='text',placeholder , value , onChange,name , hasError}) {
  return (
    <>
        <input 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        name={name}
        className={`block border rounded-md outline-none px-3 py-1.5 text-sm focus:ring ${ hasError ?  'border-red-500 focus:ring-red-300' : 'focus: ring-black focus:border-black border-gray-300' }`}
        />
    </>
  )
}
