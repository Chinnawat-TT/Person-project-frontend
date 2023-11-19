

export default function Carttotal({totalCart,handleCheckOut,setNewPrice,handleSubmit}) {
 
  return (
    <form className=" bg-blue-500" onSubmit={handleSubmit((data) => console.log("data useform",data))}>
        <span>ORDER TOTAL :{totalCart}</span>
        <button className=" p-5 bg-red-400 text-white" onClick={handleCheckOut}>CHECKOUT</button>
    </form>
  )
}
