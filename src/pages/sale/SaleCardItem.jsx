export default function SaleCardItem() {
  return (
    <div className=" bg-red-100  grid grid-cols-2">
      
      <div className=" bg-yellow-200">
        <div> main image </div>
        <div>sub image 1</div>
        <div>sub image 2</div>
        <div>sub image 3</div>
        <div>sub image 4</div>
      </div>
      <div className=" flex flex-col bg-green-200">
        <span>name product</span>
        <span>price</span>
        <span>size</span>
        <div className=" flex gap-4">
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
        </div>
        <span>quantity</span>
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
        </select>
        <button className=" bg-red-900 p-5"> ADD TO CART </button>
      </div>
      <div className=" bg-cyan-300 ">
        <div>
          <span>Description</span>
          <span>ProducutID : </span>
        </div>
        <span>
          - Narrow crew neck design for a sleek style. 
          - Half-length sleeves. -
          Wide fit with drop shoulders. - The double-faced structure of the
          fabric, drop shoulders, and wide fit make for an elegant silhouette.-
          Unisex design. - A versatile wardrobe essential.
        </span>
      </div>
    </div>
  );
}
