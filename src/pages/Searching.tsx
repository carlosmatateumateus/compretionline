import { useParams } from "react-router-dom";
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import Button from "../components/Button";

import { Ghost } from "phosphor-react"
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import useAuth from "../hooks/useAuth";

interface ProductTypes {
  id: string,
  title: string,
  price: number,
  location: string,
  createdAt: string,
  photo: string
}

export default function Searching() {
  const { user } = useAuth()

  const { title } = useParams()

  const [results, setResults] = useState(0)
  const [products, setProducts] = useState([] as Array<ProductTypes>)

  useEffect(() => {
    async function callApi() {
      if (window.document.location.pathname !== "/product/my/") {
        const productsValues = await api.get(`/product/search/${title}`)

        setResults(productsValues.data.results)
        setProducts(productsValues.data.products)
      }
      
      if (window.document.location.pathname === "/product/my/" && user) {
        const productsValues = await api.get(`/product/my/${user?.uid}`)

        setResults(productsValues.data.results)
        setProducts(productsValues.data.products)
      }
    }

    return () => {
      callApi()
    }
  }, [user])

  return (
    <section>
      <Header />
      <p className="text-xl mt-14 mb-14 ml-9">
        {
          window.document.location.pathname === "/product/my/"?
          (
            <>
              { results } productos publicado por <mark className="bg-transparent text-[#75AEE3]">{user?.email}</mark>
            </>
          ):
          (
            <>
              { results } resultados encontrados para <mark className="bg-transparent text-[#75AEE3]">{title}</mark>
            </>
          )
        }
      </p>

      <>
        {
          results !== 0?
          (
            <>
              <main className="flex flex-wrap gap-4 on-center mt-4 justify-center">
                {
                  products.map((product, index) => {
                    return (
                      <div key={index}>
                        <ProductCard
                          title={product.title}
                          price={product.price}
                          imgSrc={product.photo}
                          location={product.location}
                          id={product.id}
                        />
                      </div>
                    )
                  })
                }
              </main>
            </>
          ):
          (
            <main className="h-[60vh] flex flex-col items-center justify-center gap-5">
              <Ghost size="50"/>
              <h2 className="text-[20px] text-[#24242E] font-medium">401 Nenhum producto encontrado</h2>
              <p className="text-[#AEAEAE] text-[18px] text-center">O producto que você está tentando procurando ou tentando procurar não está nesta marketplace!</p>
              <a href="/">
                <Button>Voltar para para a Home</Button>
              </a>
            </main>
          )
        }
      </>
      <Footer />
    </section>
  )
}