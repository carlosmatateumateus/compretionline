import { MapPin } from "phosphor-react"

interface ProductTypes {
  id: string | undefined,
  title: string | undefined,
  location: string | undefined,
  price: number | undefined,
  imgSrc: string | undefined
}

export default function ProductCard(props: ProductTypes) {
  return (
    <article className="w-[200px] flex flex-col justify-between gap-2 flex-shrink-0 cursor-pointer"> 
      <div 
        style={{backgroundImage: `url(${String(props?.imgSrc)})`, backgroundSize: 'cover'}} 
        className="h-[235px] w-[100%] card-bg flex justify-end rounded-[0.5rem] bg-no-repeat bg-center skeleton"
      />
      <div className="w-[100%] flex justify-between items-start flex-col">
        <h3 className="font-medium text-lg text-[#24242E] select-none">{ String(props?.title).slice(0, 13) }...</h3>
        <h4 className="font-medium text-sm text-[#24242E] select-none">${ Number(props?.price) }</h4>
      </div>

      <span className="text-[#474747] flex gap-2 items-center mb-2 text-[14px]">
        <MapPin />
        { props?.location?.slice(0, 12) }...
      </span>

      {
        props.id?
        (
          <a href={`/product/${props.id}`}>
            <button className="h-[50px] w-[200px] border border-black text-[15px] rounded select-none active:bg-black active:text-white">
              Informações
            </button>
          </a>
        ):
        (
          <button className="h-[50px] w-[200px] border border-black text-[15px] rounded select-none active:bg-black active:text-white">
              Carregando ....
          </button>
        )
      }

    </article>
  )
}