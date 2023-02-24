import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api, timeApi } from "../lib/axios";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductView from "../components/ProductView";

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

export default function Product() {
  const { productId } = useParams() as any
  const navigate = useNavigate()

  const [product, setProduct] = useState({} as ProductTypes)
  const [time, setTime] = useState("???") 

  const [isDeleted, setIsDeleted] = useState(false)
  

  useEffect(() => {
    setProduct({
      title: "???",
      description: "???",
      createdAt: time,
      location: "???",
      photo: undefined,
      price: 0.00,
      userId: undefined
    })

    async function callApi() {
      const value = await api.get(`/product/${productId}`)

      if (isDeleted) {
        navigate('/')
      }

      if (value.data === null && isDeleted === false) {
        navigate('/404')
      } else {
        const dataValue = await timeApi.get('timezone/Africa/Luanda')

        setProduct(value.data)
        setTime(timeAgo({ createdAt: value.data.createdAt, timeNow: dataValue.data.utc_datetime }))
      }
    }

    return () => {
      callApi()
    }
  }, [isDeleted])

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
        setIsDeleted={setIsDeleted}
        id={productId}
      />
      <Footer />
    </section>
  )
}
