import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductView from "../components/ProductView";
import { useEffect, useState } from "react";
import { api, timeApi } from "../lib/axios";
import timeAgo from "../utils/timeAgo";

interface ProductTypes {
  title: string | undefined,
  description: string | undefined,
  price: number | undefined,
  photo: string | undefined,
  location: string | undefined,
  createdAt: string | undefined,
  userId: string | undefined,
}

const ProductPage = () => {
  const { productId } = useParams() as any

  const [product, setProduct] = useState({} as ProductTypes)
  const [time, setTime] = useState() as any

  useEffect(() => {
    setProduct({
      title: "???",
      description: "???",
      createdAt: "???",
      location: "???",
      photo: undefined,
      price: 0.00,
      userId: undefined
    })
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