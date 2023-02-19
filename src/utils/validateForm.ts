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

type fieldValidator = {
  field: string | any,
  callBack: Function
}

function nameValidator(props: fieldValidator) {
  let error;

  if (props.field === undefined) {
    props.callBack('Nome invalido!')
    error = "error"
  } else if (props.field.length < 10) {
    props.callBack('Nome muito curto!')
    error = "error"
  } else if (props.field.length > 20) {
    props.callBack('Nome muito longo!')
    error = "error"
  } else {
    props.callBack('')
    error = ""
  }

  return error
}

function priceValidator(props: fieldValidator) {
  let error;

  if (Number.isNaN(Number(props.field))) {
    props.callBack('Preço invalido!')
    error = "error"
  } else if(Number(props.field) < 1) {
    props.callBack('Preço muito baixo!')
    error = "error"
  } else if(Number(props.field) > 1000000000000) {
    props.callBack('Preço muito elevado!')
    error = "error"
  } else {
    props.callBack('')
    error = ""
  }

  return error
}

function locationValidator(props: fieldValidator) {
  let error;

  if (props.field === undefined) {
    props.callBack("Localização invalida!")
    error = "error"
  } else if(props.field.length < 5) {
    props.callBack('Cordenada insuficiente!')
    error = "error"
  } else if (props.field.length > 30) {
    props.callBack('Cordenada exagerada!')
    error = "error"
  } else {
    props.callBack("")
    error = ""
  }

  return error
}

function descriptionValidator(props: fieldValidator) {
  let error;

  if (props.field === undefined || String(props.field).trim().length < 30) {
    props.callBack("Minimo 30 caracteres!")
    error = "error"
  } else if (String(props.field).trim().length > 350) {
    props.callBack("Máximo 350 caracteres!")
    error = "error"
  } else {
    props.callBack("")
    error = "error"
    error = ""
  }

  return error
}

type fieldImageValidator = {
  default: fieldValidator,
  imageChanged: boolean,
}

function imageValidator(props: fieldImageValidator) {
  let error;

  if (props.default.field === undefined) {
    props.default.callBack("Selecione uma imagem!")
    error = "error"
  } else {
    props.default.callBack("")
    error = "error"
    error = ""
  }

  if (props.imageChanged) {
    const size = parseInt(String(props.default.field.size / 1024))

    if (size > 1000) {
      props.default.callBack('Imagem muito grande!')
      error = "error"
    } else if (size < 15) {
      props.default.callBack('Imagem sem nitidez!')
      error = "error"
    } else {
      error = ""
    }
  } else {
    error = ""
  }

  return error
}

export default function validateForm(props:validateFormProps) {
  const error = {
    name: '',
    price: '',
    location: '',
    description: '',
    image: ''
  }

  error.name = nameValidator({
    field: props.name,
    callBack: props.setNameError
  }) as string

  error.price = priceValidator({
    field: props.price,
    callBack: props.setPriceError
  }) as string

  error.location = locationValidator({
    field: props.location,
    callBack: props.setLocationError
  }) as string

  error.description = descriptionValidator({
    field: props.description,
    callBack: props.setDescriptionError
  }) as string

  error.image = imageValidator({
    default: {
      field: props.image,
      callBack: props.setImageError,
    },
    imageChanged: props.imageChanged
  }) as string

  if (
    error.name === '' && 
    error.price === '' && 
    error.location === '' &&
    error.description === '' &&
    error.image === ''
  ) {
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