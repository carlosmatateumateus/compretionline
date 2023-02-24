import React from 'react';
import { useParams } from "react-router-dom";
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import Select from "../components/Select";

import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import useAuth from "../hooks/useAuth";
import clsx from "clsx";
import Error404 from "../components/Error404";
import LoadMoreButton from "../components/LoadMoreButton"

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

  const [data, setData] = useState([] as ProductTypes[])

  const [category, setCategory] = useState() as any
  const [page, setPage] = useState(1)

  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    if (window.document.location.pathname !== "/product/my/") {
      let response: any;

      setIsLoading(true)

      if (categoryParam) {
        setCategory(categoryParam)
        response = await api.get(`/product/search/${title}/${page}/${categoryParam}`)
      } else {
        response = await api.get(`/product/search/${title}/${page}`)
      }

      const newData = response.data.products;

      setData([...data, ...newData]);

      console.log(data.length)
  
      setResults(response.data.results)

      console.log(results)

      setIsLoading(false)
    }
    
    if (window.document.location.pathname === "/product/my" && user) {
      console.log('OSKEY')
      setIsLoading(true)

      const response = await api.get(`/product/my/${user?.uid}`)

      const newData = response.data.products;

      setData([...data, ...newData]);

      setResults(response.data.results)
      setIsLoading(false)
    }
  }

  useEffect(() => { fetchData() }, [user?.uid, page])

  function searchWithCategory() {
    if (category) {
      window.document.location = `/search/${title}/${category}`
    }
  }

  function productsReasearch(type?: string) {
    if (type === "my") {
      if (user?.email) {
        return <span>{ results } productos publicado por {user?.email}</span>
      } else {
        return <>??? productos publicado por ???</> 
      }
    } else {
      if (results) {
        return <>{ results } resultados encontrados para {title}</>
      } else {
        return <>??? resultados encontrados para ???</>
      }
    }
  }

  function reaserchTitle() {
    if (window.document.location.pathname === "/product/my") {
      return productsReasearch("my")
    } else {
      return productsReasearch()
    }
  }

  function renderProducts() {
    if (results === 0) {
      return (
        <Error404 
          title="Productos não encontrados"
          description="Os tipos productos que você está procurando ou tentando procurar não estão neste marketplace!"
        />
      )
    } else {
      return data.map((product) => (
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
  }

  return (
    <section>
      <Header title={title}/>
      <div className="flex items-center justify-between flex-wrap ">
        <p className="text-xl mt-14 mb-14 ml-[18px]">
          { reaserchTitle() }
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
      <main className="flex flex-wrap gap-4 on-center mt-4 justify-center">
        { renderProducts() }
      </main>
      {
        data.length !==results?
          <LoadMoreButton 
            page={page}
            setPage={setPage}
            isLoading={isLoading}
        />:
        null
      }
      <Footer />
    </section>
  )
}