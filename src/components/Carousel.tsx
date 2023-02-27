import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { SLIDERS } from "../utils/carouselData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ dynamicBullets: true }}
        loop={true}
        
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="h-[424px] on-center rounded-md mt-[35px]"
      >
        {
          SLIDERS.map((slider, index) => {
            return (
              <SwiperSlide key={index} style={{backgroundImage: `url(${slider.imgSrc})`}} className="h-[100%] w-[100%] bg-cover bg-no-repeat">
                <article className="h-[100%] w-[95%] ml-auto mr-auto flex items-end justify-between max-md:flex-col max-md:justify-end max-md:items-center max-md:text-center">
                  <div className="mb-[20px]">
                    <h1 className="text-white text-[32px] font-medium max-md:text-[20px] ">{slider.title}</h1>
                    <p className="text-white text-[20px] max-md:text-[15px]">
                      {slider.description}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ) 
          })
        }
      </Swiper>
    </div>
  )
}