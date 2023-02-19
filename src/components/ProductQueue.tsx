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
      </div>
      <article className="flex gap-[10px] py-10 overflow-x-scroll">
        <ProductsMap />
      </article>
    </section>
  )
}