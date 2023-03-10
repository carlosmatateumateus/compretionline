import { FileImage, Info, X } from "phosphor-react"
import clsx from "clsx"
import deleteImage from "../utils/deleteImage";

interface ImageUploaderProps {
  id?: string,
  image: string | any,
  imageError: string,
  imageChanged: boolean,
  setImage: Function,
  setImageChaged: Function
}

export default function ImageUploader(props:ImageUploaderProps) {
  function handleUploadImage(e: any) {
    props.setImage(e.target.files[0])
    
    props.setImageChaged(true)
  }

  return (
    <div className="flex flex-col gap-[17px]" id={props.id}>
      <div className="max-md:w-[90vw] mb-[7px] w-[305px] flex justify-between">
        <label>Fotografia *</label>
          <aside 
            className={clsx("flex items-center gap-1 text-[#ff6961]", {
              "hidden": props.imageError==="" || props.imageError===undefined,
              "block": props.imageError!==""
            })}
          > 
            <Info />
            <span className="text-[14px]">{ props.imageError }</span>
          </aside>
        </div>
      <div className="max-md:w-[100%] p-5 w-[305px] h-[140px]  bg-[#a5b8fc3d] rounded border-[2px] border-dotted border-[#A5B8FC] flex relative flex-col gap-3 justify-center">
        {
          !props.image?
          (
            <span className="flex flex-col gap-3"> 
              <p className="text-sm text-center">Arraste uma imagem ou selecione pela navegação do dispositivo.</p>
              <input 
                className="top-0 right-0 bottom-0 left-0 p-2 w-[100%] h-[100%] absolute cursor-pointer opacity-0"
                type="file" accept=".png, .jpg, .jpeg" 
                onChange={handleUploadImage} 
              />
            </span>
          ):
          (
            <>
            {
              !props.imageChanged?
              (
                <div 
                  className="max-md:w-[100%] absolute top-0 left-0 w-[300px] h-[136px] bg-cover  bg-left-bottom skeleton-image" 
                  style={{backgroundImage: `url(${props.image})`}}
                />
              ):
              (
                <div 
                  className="max-md:w-[100%] absolute top-0 left-0 w-[300px] h-[136px] bg-cover bg-left-bottom skeleton-image" 
                  style={{backgroundImage: `url(${URL.createObjectURL(props.image)})`}}
                />
              )
            }
          </>
          )
        }
      </div>

      <span 
          className="rounded border h-[56px] text-[14px] border-[#24242E] bg-[#eeeeee38] p-4 placeholder:text-[14px] max-md:w-[100%] flex justify-between items-center"
          placeholder="Qual é a sua localização actual?"
      >
        {
          props.image?
          (
            <>
              {
                !props.imageChanged?
                (
                  <>
                    <p>{String(props.image).slice(0, 30)}</p>
                    <X 
                      className="cursor-pointer"
                      onClick={async () => {
                        await deleteImage(props.image)
                        .then(() => {
                          props.setImage(undefined)
                        })
                      }}
                    />
                  </>
                ):
                (
                  <>
                    <p>{String(props.image?.name).slice(0, 30)}</p>
                    <X 
                      className="cursor-pointer"
                      onClick={function() {
                        props.setImage(undefined)
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
  )
}