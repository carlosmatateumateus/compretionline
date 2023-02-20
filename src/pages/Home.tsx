import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductQueue from "../components/ProductQueue";

import { api } from "../lib/axios";

interface ProductTypes {
  id: string,
  title: string,
  price: number,
  location: string,
  createdAt: string,
  userId: string, 
  photo: string
}

export default function Home() {
  const [laptopProducts, setLaptopProducts] = useState([] as Array<ProductTypes>)
  const [phoneProductValues, setPhoneProductValues] = useState([] as Array<ProductTypes>)
  const [musicalProducts, setMusicalProduct] = useState([] as Array<ProductTypes>)

  useEffect(() => {
    async function callProducts() { 
      let laptopProductsValues = await api.get('/product/category/computadores')
      let phoneProductValues = await api.get('/product/category/smartphones')
      let musicalProductsValues = await api.get('/product/category/musical')

      setLaptopProducts(laptopProductsValues.data.products)
      setMusicalProduct(musicalProductsValues.data.products)
      setPhoneProductValues(phoneProductValues.data.products)

    }

    return () => {
      callProducts();
    }
  }, [])

  return (
    <section>
      <Header />
      <Carousel />
      <ProductQueue title="Estás a procurar de material para os estudos?" products={laptopProducts}/>
      <ProductQueue title="Estás a procura de um celular top de gama?" products={phoneProductValues}/> 
      <ProductQueue title="Está na hora de realizar os teus sonhos!"products={musicalProducts}/>
      <Footer />
    </section>
  )
}