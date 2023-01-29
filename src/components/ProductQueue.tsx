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
  {
    imgSrc: "https://i.pinimg.com/564x/0d/7d/22/0d7d22346b3abfa9bb6c59efc5b5eb66.jpg",
    title: 'Consola xbox series',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 12000.00
  },
]

interface ProductQueueProps {
  title: String,
}


const ProductQueue = (props: ProductQueueProps) => {
  return (
    <section className="mt-[50px] on-center productqueue">
      <h2 className="text-2xl font-medium">{props.title}</h2>
      <Swiper 
        className="flex gap-[170px] py-10"
        slidesPerView={6}
        spaceBetween={50}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        >
        {
          products.map((product, index) => {
            return (
              <SwiperSlide>
                <ProductCard
                  key={index}
                  title={product.title}
                  price={product.price}
                  imgSrc={product.imgSrc}
                  description={product.description}
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default ProductQueue;