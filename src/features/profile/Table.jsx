import { useState } from "react"
import Modal from "../../components/Modal"
import EditProduct from "../admin/EditProduct"



export default function Table({ productobj ,deleteProduct,editDetailProduct }) {
    const [isopen , setIsOpen]= useState(false)

const handleClickDelete =()=>{
    deleteProduct(productobj.id)
  }
const handleClickEditDetial =(body)=>{
    
    editDetailProduct(productobj.id,body)
    setIsOpen(false)
}
  return (
    <div className=" border border-black ">
                  <div className=" flex justify-between p-2">
                  <div>
                    <span className=" font-semibold">Product ID : </span> 
                    {productobj.id}
                  </div>
                  <div>
                  <span className=" font-semibold">Price : </span> 
                    {productobj.price}
                  </div>
                  </div>
                  <div className="flex justify-between p-2">
                  <div >
                  <span className=" font-semibold">Product name : </span> 
                    {productobj.name}
                    
                  </div>
                  <div>
                  <span className=" font-semibold">Categories : </span> 
                    {productobj.categories}
                  </div>
                  <div>
                  <span className=" font-semibold">Type : </span> 
                    {productobj.type}
                  </div>
                  </div>
                  <div className=" p-2">
                  <span className=" font-semibold">Description : </span> 
                    {productobj.description}
                  </div>
                  <div className=" p-2">

                  <img className=" h-36 w-40" src={productobj.mainImage} alt="" />
                  </div>
                  <Modal 
                  open={isopen}
                  onClose={ ()=>setIsOpen(false)}
                  >
                  <EditProduct handleClickEditDetial={handleClickEditDetial} price={productobj.price} name={productobj.name} description={productobj.description} />
                  </Modal>
                  <div className="flex gap-28 p-2">

                  <span className="material-symbols-outlined cursor-pointer" onClick = {() => setIsOpen(true)}>edit</span>
                  <span className="material-symbols-outlined cursor-pointer" onClick={handleClickDelete}>delete</span>
                  </div>
    </div>
  )
}
