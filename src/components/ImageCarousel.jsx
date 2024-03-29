import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";

function ImageCarousel({ images, setSelectedImage }) {
  
  return (
    <Swiper
      slidesPerView={6}
      centeredSlides={false}
      freeMode={true}
      mousewheel={true}
      rewind={true}
      modules={[FreeMode, Mousewheel]}
    >
      {images?.map((image, index) => (
        <SwiperSlide key={index}>
          <div
            className=" px-1 cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image?.name}
              className=" "
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageCarousel;
