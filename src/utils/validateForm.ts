import createProduct from "./createProduct"

type User = {
  uid: string,
  email: string,
  photoURL: string
}

interface validateFormProps {
  productId?: string | undefined,
  name: string
  setNameError: Function,
  price: string,
  setPriceError: Function,
  location: string,
  setLocationError: Function,
  description: string,
  setDescriptionError: Function,
  image: string,
  setImageError: Function,
  imageChanged: boolean,
  setSaving: Function,
  user: User | undefined
}

export default function validateForm(props:validateFormProps) {
  let error = false

  if (props.name === undefined || String(props.name).trim().length < 4 || props.name === "") {
    props.setNameError('Nome muito curto!')
    error = true
  } else {
    props.setNameError('')
  }

  if (Number(props.price) === 0 || Number.isNaN(Number(props.price))) {
    props.setPriceError('Preço invalido!')
    error = true
  } else {
    props.setPriceError('')
  }

  if (location === undefined || String(location).trim().length < 4 || props.location === "") {
    props.setLocationError("Localização invalida!")
    error = true
  } else {
    props.setLocationError("")
  }

  if (props.description === undefined || String(props.description).trim().length < 4 || props.description === "") {
    props.setDescriptionError("No minimo 15 caracteres!")
    error = true
  } else {
    props.setDescriptionError("")
  }

  if (props.image === undefined) {
    props.setImageError("Selecione uma imagem!")
    error = true
  } else {
    props.setImageError("")
  }

  if (!error) {
    props.setSaving(true)

    createProduct({
      name: props.name,
      description: props.description,
      image: props.image,
      location: props.location,
      price: props.price,
      imageChanged: props.imageChanged,
      user: props.user,
    })
  }
}