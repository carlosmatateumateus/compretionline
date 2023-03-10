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
  price: number,
  setPriceError: Function,
  location: string,
  setLocationError: Function,
  description: string,
  setDescriptionError: Function,
  image: string,
  setCategoryError: Function,
  category: string | any,
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
  
  if (error) {
    window.document.location = "#product-name"
  }

  return error
}

function priceValidator(props: fieldValidator) {
  let error;

  if (Number.isNaN(props.field)) {
    props.callBack('Preço invalido!')
    error = "error"
  } else if(props.field < 1) {
    props.callBack('Preço muito baixo!')
    error = "error"
  } else if(props.field > 1000000000000) {
    props.callBack('Preço muito elevado!')
    error = "error"
  } else {
    props.callBack('')
    error = ""
  }

  if (error) {
    window.document.location = "#price-name"
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

  if (error) {
    window.document.location = "#product-location"
  }

  return error
}

function categoryValidator(props: fieldValidator) {
  let error;

  if (props.field === undefined) {
    props.callBack("Categoria invalida!")
    error = "error"
  } else {
    props.callBack("")
    error = ""
  }

  if (error) {
    window.document.location = "#product-category"
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

  if (error) {
    window.document.location = "#product-description"
  }

  return error
}

function imageValidator(props: fieldValidator) {
  let error;

  if (props.field === undefined) {
    props.callBack("Selecione uma imagem!")
    error = "error"
  } else {
    props.callBack("")
    error = "error"
    error = ""
  }

  if (error) {
    window.scrollTo(0, 0)
  }

  return error
}

export default function validateForm(props:validateFormProps) {
  return new Promise((resolve, reject) => {
    const error = {
      name: '',
      price: '',
      location: '',
      category: '',
      description: '',
      image: ''
    }

    error.category = categoryValidator({
      field: props.category,
      callBack: props.setCategoryError
    })

    error.name = nameValidator({
      field: props.name,
      callBack: props.setNameError
    })

    error.price = priceValidator({
      field: props.price,
      callBack: props.setPriceError
    })

    error.location = locationValidator({
      field: props.location,
      callBack: props.setLocationError
    })

    error.description = descriptionValidator({
      field: props.description,
      callBack: props.setDescriptionError
    })

    error.image = imageValidator({
      field: props.image,
      callBack: props.setImageError,
    })

    if (
      error.name === '' && 
      error.price === '' && 
      error.location === '' &&
      error.category === '' &&
      error.description === '' &&
      error.image === ''
    ) {
      props.setSaving(true)

      createProduct({
        name: props.name,
        price: props.price,
        description: props.description,
        location: props.location,
        category: props.category,
        image: props.image,
        imageChanged: props.imageChanged,
        user: props.user,
        productId: props.productId
      }).then((response) => {
        resolve(response)
      })
    }
  })
}