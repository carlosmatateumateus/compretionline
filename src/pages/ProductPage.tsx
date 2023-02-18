import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductView from "../components/ProductView";
import { useEffect, useState } from "react";
import { api, timeApi } from "../lib/axios";
import timeAgo from "../lib/timeAgo";

interface ProductTypes {
  title: string,
  description: string,
  price: number,
  location: string,
  createdAt: string,
  userId: string, 
  photo: string
}

const ProductPage = () => {
  const { productId } = useParams() as any

  const [product, setProduct] = useState({} as ProductTypes)
  const [time, setTime] = useState() as any

  useEffect(() => {
    async function callApi() {
      const value = await api.get(`/product/${productId}`)

      if (value.data === null) {
        window.document.location = '/error'
      } else {
        const dataValue = await timeApi.get('timezone/Africa/Luanda')

        setProduct(value.data)
        setTime(timeAgo({ createdAt: value.data.createdAt, timeNow: dataValue.data.utc_datetime }))
      }
    }

    return () => {
      callApi()
    }
  }, [])

  return (
    <section className="on-center">
      <Header />
      <ProductView
        title={product.title}
        price={product.price}
        description={product.description}
        location={product.location}
        createdAt={time}
        userId={product.userId}
        photo={product.photo}
        id={productId}
      />
      <Footer />
    </section>
  )
}

export default ProductPage;