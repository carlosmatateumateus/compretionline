import ProductCard from "./ProductCard"; 

interface ProductTypes {
  id: string,
  title: string,
  description: string,
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

export default function ProductQueue ({ title, products }: ProductQueueProps) {

  function ProductsMap() {
    return (
      <>
        {
          products?.map((product, index) => {
            return (
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                description={product.description}
                imgSrc={product.photo}
                id={product.id}
              />
            )
          })
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