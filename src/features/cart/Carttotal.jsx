

export default function Carttotal({totalCart,handleCheckOut}) {
 
  return (
    <div className=" " >
        <span>ORDER TOTAL :{totalCart}</span>
        <button className=" p-5 bg-red-400 text-white" onClick={handleCheckOut}>CHECKOUT</button>
    </div>
  )
}
