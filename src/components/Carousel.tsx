import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "./Button";

const sliders = [
  {
    imgSrc:"https://images.unsplash.com/photo-1611654302046-49b1cff819c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1570&q=80",
    content: `Encontre os melhores productos
    ao melhor preço`
  },
  {
    imgSrc:"https://images.unsplash.com/photo-1611654302046-49b1cff819c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1570&q=80",
    content: `Encontre os melhores productos
    ao melhor preço`
  }
]

const Carousel = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
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
          sliders.map((slider, index) => {
            return (
              <SwiperSlide key={index} style={{backgroundImage: `url(${slider.imgSrc})`}} className="h-[100%] w-[100%] bg-cover bg-no-repeat">
                <article className="h-[100%] w-[95%] ml-auto mr-auto flex items-end justify-between max-md:flex-col max-md:justify-end max-md:items-center max-md:text-center">
                  <div className="mb-[20px]">
                    <h1 className="text-white text-[32px] font-medium max-md:text-[20px] ">{slider.content}</h1>
                    <p className="text-white text-[20px] max-md:text-[15px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className="mb-[20px] flex-shrink-0 max-md:mb-[30px]">
                    <Button children="Ver productos"/>
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

export default Carousel;