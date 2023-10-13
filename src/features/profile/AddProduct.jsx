

export default function AddProduct() {
  return (
    <div>
        <nav className=" p-4"> ADMIN - ADDPRODUCT </nav>
        <div className="  bg-red-100  flex flex-col gap-5 items-center justify-center">
            <span>Create product</span>
            <div className=" flex flex-col">
            <span>Product Name</span>
            <input type="text" />
            </div>
            <div className=" flex flex-col">
    <span>Price</span>
            <input type="text" />
            </div>
            <div className=" flex flex-col">
    <span>Type</span>
            <input type="text" />
            </div>
            <div className=" flex flex-col">
    <span>Categoriest</span>
            <input type="text" />
            </div>
            <div className=" flex flex-col">
    <span>Description</span>
            <textarea id="description" name="description" ></textarea>
            </div>
            <div className=" flex flex-col">
                <span>Main image</span>
                <input type="file" />
            </div>
            <div className=" flex flex-col">
                <span>Sub image</span>
                <input type="file" />
            </div>
        </div>
        </div>
  )
}
