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
  price: string,
  location: string,
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
  if (props.imageChanged) {
    props.image = await uploadImage(props.image)
  } else {
    props.image = props.image
  }
  
  if (window.location.pathname !== "/product/new") {
    console.log('Editando o producto!')

    await api.patch(`/product/${props.productId}`, {
      title: props.name,
      photo: props.image,
      price: Number(props.price),
      description: props.description,
      location: props.location,
    })

  } else {
    console.log('Criando novo producto!')
    const product = await api.post('/product', {
      userId: props.user?.uid,
      title: props.name,
      photo: props.image,
      price: Number(props.price),
      description: props.description,
      location: props.location,
    })
    
    props.productId = product.data.id
  }

  window.document.location = `/product/${props.productId}`
}