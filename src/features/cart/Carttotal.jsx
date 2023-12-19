import { useCart } from "../../hooks/use-Cart"


export default function Carttotal({totalCart,handleCheckOut}) {
  const {newPrice}=useCart()
  return (
    <div className="px-10 flex justify-between items-center" >
      <div className=" flex items-center">
        <span className=" p-1 font-sans">ORDER TOTAL : </span>
        <p className=" font-semibold mt-[3px] text-xl">{newPrice}</p>
      </div>
        <button className=" p-5 bg-red-500 text-white hover:bg-red-400" onClick={handleCheckOut}>CHECKOUT</button>
    </div>
  )
}
