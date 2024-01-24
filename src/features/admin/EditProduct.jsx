import { useState } from "react";

export default function EditProduct({ handleClickEditDetial ,name,description,price}) {
  console.log(name)
  console.log(description)
  console.log(price)
  const [input, setInput] = useState({
    name,
    price,
    description,
  });
  const handleChangeInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const handleSubmidForm = (e) => {
    e.preventDefault();
    handleClickEditDetial(input);
  };
  
  return (
    <form onSubmit={handleSubmidForm} className="flex flex-col gap-4">
      <div>
      <div className=" flex flex-col gap-2">
        <span className=" font-semibold">Product Name</span>
        <input
          
          type="text"
          placeholder="product name"
          name="name"
          value={input.name}
          onChange={handleChangeInput}
        />
      </div>
      <div className=" flex flex-col gap-2">
        <span className=" font-semibold">Price</span>
        <input
          type="text"
          placeholder="price"
          name="price"
          value={input.price}
          onChange={handleChangeInput}
        />
      </div>
      <div className=" flex flex-col gap-2">
        <span className=" font-semibold">Description</span>
        <textarea
          id="description"
          name="description"
          placeholder="description"
          value={input.description}
          onChange={handleChangeInput}
        ></textarea>
      </div>
      </div>
      <div>
      <button className=" p-2 hover:font-semibold hover:ring-2 hover:ring-black">update</button>

      </div>
    </form>
  );
}
