import { useState } from "react";

export default function AddProduct() {
  const [file, setFile] = useState(null);
  const [input, setInput] = useState({
    name: "",
    categories: "",
    price: "",
    description: "",
    type: "",
  });
  const handleChangeInput = (event) => {
   
        setInput({ ...input, [event.target.name]: event.target.value });
};

  const handleSubmitForm = (event) => {
    try {
      event.preventDefault();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form>
      <nav className=" p-4"> ADMIN - ADDPRODUCT </nav>
      <div className="  bg-red-100  flex flex-col gap-5 items-center justify-center">
        <span>Create product</span>
        <div className=" flex flex-col">
          <span>Product Name</span>
          <input
            type="text"
            placeholder="product name"
            name="name"
            value={input.name}
            onChange={handleChangeInput}
          />
        </div>
        <div className=" flex flex-col">
          <span>Price</span>
          <input type="text" placeholder="price" />
        </div>
        <div className=" flex flex-col">
          <span>Type</span>
          <select name="type" id="type-select">
            <option value="TSHIRT">TSHIRT</option>
            <option value="JACKET">JACKET</option>
          </select>
        </div>
        <div className=" flex flex-col">
          <span>Categoriest</span>
          <select name="categoriest" id="categoriest-select">
            <option value="MEN">MEN</option>
            <option value="WOMEN">WOMEN</option>
            <option value="KIDS">KIDS</option>
          </select>
        </div>
        <div className=" flex flex-col">
          <span>Description</span>
          <textarea id="description" name="description"></textarea>
        </div>
        <div className=" flex flex-col">
          <span>Main image</span>
          <input
            type="file"
            onChange={(event) => {
              console.log(event);
              if (event.target.files[0]) {
                setFile(event.target.files[0]);
              }
            }}
          />
        </div>
        <div className=" flex flex-col">
          <span>Sub image</span>
          <input
            type="file"
            multiple
            onChange={(event) => {
              if (event.target.files[0]) {
                setFile(event.target.files[0]);
              }
            }}
          />
        </div>
        <div className=" flex gap-5">
          <div className=" bg-green-300">
            <button>Create</button>
          </div>
          <div className=" bg-orange-300">
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </form>
  );
}
