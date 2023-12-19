import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/use-Cart";

export default function Cartshow({
  el,
  
  setTotalCart,

  
  
}) {
  // console.log("element",el)
  const {newAmong ,setNewAmong ,setNewPrice,newPrice,deleteItemCart,getDataCart}=useCart()

  // console.log("delete",deleteItemCart)
  // const [among,setAmong]=useState([])
  const [result, setResult] = useState(0);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const [total,setTotal]=useState([])
  // console.log("among",among)
  const handleClickDelete = () => {
    // console.log("hello click delete 1")
    // const findIndex = newAmong.findIndex(element => element.productId === el.products.id);
    // console.log("+++++++++",findIndex)
    // const priceTarget=newAmong[findIndex].price
    deleteItemCart(el.products.id, el.id);
    setTotalCart((prev) => prev - result);
    // console.log("hello click delete 2")
    // const target = newAmong.find(item => item.quantiny === newAmong.quantiny )
    // console.log("target",target)
    // const findIndex = newAmong.findIndex(element => element.size === el.size);
    // console.log("",findIndex)
    // setData(data.filter((el) => el.id !== response.data.cartTargat.id));
    // const newDataAmong =newAmong.filter( element=> element.size !== el.size)
    // setResult(newDataAmong)
    // setNewAmong(newDataAmong.map(el => el.quantiny))

    // setNewAmong(newDataAmong)
  };
 

  const handleChangeAmong = async (event) => {
    console.log("handleChangeAmong")
    const obj = {
      [event.target.name]: Number(event.target.value),
      price: el.products.price * event.target.value,
      productId: el.products.id,
      size: el.size,
    };
    // console.log(obj)
    const sumPrice = el.products.price * event.target.value;
    setResult(sumPrice);
    setTotalCart((prev) => prev - result + sumPrice);
    // setNewPrice((prev) => prev - result + sumPrice)
    const findIndex = newAmong.findIndex(
      (element) =>
        element.productId === el.products.id && element.size === el.size
    );

    if (findIndex >= 0) {
      console.log("if")
      setNewAmong( async (prev) => {
        const updatedNewAmong = [...prev];
        updatedNewAmong[findIndex] = obj;
        await axios.patch("/verifi/addQuantity", {
          quantity: updatedNewAmong[findIndex].quantiny,
          id: el.id,

        }).then(getDataCart());

      // axios("verifi/getcart")
      // .then((res) => setData(res.data))
      // .catch((err) => console.log(err));
        // console.log("TTTTTTTTTTTT",updatedNewAmong[findIndex].quantiny)
        return updatedNewAmong;
      });
    } else {
      console.log("else")
      setNewAmong((prev) => [...prev, obj]);
      await axios.patch("/verifi/addQuantity", { quantity: obj.quantiny, id: el.id }).then(getDataCart());
      // console.log("YYYYYYY",obj.quantiny)
      // axios("verifi/getcart")
      // .then((res) => setData(res.data))
      // .catch((err) => console.log(err));
    }
  };

  // const { setShowCart }=useAuth()
  // const [totalPrice ,setTotalPrice]=useState([])
  // const [among,setAmong]=useState([])

  // const handleChangeAmong =(event)=>{
  //   const obj = {[event.target.name] : event.target.value ,price:el.products.price ,id :el.products.id}
  //   console.log(obj)
  //   setAmong([obj,...among])
  //   // setShowCart(among)
  // }

  // const sumPrice =()=> among.quantity * among.price

  // console.log("total :",totalPrice)
  // console.log(among[0].quantity.length)
  // if(among[0].quantity.length > 0){
  //   console.log("++++++")
  //   //  setTotalPrice(sumPrice)
  // }
  // console.log(among)
  // useEffect( ()=> {

  // },[newAmong])

  return (
    <div className=" px-10">
      <div className=" h-1/3 w-full  p-5 min-h-min flex gap-5 border-b-2  ">
        <img className="  h-36 w-36 " src={el.products.mainImage} alt="" />

        <div className=" flex flex-col w-full gap-1">
          <div className=" flex justify-between">
            <span className=" font-semibold">{el.products.name} </span>

            <span
              className="material-symbols-outlined cursor-pointer p-1"
              onClick={handleClickDelete}
            >
              close
            </span>
          </div>
          <span className=" font-thin">Product id : {el.products.id}</span>
          <span className=" font-sans">Size : {el.size}</span>
          <span>pice : {el.products.price}</span>
          <div className=" flex justify-between items-center">
            <div className=" flex flex-col gap-2">
              <span>quantity</span>
              <select
                name="quantiny"
                id="size-select"
                className=" w-40 p-2"
                onChange={handleChangeAmong}
                value={el.quantity}
                // {...register("quantiny" , {
                //   required: "กรุณาเลือกจำนวนสินค้า",
                // })}
              >
                <option value="">You have selected</option>
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
            </div>
            <div className=" flex  items-center">
              <span className=" p-1 font-sans">sub total : </span>
              <p className=" font-semibold mt-[3px] text-xl">
                {el.quantity ? el.quantity * el.products.price : result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
