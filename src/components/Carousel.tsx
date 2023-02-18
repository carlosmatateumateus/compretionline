import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const sliders = [
  {
    imgSrc:"https://images.unsplash.com/photo-1611654302046-49b1cff819c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1570&q=80",
    title: `Encontre os productos da apple
    ao melhor preço.`,
    description: "Encontre iphones, apple watchs, macbooks, airpods tudo isso e muito mais em um único lugar."
  },
  {
    imgSrc:"https://images.unsplash.com/photo-1603481546579-65d935ba9cdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: `Já está mais do que na hora de teres aquele canto só teu.`,
    description: "Já está na hora de comprar aquele computador."
  },
]

export default function Carousel() {
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