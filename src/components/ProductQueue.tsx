import ProductCard from "./ProductCard";

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
      <div className="on-center flex items-center justify-between flex-wrap">
        <h2 className="text-2xl font-medium mb-1">{props.title}</h2>
        {/* <span className="text-[#75AEE3]">Ver mais &gt;</span> */}
      </div>
      <article 
        className="flex gap-[10px] py-10 overflow-x-scroll"
        >
        {
          products.map((product, index) => {
            return (
              <div key={index}>
                <ProductCard
                  title={product.title}
                  price={product.price}
                  imgSrc={product.imgSrc}
                  description={product.description}
                />
              </div>
            )
          })
        }
      </article>
    </section>
  )
}

export default ProductQueue;