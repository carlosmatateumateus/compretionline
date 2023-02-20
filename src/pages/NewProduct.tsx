import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

import InputProduct from "../components/InputProduct"

import { api, locationApi } from "../lib/axios"
import useAuth from "../hooks/useAuth"
import { useParams } from "react-router-dom"

import validateForm from "../utils/validateForm"

import Image from "../components/Image"
import PostAction from "../components/PostActions"

export default function NewProduct() {

  let { productId } = useParams()

  const [name, setName] = useState() as any
  const [nameError, setNameError] = useState() as any

  const [price, setPrice] = useState() as any
  const [priceError, setPriceError] = useState() as any

  const [location, setLocation] = useState() as any
  const [locationError, setLocationError] = useState() as any

  const [description, setDescription] = useState() as any
  const [descriptionError, setDescriptionError] = useState() as any

  const [category, setCategory] = useState() as any
  const [categoryError, setCategoryError] = useState() as any

  const [image, setImage] = useState() as any
  const [imageError, setImageError] = useState() as any

  const [imageChanged, setImageChaged] = useState(false)

  const [saving, setSaving] = useState(false)

  const { user } = useAuth()

  useEffect(() => {
    async function validateProduct() {
      if (productId !== undefined) {
        const value = await api.get(`/product/${productId}`)

        if (user && value.data.userId !== user?.uid || value.data === null) {
          window.document.location = "/error"
        } else {        
          setName(value.data.title)
          setPrice(value.data.price)
          setDescription(value.data.description)
          setLocation(value.data.location)
          setCategory(value.data.category)
          setImage(value.data.photo)
        }

      } else {
        const locationValue = await locationApi.get('')

        setLocation(`${locationValue.data.country_name}, ${locationValue.data.country_capital}`)
      }
    }

    return () => {
      validateProduct()
    }
  }, [productId])

  function handleSubmit(e: any) {
    e.preventDefault()

    validateForm({
      name,
      setNameError,

      description,
      setDescriptionError,

      location,
      setLocationError,

      price: Number(price),
      setPriceError,

      category,
      setCategoryError,
      
      image,
      setImageError,
    
      imageChanged,
      productId,
      setSaving,
      user
    })
  }

  return (
    <section>
      <Header />
        <form 
          className="on-center mt-[43px]"
          method="post"
          onSubmit={handleSubmit}
        >

          <h2 className="text-[24px] text-[#24242E] font-medium leading-relaxed" onClick={() => console.log(Number(price))}>Products details</h2>
          <p className="text-[15px] text-[#AEAEAE]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <hr className="mt-[17px] w-[90%]"/>

          <main className="flex gap-6 mt-[17px] flex-wrap">
            <div className="flex flex-col gap-5">
              <Image
                image={image}
                imageChanged={imageChanged}
                imageError={imageError}
                setImage={setImage}
                setImageChaged={setImageChaged} 
              />

              <InputProduct 
                label="Nome"
                placeHolder="Qual é o nome do producto?"
                inputValue={name} 
                setValue={setName} 
                inputError={nameError}
              />

              <InputProduct 
                label="Preço"
                placeHolder="Qual é o preço do producto?"
                inputValue={price} 
                setValue={setPrice} 
                inputError={priceError}
              />

            </div>

            <div className="flex flex-col gap-5">
              <InputProduct 
                label="Descrição"
                placeHolder="Faça uma breve e descrição sobre o producto"
                inputValue={description} 
                setValue={setDescription} 
                inputError={descriptionError}
                isTextArea
              /> 

              <InputProduct 
                label="Localização"
                placeHolder="Onde você está localizado?"
                inputValue={location} 
                setValue={setLocation} 
                inputError={locationError}
              />

              <InputProduct 
                label="Categoria"
                placeHolder="Onde você está localizado?"
                inputValue={category} 
                setValue={setCategory} 
                inputError={categoryError}
                isSelect
              /> 

            </div>
          </main>

          <PostAction 
            user={user}
            saving={saving}
          />
        </form>
      <Footer />
    </section>
  )
}