import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/scrollbar";

const products = [
  {
    imgSrc: "https://i.pinimg.com/564x/0d/7d/22/0d7d22346b3abfa9bb6c59efc5b5eb66.jpg",
    title: 'Consola xbox series',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 12000.00
  },
  {
    imgSrc: "https://i.pinimg.com/564x/0d/7d/22/0d7d22346b3abfa9bb6c59efc5b5eb66.jpg",
    title: 'Consola xbox series',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 12000.00
  },
  {
    imgSrc: "https://i.pinimg.com/564x/0d/7d/22/0d7d22346b3abfa9bb6c59efc5b5eb66.jpg",
    title: 'Consola xbox series',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 12000.00
  },
  {
    imgSrc: "https://i.pinimg.com/564x/0d/7d/22/0d7d22346b3abfa9bb6c59efc5b5eb66.jpg",
    title: 'Consola xbox series',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 12000.00
  },
]

const RelatedProducts = () => {
  return (
    <section className="p-10 flex flex-col gap-4 max-lg:hidden">
      <h3 className="font-medium mb-10 text-[#24242E]">Productos relacionados</h3>
      <Swiper 
        className="flex h-[800px] pr-10"
        direction='vertical'
        mousewheel={true}
        slidesPerView={2}
        scrollbar={{
          hide: false,
        }}
        freeMode={true}
        modules={[Scrollbar]}
        >
        {
          products.map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductCard {...product}/>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default RelatedProducts;