import { useState } from "react";

export default function SaleItem({ show ,addToCart}) {
  const {Productsimage}=show
  
  const [size ,setSize]=useState("")

  const handleSubmitForm = (event)=>{
    event.preventDefault();
    show.size = size
    addToCart(show)
    
  }
  return (
    <form onSubmit={handleSubmitForm}>
      <div className=" bg-yellow-200">
        <div><img src={show.mainImage} alt="" /> </div>
        {Productsimage.map( (el, index)=>(
         <div key={index}>
           <div><img src={el.name} alt="" /></div>
         </div>
        ))}
      </div>
      <div className=" flex flex-col ">
        <span>{show.name}</span>
        <span>price : {show.price}</span>
        <span>size</span>
        <div className=" flex gap-4">
          
          <span className={` cursor-pointer hover:bg-slate-300 p-4 ${ size === "S" ? "bg-yellow-200":""}`} onClick={()=>setSize("S")}>S</span>
          <span className={` cursor-pointer hover:bg-slate-300  p-4 ${ size === "M" ? "bg-yellow-200":""}`} onClick={()=>setSize("M")}>M</span>
          <span className={` cursor-pointer hover:bg-slate-300  p-4 ${ size === "L" ? "bg-yellow-200":""}`} onClick={()=>setSize("L")}>L</span>
          <span className={` cursor-pointer hover:bg-slate-300  p-4 ${ size === "XL" ? "bg-yellow-200":""}`} onClick={()=>setSize("XL")}>XL</span>
        </div>
        {/* <span>quantity</span>
        <select name="size" id="size-select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select> */}
        <button className=" bg-red-900 p-5"> ADD TO CART </button>
      </div>
      <div className=" bg-cyan-300 ">
        <div>
          <span>Description</span>
          
          <span>ProducutID : {show.id}</span>
        </div>
        <span>
          {show.description}
        </span>
      </div>
    </form>
  );
}
