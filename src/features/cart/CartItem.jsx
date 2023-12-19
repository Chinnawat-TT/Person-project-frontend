import { useEffect, useState } from "react";
import axios from "../../config/axios";
import Cartshow from "./Cartshow";
import Carttotal from "./Carttotal";
import { toast } from "react-toastify";

import { useAuth } from "../../hooks/use-Auth";
import { useCart } from "../../hooks/use-Cart";

import { useNavigate } from "react-router-dom";


export default function CartItem() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const { setNotificationCart } = useAuth();
  const {
    newAmong,
    setNewAmong,
    setNewPrice,
    checkOutCart,
    totalCart,
    setTotalCart,
    dataCart,
    setDataCart,
    getDataCart
  } = useCart();
  // setNewPrice(totalCart)
  // console.log("newPrice",newPrice)
  // console.log("newAmong",newAmong)

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // console.log("data", data);
  // const [totalPrice ,setTotalPrice]=useState([])

  // const [among,setAmong]=useState([])

  // const handleChangeAmong =(event)=>{
  //   const obj = {[event.target.name] : event.target.value,price:el.products.price ,id :el.products.id }
  //   console.log(obj)
  //   setAmong([obj,...among])

  // }

  const handleCheckOut = () => {
    if (totalCart === 0) {
      return toast.error("คุณไม่มีสินค้าในตระกร้า");
    }
    console.log("++++++++++++++++++++");
    // let size = data.map(el => el.size)
    // console.log("sizelength",size.length)
    // console.log("sizeMap",size)

    const input = {};

    input.item = newAmong;
    input.totalPrice = totalCart;
    // if(size.length > 1) {
    //   console.log("Hello loop")
    //   for(let i = 0 ; i < size.length; i++){
    //     input.item[i].size = size[i]
    //   }
    // } else {
    //   newAmong[0].size =size[0]
    // }

    console.log("newdata", input);
    checkOutCart(input);
    setTotalCart(0);
    // const resultArray = [];
    // data.forEach(item => {
    //   const existingItem = resultArray.find(result => result.productId === item.productId && result.size === item.size);

    //   if (existingItem) {
    //     existingItem.quantity += 1;
    //     existingItem.price += item.products.price;
    //   } else {
    //     resultArray.push({
    //       productId: item.productId,
    //       size: item.size,
    //       price: item.products.price,
    //       quantity: 1
    //     });
    //   }
    // });
    // console.log(resultArray)
  };

  const deleteItemCart = async (itemId, cartId) => {
    try {
      const response = await axios.delete(`/verifi/delete/${itemId}/${cartId}`);
      console.log(response);

      const newData = dataCart.filter(
        (el) => el.id !== response.data.cartTargat.id
      );
      console.log("+++++++++++++", newData);

      setDataCart(newData);

      if (data.length === 1) {
        setNotificationCart(false);
      }
      getDataCart()
      toast.error("Delete");
    } catch (err) {
      console.log(err);
    }
  };

  //  const sumPrice = (among) =>{
  //   const result= among.reduce( (acc,curr)=>{
  //     let total = curr.quantity * curr.price
  //     acc += total
  //     return acc
  //   },0)

  //   return result
  //  }
  // const fnc = async () => {
  //   try {
  //     const res = await axios("verifi/getcart");
  //     setData(res.data);

  //     const getQuantity = res.data.map((el) => el.quantity); // Use res.data here
  //     console.log(">>>>>", getQuantity);

  //     const getPrice = res.data.map((el) => el.products.price); // Use res.data here
  //     console.log("<<<<<", getPrice);

  //     setNewPrice(
  //       getQuantity.reduce(
  //         (acc, curr, index) => acc + curr * parseInt(getPrice[index]),
  //         0
  //       )
  //     );

  //     console.log("useEffect running...");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect( () => {
  //   fnc()
  // }, [newAmong, newPrice]);

  // useEffect( async () => {
  //   try {
  //     const res = await axios("verifi/getcart")
  //     setData(res.data);

  //     const getQuantity = data.map((el) => el.quantity);
  //       console.log(">>>>>",getQuantity);
  //       const getPrice = data.map((el) => el.products.price);
  //       console.log("<<<<<",getPrice);

  //       setNewPrice(
  //         getQuantity.reduce(
  //           (acc, curr, index) => acc + curr * parseInt(getPrice[index]),
  //           0
  //         )
  //       );
  //       console.log("useeffect runnnnnn.....");
  //   } catch (error) {
  //     console.log(error)
  //   }
  // axios("verifi/getcart")
  //   .then((res) => {
  //     setData(res.data);

  //     const getQuantity = res.data.map((el) => el.quantity);
  //     console.log(">>>>>",getQuantity);
  //     const getPrice = res.data.map((el) => el.products.price);
  //     console.log("<<<<<",getPrice);

  //     setNewPrice(
  //       getQuantity.reduce(
  //         (acc, curr, index) => acc + curr * parseInt(getPrice[index]),
  //         0
  //       )
  //     );
  //   })
  // .catch((err) => console.log(err));
  // console.log("useeffect runnnnnn.....");

  // setTotalCart(0);
  // if(data.length > 0){
  //   setNotificationCart(true)
  //  } else {
  //   setNotificationCart(false)
  //  }
  // }, [newAmong,newPrice]);

  // console.log("data cart", data)

  // const result = data.map(el =>el.products.price)

  return (
    <>
    
    <div className=" flex flex-col">
      <h1 className=" px-10 text-xl pt-5"> ตระกร้า </h1>
      <div className=" flex flex-col gap-2">
        {dataCart.map((el, index) => (
          <Cartshow
            el={el}
            key={index}
            
            setTotalCart={setTotalCart}
            setNewAmong={setNewAmong}
            setNewPrice={setNewPrice}
            newAmong={newAmong}
            setData={setData}
          />
          //       <div key={index}>

          //   <div className=" h-1/3 w-1/2 border shadow-lg rounded-lg p-5 min-h-min flex gap-5  " >

          //     <div>

          //       <img className=" rounded-lg h-36 w-60 " src={el.products.mainImage} alt="" />
          //     </div>

          //     <div className=" flex flex-col ">

          //       <span>{el.products.name} </span>
          //       <span>Product id :{el.products.id}</span>
          //       <span>Size :{el.size}</span>
          //       <span>pice : {el.products.price}</span>
          //       <span>quantity</span>
          //       <select name="quantity" id="size-select" className=" w-40" onChange={handleChangeAmong}>
          //         <option value="">You have selected</option>
          //         <option value="1">1</option>
          //         <option value="2">2</option>
          //         <option value="3">3</option>
          //         <option value="4">4</option>
          //         <option value="5">5</option>
          //         <option value="6">6</option>
          //         <option value="7">7</option>
          //         <option value="8">8</option>
          //         <option value="9">9</option>
          //         <option value="10">10</option>
          //         <option value="11">11</option>
          //         <option value="12">12</option>
          //       </select>
          //      <span className=" cursor-pointer">Delete</span>
          //     </div>
          //   </div>
          // </div>
        ))}

        {dataCart.length <= 0 ? (
          <div className=" flex flex-col p-4 gap-4 px-10">
            <span>ตระกร้าของคุณยังว่างอยู่</span>

            <span
              className=" p-4 text-white bg-black w-36 cursor-pointer"
              onClick={() => navigate("/")}
            >
              เลือกซื้อสินค้าต่อ
            </span>
          </div>
        ) : (
          <Carttotal totalCart={totalCart} handleCheckOut={handleCheckOut} />
        )}
      </div>
    </div>
    </>
  );
}
