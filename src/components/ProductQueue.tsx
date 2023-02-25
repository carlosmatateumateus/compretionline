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

const PRODUCT_DEFAULT = [{}, {}, {}, {}, {}, {}, {}, {}]

export default function ProductQueue ({ title, products }: ProductQueueProps) {
  const queueRef = useRef<HTMLDivElement>(null);

  function handleScrollRight(amout: number) {
    if (queueRef.current) {
      queueRef.current.scrollLeft += amout; 
    }
  }

  function handleScrollLeft(amout: number) {
    if (queueRef.current) {
      queueRef.current.scrollLeft -= amout; 
    }
  }

  function renderDefaultProducts() {
    return PRODUCT_DEFAULT.map(() => (
      <ProductCard
        key={Math.random()}
        title="???"
        price={0.00}
        location="???"
        imgSrc={undefined}
        id={undefined}
      />
    ));
  }

  function renderProducts() {
    if (products.length === 0) {
      return renderDefaultProducts();
    }

    return products.map((product) => (
      <ProductCard
        key={product.id}
        title={product.title}
        price={product.price}
        location={product.location}
        imgSrc={product.photo}
        id={product.id}
      />
    ));
  }
  
  return (
    <section className="mt-[50px] on-center productqueue">
      <div className="on-center flex items-center justify-between flex-wrap">
        <h2 className="text-2xl font-medium mb-1 select-none">{ title } </h2>
        <div className="flex">
          <ArrowCircleLeft 
            size="25" 
            weight="fill" 
            className="cursor-pointer text-black active:text-[#2b2b2b]"
            onClick={() => handleScrollLeft(200)}
          />
          <ArrowCircleRight 
            size="25" 
            weight="fill"  
            className="cursor-pointer text-black active:text-[#292929]"
            onClick={() => handleScrollRight(200)}
          />
        </div>
      </div>
      <article 
        className="flex gap-[10px] py-10 overflow-x-scroll"
        ref={queueRef}
        >
        {renderProducts()}
      </article>
    </section>
  )
}