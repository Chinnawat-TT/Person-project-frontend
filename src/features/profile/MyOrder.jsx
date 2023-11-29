import { useEffect, useRef, useState } from "react";
import Loading from "../../components/Loading";
import axios from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function MyOrder({ el, setOrder, order, refresh, setRefresh }) {
  const navigate = useNavigate();
  const [file, setFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState([]);
  const fileEl = useRef();
  const sentFile = async (data) => {
    const res = await axios.patch(`/verifi/confirmTrack/${el.id}`, data);

    const newSlip = res.data.update;

    const updateSlip = order.findIndex((el) => el.id == newSlip.id);

    order.splice(updateSlip, 1, newSlip);
    setOrder([...order]);
  };

  const handlefile = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      if (!file) {
        return toast.error("กรุณาใส่รูป");
      }
      if (file) {
        formData.append("image", file);
      }
      setLoading(true);
      await sentFile(formData);
      setRefresh(!refresh);
    } catch (error) {
    } finally {
      setLoading(false);
      setImageURL([])
    }
  };
  useEffect(() => {
    if (file.length < 1) return;
    const newImageUrls = {};
    newImageUrls.url = URL.createObjectURL(file);
    setImageURL(newImageUrls);
  }, [file]);

  console.log("image", imageURL);
  return (
    <>
      {loading && <Loading />}
      <div className=" flex flex-col p-5 ">
        <div className=" flex justify-between">
          <p className=" font-semibold">order : {el.id}</p>
          <p className=" font-semibold ">total : {el.orderTotal}</p>
        </div>
        <div className=" border-2">
          {el.items?.map((element) => (
            <div className="  p-5 flex gap-4">
              <img src={element.imageUrl} alt="" className=" w-40 h-40" />
              <div>
                <p className=" font-semibold">{element.name}</p>
                <p className=" font-sans">quantiny : {element.quantiny}</p>
                <p className=" font-sans">size : {element.size}</p>
                <p className=" font-sans">sub total : {element.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex justify-between border-b-2 pb-5 pt-5">
          <div className="">
            <p>status : {el.status}</p>
            <div className=" p-5">
              <p>slip</p>
              {el.slip ? (
                <img src={el.slip} alt="" className=" w-40 h-40" />
              ) : (
                <p className=" text-red-500">กรุณายืนยันสลิป </p>
              )}
            </div>
          </div>

          <div className=" flex gap-4">
            <div>
              {imageURL.url ? (
                <img src={imageURL.url} alt="" className=" w-36 h-36" />
              ) : (
                ""
              )}
            </div>
            <div className=" flex items-center flex-col justify-center ">
              <div className=" flex flex-col items-center">
                {el.status === "SUCCESS" ? "" : <p>uploadSlip</p>}
                {el.status === "SUCCESS" ? (
                  ""
                ) : (
                  <span
                    className="material-symbols-outlined cursor-pointer"
                    onClick={() => fileEl.current.click()}
                  >
                    download
                  </span>
                )}
              </div>
              {el.status === "SUCCESS" ? (
                <p className=" text-green-500"> THANK YOU </p>
              ) : (
                <div className=" flex flex-col ">
                  <input
                    type="file"
                    className="hidden"
                    ref={fileEl}
                    onChange={(event) => {
                      if (event.target.files[0]) {
                        setFile(event.target.files[0]);
                      }
                    }}
                  />
                  <button
                    className=" bg-red-500 p-4 hover:bg-red-400"
                    onClick={handlefile}
                  >
                    confirm
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
