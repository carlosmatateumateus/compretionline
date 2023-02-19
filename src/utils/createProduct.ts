import { storage } from "../lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { uid } from 'uid/secure';
import { api } from "../lib/axios"

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
  const imageName = uid(60)
  const storageRef = ref(storage, `${imageName}.jpg`);

  return new Promise(async (resolve, reject) => {
    await uploadBytes(storageRef, image).then(() => {  
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
  let photo;
  let productId;

  if (props.imageChanged) {
    photo = await uploadImage(props.image)
  } else {
    photo = props.image
  }
  
  if (window.location.pathname !== "/product/new") {
    await api.patch(`/product/${props.productId}`, {
      title: props.name,
      photo,
      price: Number(props.price),
      description: props.description,
      location: props.location,
    })
  } else {
    const product = await api.post('/product', {
      userId: props.user?.uid,
      title: props.name,
      photo,
      price: Number(props.price),
      description: props.description,
      location: props.location,
    })
    
    productId = product.data.id
  }

  window.document.location = `/product/${productId}`
}