import { useState } from "react"
import Modal from "../../components/Modal"
import EditProduct from "./EditProduct"


export default function Table({ productobj ,deleteProduct,editDetailProduct }) {
    const [isopen , setIsOpen]= useState(false)
console.log(productobj)
const handleClickDelete =()=>{
    deleteProduct(productobj.id)
  }
const handleClickEditDetial =(body)=>{
    
    editDetailProduct(productobj.id,body)
}
  return (
    <div>
                  <td>{productobj.id}</td>
                  <td>{productobj.name}</td>
                  <td>{productobj.price}</td>
                  <td>{productobj.categories}</td>
                  <td>{productobj.type}</td>
                  <td>{productobj.description}</td>
                  <td><img className=" h-10 w-10" src={productobj.mainImage} alt="" /></td>
                  <Modal 
                  open={isopen}
                  onClose={ ()=>setIsOpen(false)}
                  >
                  <EditProduct handleClickEditDetial={handleClickEditDetial}/>
                  </Modal>
                  <td><span className="material-symbols-outlined cursor-pointer" onClick = {() => setIsOpen(true)}>edit</span></td>
                  <td><span className="material-symbols-outlined cursor-pointer" onClick={handleClickDelete}>delete</span></td>
    </div>
  )
}
