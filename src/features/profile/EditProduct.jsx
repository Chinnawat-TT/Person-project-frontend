import { useState } from "react";

export default function EditProduct({ handleClickEditDetial }) {
  const [input, setInput] = useState({
    name: "",
    price: "",
    description: "",
  });
  const handleChangeInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const handleSubmidForm = (e) => {
    e.preventDefault();
    handleClickEditDetial(input);
  };
  
  return (
    <form onSubmit={handleSubmidForm}>
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
        <input
          type="text"
          placeholder="price"
          name="price"
          value={input.price}
          onChange={handleChangeInput}
        />
      </div>
      <div className=" flex flex-col">
        <span>Description</span>
        <textarea
          id="description"
          name="description"
          placeholder="description"
          value={input.description}
          onChange={handleChangeInput}
        ></textarea>
      </div>

      <button>update</button>
    </form>
  );
}
