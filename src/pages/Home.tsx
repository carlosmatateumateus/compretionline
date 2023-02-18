import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductQueue from "../components/ProductQueue";

import { api } from "../lib/axios";

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

export default function Home() {
  const [laptopProducts, setLaptopProducts] = useState([] as Array<ProductTypes>)
  const [phoneProductValues, setPhoneProductValues] = useState([] as Array<ProductTypes>)
  const [gamerProducts, setGamerProducts] = useState([] as Array<ProductTypes>)

  useEffect(() => {
    async function callProducts() { 
      let laptopProductsValues = await api.get('/product/search/computador')
      let phoneProductValues = await api.get('/product/search/celular')
      let gamerProductsValues = await api.get('/product/search/gamer')

      setLaptopProducts(laptopProductsValues.data.products)
      setGamerProducts(gamerProductsValues.data.products)
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
      <ProductQueue title="O computador perfeito para a faculdade" products={laptopProducts}/>
      <ProductQueue title="Estás a procura de um celular para FF?" products={phoneProductValues}/> 
      <ProductQueue title="Está na hora de teres aquele canto."products={gamerProducts}/>
      <Footer />
    </section>
  )
}