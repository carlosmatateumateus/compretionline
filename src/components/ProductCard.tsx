import { Heartbeat } from "phosphor-react"

interface ProductCardProps {
  imgSrc: string,
  title: string,
  description: string,
  price: number
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <article className="w-[221px] flex flex-col justify-between gap-2 flex-shrink-0 cursor-pointer"> 
      <div 
        style={{backgroundImage: `url(${props.imgSrc})`}} 
        className="h-[250px] w-[221px] rounded card-bg flex justify-end"
      >
        <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#ffffffde] mt-2 mr-2">
          <Heartbeat size="26px" weight="duotone"/>
        </button>
      </div>

      <div className="w-[100%] flex justify-between items-center dragg">
        <h3 className="font-medium text-lg text-[#24242E] select-none">{ props.title.slice(0, 13) }</h3>
        <h4 className="font-medium text-sm text-[#24242E] select-none">${ props.price }</h4>
      </div>

      <p className="text-sm text-[#BBBBBB] select-none">{props.description.slice(0, 24)}</p>
      <button className="h-[45px] w-[80%] border border-[#24242E] text-[15px] rounded select-none">
        Mais informações
      </button>

    </article>
  )
}

export default ProductCard;