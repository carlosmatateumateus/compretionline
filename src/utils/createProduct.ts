import { storage } from "../lib/firebase";
import { uid } from 'uid/secure';
import { api } from "../lib/axios"

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import imageCompression from "browser-image-compression";

type User = {
  uid: string,
  email: string,
  photoURL: string
}

interface createProductProps {
  imageChanged: boolean,
  productId?: string | undefined,

  name: string,
  price: number,
  location: string,
  category: string,
  description: string,
  image: any,
  user: User | undefined
}


function uploadImage(image: any) {
  const compressionOptions = {
    maxSizeMB: 0.4,
    useWebWorker: true
  }

  const imageName = uid(60)
  const storageRef = ref(storage, `${imageName}.jpg`);


  return new Promise(async (resolve, reject) => {
    const compressedFile = await imageCompression(image, compressionOptions);

    console.log(compressedFile)

    await uploadBytes(storageRef, compressedFile).then(() => {  
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

export default async function createProduct(props: createProductProps) {
  return new Promise(async (resolve, reject) => {
    if (props.imageChanged) {
      props.image = await uploadImage(props.image)
    } else {
      props.image = props.image
    }
    
    if (window.location.pathname !== "/product/new") {

      await api.patch(`/product/${props.productId}`, {
        title: props.name,
        price: props.price,
        location: props.location,
        category: props.category,
        description: props.description,
        photo: props.image,
      })

    } else {
      const product = await api.post('/product', {
        title: props.name,
        price: props.price,
        location: props.location,
        category: props.category,
        description: props.description,
        photo: props.image,
        userId: props.user?.uid,
      })
      
      props.productId = product.data.id
    }

    resolve(`/product/${props.productId}`)
  })
}