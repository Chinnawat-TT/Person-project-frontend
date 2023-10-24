

export default function Carttotal({totalCart,checkOutCart}) {
  const handleCheckOut =()=>{
    checkOutCart(totalCart)
  }
  return (
    <div className=" bg-blue-500">
        <span>ORDER TOTAL :{totalCart}</span>
        <button className=" p-5 bg-red-400 text-white" onClick={handleCheckOut}>CHECKOUT</button>
    </div>
  )
}
