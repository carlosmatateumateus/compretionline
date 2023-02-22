import { useParams } from "react-router-dom";
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import Button from "../components/Button";
import Select from "../components/Select";

import { Ghost } from "phosphor-react"
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import useAuth from "../hooks/useAuth";
import clsx from "clsx";

interface ProductTypes {
  id: string,
  title: string,
  price: number,
  location: string,
  createdAt: string,
  photo: string
}

const categoryOptions = [
  { value: "smartphones", label: "smartphones" },
  { value: "computadores", label: "computadores" },
  { value: "gamers", label: "gamers", },
  { value: "musical", label: "musical" }
]

export default function ProductResearch() {
  const { user } = useAuth()

  const { title, categoryParam } = useParams()

  const [results, setResults] = useState(0)
  const [products, setProducts] = useState([] as Array<ProductTypes>)

  const [category, setCategory] = useState() as any

  useEffect(() => {
    async function callApi() {
      if (window.document.location.pathname !== "/product/my/") {
        let productsValues;
        if (categoryParam) {
          setCategory(categoryParam)
          productsValues = await api.get(`/product/search/${title}/${categoryParam}`)
        } else {
          productsValues = await api.get(`/product/search/${title}`)
        }
        
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

  function searchWithCategory() {
    if (category) {
      window.document.location = `/search/${title}/${category}`
    }
  }

  return (
    <section>
      <Header title={title}/>
      <div className="flex items-center justify-between flex-wrap ">
        <p className="text-xl mt-14 mb-14 ml-[18px]">
          {
            window.document.location.pathname === "/product/my"?
            (
              <>
                {
                  results && user?.email?
                  (
                    <>
                    { results } productos publicado por {user?.email}
                    </>
                  ):
                  (
                    <>
                    ??? productos publicado por ???
                    </>
                  )
                }
              </>
            ):
            (
              <>
                {
                  results?
                  (
                    <>
                      { results } resultados encontrados para {title}
                    </>
                  ):
                  (
                    <>
                      ??? resultados encontrados para ???
                    </>
                  )
                }
              </>
            )
          }
        </p>
        <div className="flex items-center gap-1 max-md:justify-center max-md:w-[100%] flex-wrap">
          <span 
          className={clsx('text-[14px] p-1 select-none', {
            "text-gray-300 cursor-default": !category,
            "cursor-pointer": category
          })}
          onClick={() => setCategory(undefined)}
          >
            limpar
          </span>
          <Select
            id="product-filter"
            placeHolder="Categoria"
            options={categoryOptions}
            setValue={setCategory}
            value={category}
          />
          
          <button
            className={clsx("w-[150px] h-[56px] text-[13px] border bg-black text-white  select-none rounded flex-shrink-0 pl-4 pr-4 flex items-center justify-center gap-3", {
              "cursor-not-allowed": !category
            })}
            onClick={() => searchWithCategory()}
          >
            Aplicar filtros
          </button>
        </div>
      </div>

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
              <Ghost size="50" weight="fill"/>
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