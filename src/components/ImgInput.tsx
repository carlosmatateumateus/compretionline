import { Image } from "phosphor-react"

const ImgInput = () => {
  return (
    <div>
      <label>Adicione imagens*</label>
      <div className="max-md:w-[90vw]  p-2 w-[364px] h-[220px] mt-[17px] bg-[#a5b8fc3d] rounded border-[2px] border-dotted border-[#A5B8FC] flex flex-col gap-3 justify-center relative">
        <Image size="40px" weight="thin"/>
        <span className="flex flex-col gap-3">
          <p className="text-sm">Arraste 5 imagens para aqui ou podes abrir as images pelo navegação do dispositivo</p>
          <p className="text-sm text-[#AEAEAE]">Suporta .jpg, .jpeg and .png, (5 imagens apenas)</p>
          <button className="p-3 w-[150px] border border-[#24242E] rounded text-sm bg-white">Add image</button>
        </span>
        <input type="file" name="image[]" multiple className="left-0 p-2 w-[364px] h-[220px] absolute bg-yellow-200 opacity-0"/>
      </div>
    </div>
  )
}

export default ImgInput