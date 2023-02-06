import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import { CaretLeft, CaretRight } from "phosphor-react"
import Footer from "../components/Footer"

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

const Searching = () => {
  return (
    <section>
      <Header />
      <p className="text-xl mt-14 mb-14 ml-9">20 resultados encontrados para <mark className="bg-transparent text-[#75AEE3]">computadores portateis</mark></p>
      <main className="flex flex-wrap gap-4 on-center mt-4 justify-center">
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
      </main>
      <div className="flex gap-4 on-center justify-center mt-20 flex-wrap">
        <button className="flex items-center justify-center h-[56px] w-[170px] border-[0.8px] border-[#24242E] rounded gap-4">
          <CaretLeft />
          <span>Anteceder</span>
        </button>
        <button className="flex items-center justify-center h-[56px] w-[170px] border-[0.8px] border-[#24242E] rounded gap-4">
          <span>Próximo</span>
          <CaretRight />
        </button>
      </div>
      <Footer />
    </section>
  )
}

export default Searching