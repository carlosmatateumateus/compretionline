import { useEffect, useState } from "react"
import Button from "../components/Button"
import Footer from "../components/Footer"
import Header from "../components/Header"

import { FileImage, Info, X } from "phosphor-react"

import { storage } from "../lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { uid } from 'uid/secure';

import clsx from "clsx"
import { api } from "../lib/axios"
import useAuth from "../hooks/useAuth"
import { useParams } from "react-router-dom"

export default function NewProduct() {

  let { productId } = useParams()

  interface ProductCardProps {
    title: string,
    description: string,
    price: number,
    location: string,
    createdAt: string,
    userId: string, 
    photo: string
  }

  const [name, setName] = useState() as any
  const [nameError, setNameError] = useState() as any

  const [price, setPrice] = useState() as any
  const [priceError, setPriceError] = useState() as any

  const [location, setLocation] = useState() as any
  const [locationError, setLocationError] = useState() as any

  const [description, setDescription] = useState() as any
  const [descriptionError, setDescriptionError] = useState() as any

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
          setImage(value.data.photo)
        }

      }
    }

    return () => {
      validateProduct()
    }
  }, [])

  function handleUploadImage(e: any) {
    setImage(e.target.files[0])

    setImageChaged(true)
  }

  function UploadImage() {
    const imageName = uid(60)
    const storageRef = ref(storage, `${imageName}.jpg`);

    return new Promise(async (resolve, reject) => {
      await uploadBytes(storageRef, image).then(() => {
        console.log('Imagem carregada!');
  
        getDownloadURL(ref(storage, `${imageName}.jpg`))
        .then(url => {
          resolve(url)
        })
        .catch(error => {
          reject(error)
        })
      });
    })
  }
  
  async function createProduct() {
    setSaving(true)

    let photo;

    if (imageChanged) {
      photo = await UploadImage()
    } else {
      photo = image
    }

    console.log(photo)

    if (window.location.pathname !== "/product/new") {
      console.log('Recebi a foto')

      console.log(photo)
      await api.patch(`/product/${productId}`, {
        title: name,
        photo,
        price: Number(price),
        description,
        location,
      })
      console.log('Postei o producto')
    } else {
      const product = await api.post('/product', {
        userId: user?.uid,
        title: name,
        photo,
        price: Number(price),
        description,
        location,
      })

      productId = product.data.id
    }

    window.document.location = `/product/${productId}`
  }

  function validateForm(e:any) {
    e.preventDefault()
    e.target.value = ""

    let error = false

    if (name === undefined || String(name).trim().length < 4 || name === "") {
      setNameError('Nome muito curto!')
      error = true
    } else {
      setNameError('')
    }

    if (Number(price) === 0 || Number.isNaN(Number(price))) {
      setPriceError('Preço invalido!')
      error = true
    } else {
      setPriceError('')
    }

    if (location === undefined || String(location).trim().length < 4 || location === "") {
      setLocationError("Localização invalida!")
      error = true
    } else {
      setLocationError("")
    }

    if (description === undefined || String(description).trim().length < 4 || description === "") {
      setDescriptionError("No minimo 15 caracteres!")
      error = true
    } else {
      setDescriptionError("")
    }

    if (image === undefined) {
      setImageError("Selecione uma imagem!")
      error = true
    } else {
      setImageError("")
    }

    console.log(error)

    if (!error) {
      createProduct()
    }
  }

  return (
    <section>
      <Header />

        <form 
          className="on-center mt-[43px]"
          method="post"
          onSubmit={validateForm}
        >

          <h2 className="text-[24px] text-[#24242E] font-medium leading-relaxed" onClick={() => console.log(Number(price))}>Products details</h2>
          <p className="text-[15px] text-[#AEAEAE]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <hr className="mt-[17px] w-[90%]"/>

          <main className="flex gap-6 mt-[17px] flex-wrap">
            <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[16px]">
              <div className="mb-[7px] w-[305px] flex justify-between">
                <label>Fotografia *</label>
                  <aside 
                    className={clsx("flex items-center gap-1 text-[#ff6961]", {
                      "hidden": imageError==="" || imageError===undefined,
                      "block": imageError!==""
                    })}
                  > 
                    <Info />
                    <span className="text-[14px]">{ imageError }</span>
                  </aside>
                </div>
              <div className="max-md:w-[90vw] p-5 w-[305px] h-[140px]  bg-[#a5b8fc3d] rounded border-[2px] border-dotted border-[#A5B8FC] flex relative flex-col gap-3 justify-center">
                <span className="flex flex-col gap-3"> 
                  <p className="text-sm text-center">Arraste uma imagem ou selecione pela navegação do dispositivo.</p>
                  <input 
                    className="top-0 right-0 bottom-0 left-0 p-2 w-[100%] h-[100%] absolute cursor-pointer opacity-0"
                    type="file" accept=".png, .jpg, .jpeg" 
                    onChange={handleUploadImage} 
                  />
                </span>
              </div>

              <span 
                  className="rounded border h-[56px] text-[14px] border-[#24242E] bg-[#eeeeee38] p-4 placeholder:text-[14px] max-md:w-[100%] flex justify-between items-center"
                  placeholder="Qual é a sua localização actual?"
              >
                {
                  image?
                  (
                    <>
                      {
                        !imageChanged?
                        (
                          <>
                            <p>{String(image).slice(0, 30)}</p>
                            <X 
                              className="cursor-pointer"
                              onClick={function() {
                                setImage("")
                              }}
                            />
                          </>
                        ):
                        (
                          <>
                            <p>{String(image?.name).slice(0, 30)}</p>
                            <X 
                              className="cursor-pointer"
                              onClick={function() {
                                setImage("")
                              }}
                            />
                          </>
                        )
                      }
                    </>
                  ):
                  (
                    <>
                      <p>Nenhuma imagem selecionda</p>
                      <FileImage size="20" />
                    </>
                  )
                }
              </span>
            </div>  

            <div className="mb-[16px]">
              <div className="mb-[16px] w-[305px] flex justify-between">
                <label className="flex-shrink-0">Nome *</label>
                <aside 
                  className={clsx("flex items-center gap-1 text-[#ff6961]", {
                    "hidden": nameError==="" || nameError===undefined,
                    "block": nameError!==""
                  })}
                > 
                  <Info />
                  <span className="text-[14px]">{ nameError }</span>
                </aside>
              </div>
              <input 
                className="rounded border h-[56px] text-[14px] border-[#24242E] p-4 placeholder:text-[14px] max-md:w-[100%]"
                placeholder="Qual é o nome do producto?"
                onChange={(e) => { setName(e.target.value) }}
                value={name}
              />
            </div>

            <div className="mb-[16px]">
              <div className="mb-[16px] w-[305px] flex justify-between">
                <label>Preço *</label>
                <aside 
                  className={clsx("flex items-center gap-1 text-[#ff6961]", {
                    "hidden": priceError==="" || priceError===undefined,
                    "block": priceError!==""
                  })}
                > 
                  <Info />
                  <span className="text-[14px]">{ priceError }</span>
                </aside>
                </div>
                <input 
                  className="rounded border h-[56px] text-[14px] border-[#24242E] p-4 placeholder:text-[14px] max-md:w-[100%]"
                  placeholder="Degite o preço do producto"
                  onChange={(e) => { setPrice(e.target.value) }}
                  value={price}
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <div className="mb-[16px] w-[305px] flex justify-between">
                  <span>Descrição * </span>
                  <aside 
                    className={clsx("flex items-center gap-1 text-[#ff6961]", {
                      "hidden": descriptionError==="" || descriptionError===undefined,
                      "block": descriptionError!==""
                    })}
                  >  
                    <Info />
                    <span className="text-[14px]">{ descriptionError }</span>
                  </aside>
                </div>
                <textarea
                  title="Descrição"
                  placeholder="Faça uma breve e descrição sobre o producto"
                  className="max-md:w-[90vw] resize-none p-5 w-[305px] h-[217px]  rounded border text-[14px] border-[#24242E] placeholder:text-[14px]"
                  onChange={(e) => { setDescription(e.target.value) }}
                  value={description}
                />
              </div>

              <div className="mb-[16px]">
                <div className="mb-[16px] w-[305px] flex justify-between">
                  <label>Localização *</label>
                  <aside 
                    className={clsx("flex items-center gap-1 text-[#ff6961]", {
                      "hidden": locationError==="" || locationError===undefined,
                      "block": locationError!==""
                    })}
                  > 
                    <Info />
                    <span className="text-[14px]">{ locationError }</span>
                  </aside>
                </div>
                <input 
                  className="rounded border h-[56px] text-[14px] border-[#24242E] p-4 placeholder:text-[14px] max-md:w-[100%]"
                  placeholder="Qual é a sua localização actual?"
                  onChange={(e) => { setLocation(e.target.value) }}
                  value={location}
                />
              </div>
            </div>
          </main>

          <div className="flex items-center justify-end gap-3 max-md:justify-center mt-20">
            <a href="/">
              <span className="text-[#24242E] cursor-pointer">Cancelar</span>
            </a>
            {
              user?
              (
                <Button 
                  type="submit"
                >
                  Salvar producto
                {
                  saving?
                  (
                    <span className="btn-ring" />
                  ):
                  null
                }
                </Button>
              ):
              (
                <Button 
                  type="button"
                  disabled
                >
                  Salvar producto
                </Button>
              )
            }
          </div>

        </form>
      <Footer />
    </section>
  )
}