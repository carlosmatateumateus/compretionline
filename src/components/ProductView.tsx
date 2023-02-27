import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Button from "./Button";

import { MapPin, Envelope, Timer, Pencil, Trash } from "phosphor-react";

import { api } from "../lib/axios";
import { Link } from "react-router-dom";
import deleteImage from "../utils/deleteImage";

interface ProductTypes {
  id: string | undefined,
  title: string | undefined,
  description: string | undefined,
  price: number | undefined,
  location: string | undefined,
  createdAt: string | undefined,
  userId: string | undefined, 
  photo: string | undefined,

  setIsDeleted: Function
}

type User = {
  uid: string,
  email: string,
  photoURL: string
}

const ProductView = (
  { 
    id, title, description,
    price, location, createdAt,
    userId, photo, setIsDeleted
  }: ProductTypes) => {
  const { user } = useAuth()

  const [ userEmail, setUserEmail ] = useState({} as User)

  useEffect(() => {
    async function callUser() {
      if (id !== undefined) {
        const userData = await api.get(`/user/email/${id}`)
      
        setUserEmail(userData.data.email)
      }
    }

    return () => {
      callUser()
    }
  }, [])

  async function deleteProduct() {
    setIsDeleted(true)

    await api.delete(`/product/${id}`)
    .then(() => {
      deleteImage(photo)
    })
  }

  return (
    <section className="mt-[87px] flex justify-between w-[100%] on-center max-md:justify-center gap-4 max-[700px]:flex-wrap">
      <article
        className="h-[360px] w-[400px] flex-shrink-0 no-auto"
      >
        <aside 
          className="h-[100%] w-[100%] rounded skeleton bg-left-bottom"  
          style={{backgroundImage: `url(${photo})`, backgroundSize: 'cover'}} 
        />
      </article>
      <div className="w-[60%] max-[1000px]:w-[400px]">
        <div className="flex items-center gap-4 flex-wrap">
          <h3 className="font-medium text-[28px]">{title}</h3>
          <span className="flex items-center gap-1 text-[14px] text-gray-400">
            <Timer /> { createdAt }
          </span>
        </div>
        <p className="block mb-[10px] mt-[10px] text-[16px]">
          { description }
        </p>
        <span className="text-[#474747] flex gap-2 items-center mb-2">
          <MapPin />
          { location }
        </span>
        <h4 className="text-lg text-[#474747] mb-[19px]">{price} $</h4>
        <div className="flex gap-2 rounded">
        {
          title !== "???" && title !== undefined?
          (
            <>
              {
                user?.uid !== userId?
                (
                  <a href={`mailto:${userEmail}`}>
                    <Button>
                      <Envelope size="20"/>
                      Falar com o vendedor
                    </Button>
                  </a>
                ):
                (
                  <div className="flex gap-4 items-center">
                    <Link to={`/product/edit/${id}`}>
                      <Button>
                        <Pencil size="20"/>
                        Editar producto
                      </Button>
                    </Link>
                    <button 
                      className="border w-[54px] h-[56px] flex items-center justify-center rounded"
                      onClick={() => deleteProduct()}
                    >
                      <Trash 
                        size="20" 
                        weight="duotone" 
                      />
                    </button>
                  </div>
                )
              }
            </>
          ):
          (
            <div className="flex gap-4 items-center">
              <button className="h-[56px] w-[130px] skeleton text-white text-center rounded pl-4 pr-4">
                ???
              </button>
            </div>
          )
        }
        
        </div>
      </div>
    </section>
  )
}

export default ProductView;