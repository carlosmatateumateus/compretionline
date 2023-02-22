import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { useRef } from "react";
import ProductCard from "./ProductCard"; 

interface ProductTypes {
  id: string,
  title: string,
  price: number,
  location: string,
  createdAt: string,
  userId: string, 
  photo: string
}

interface ProductQueueProps {
  title: String,
  products: Array<ProductTypes>
}

const productDefault = [{}, {}, {}, {}, {}, {}, {}, {}]

export default function ProductQueue ({ title, products }: ProductQueueProps) {
  const queueRef = useRef<HTMLDivElement>(null);

  function handleScrollRight() {
    if (queueRef.current) {
      queueRef.current.scrollLeft += 50; // 50 é um exemplo, pode ser qualquer valor que você queira
    }
  }

  function handleScrollLeft() {
    if (queueRef.current) {
      queueRef.current.scrollLeft -= 50; // 50 é um exemplo, pode ser qualquer valor que você queira
    }
  }

  function ProductsMap() {
    return (
      <>
        {
          products.length > 0?
          (
            products?.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  title={product.title}
                  price={product.price}
                  location={product.location}
                  imgSrc={product.photo}
                  id={product.id}
                />
              )
            })
          ):
          (
            productDefault?.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  title={"???"}
                  price={0.00}
                  location={"???"}
                  imgSrc={undefined}
                  id={undefined}
                />
              )
            })
          )
        }
      </>
    )
  }
  
  return (
    <section className="mt-[50px] on-center productqueue">
      <div className="on-center flex items-center justify-between flex-wrap">
        <h2 className="text-2xl font-medium mb-1">{ title } </h2>
        <div className="flex">
          <ArrowCircleLeft 
            size="25" 
            weight="fill" 
            className="cursor-pointer text-black active:text-[#2b2b2b]"
            onClick={() => handleScrollLeft()}
          />
          <ArrowCircleRight 
            size="25" 
            weight="fill"  
            className="cursor-pointer text-black active:text-[#292929]"
            onClick={() => handleScrollRight()}
          />
        </div>
      </div>
      <article 
        className="flex gap-[10px] py-10 overflow-x-scroll"
        ref={queueRef}
        >
        <ProductsMap />
      </article>
    </section>
  )
}