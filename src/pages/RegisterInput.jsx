


export default function RegisterInput({ type ='text',placeholder , value , onChange,name}) {
  return (
    <>
        <input 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        name={name}
        />
    </>
  )
}
