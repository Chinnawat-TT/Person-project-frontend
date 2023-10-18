

export default function Table({ productobj ,deleteProduct }) {
console.log(productobj)
const handleClickDelete =()=>{
    deleteProduct(productobj.id)
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
                  <td><span className="material-symbols-outlined cursor-pointer">edit</span></td>
<td><span className="material-symbols-outlined cursor-pointer" onClick={handleClickDelete}>delete</span></td>
    </div>
  )
}
