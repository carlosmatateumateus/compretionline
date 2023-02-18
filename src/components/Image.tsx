import { FileImage, Info, X } from "phosphor-react"
import clsx from "clsx"

interface ImageProps {
  image: any,
  imageError: string,
  imageChanged: boolean,
  setImage: Function,
  setImageChaged: Function
}

export default function Image({ image, imageChanged, imageError, setImage, setImageChaged }:ImageProps) {
  function handleUploadImage(e: any) {
    setImage(e.target.files[0])

    setImageChaged(true)
  }

  return (
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
  )
}