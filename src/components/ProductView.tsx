import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Button from "./Button";

import { Heartbeat, MapPin } from "phosphor-react";

import Crown from "../assets/crown.svg";

const product = {
  images: [
    "https://c4.wallpaperflare.com/wallpaper/162/894/557/colorful-neon-computer-keyboards-wallpaper-preview.jpg",
    "https://i.pinimg.com/564x/48/c1/03/48c103c247d40ede5ccacb792a666e17.jpg",
    "https://i.pinimg.com/564x/57/b1/74/57b174165d4340453e2bcd8b89497d70.jpg",
    "https://i.pinimg.com/564x/f7/a8/5e/f7a85ea1524b9b7cca991d418f2791f8.jpg",
    "https://i.pinimg.com/564x/15/c1/f8/15c1f81d7059d320655bd9ee3d15fd5c.jpg"
  ],
  title: "Macbook Pro",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in enim ac ex varius ornare. Aliquam erat volutpat. Aenean interdum sodales mi, vitae efficitur augue ullamcorper vulputateLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in enim ac ex varius ornare. Aliquam erat volutpat. Aenean interdum sodale",
  price: "$400",
  location: "Luanda, Angola"
}

interface ProductViewProps {
  most_view: Boolean
}

const ProductView = ({ most_view=false }: ProductViewProps) => {
  return (
    <article className="mt-[87px] flex justify-between w-[100%] on-center max-md:justify-center gap-4 max-[700px]:flex-wrap">
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ dynamicBullets: true }}
        loop={true}
        
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="h-[360px] w-[400px] flex-shrink-0 no-auto"
      >
        {
          product.images.map((image, index) => {
            return (
              <SwiperSlide key={index} style={{backgroundImage: `url(${image})`}} className="bg-cover h-[100%] w-[100%] rounded" />
            )
          })
        }
      </Swiper>
      <div className="w-[60%] max-[1000px]:w-[400px]">
        <div className="flex items-center gap-4">
          <h3 className="font-medium text-[28px]">{product.title}</h3>
          {
            most_view?
            (<img src={Crown} width="30px"/>):
            (null)
          }
        </div>
        <p className="block mb-[10px] mt-[10px] text-[16px] max-md:hidden">
          { product.description }
        </p>
        <p className="hidden mb-[10px] mt-[10px] text-[16px] max-md:block">
          { product.description.slice(0, 100) }...
        </p>
        <span className="text-[#474747] flex gap-2 items-center mb-2">
          <MapPin />
          { product.location }
        </span>
        <h4 className="text-lg text-[#474747] mb-[19px]">{product.price}</h4>
        <div className="flex gap-2 rounded">
          <Button>Ver o producto</Button>
          <button className="border w-[54px] h-[56px] flex items-center justify-center rounded">
            <Heartbeat size="26px" weight="duotone"/>
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductView;