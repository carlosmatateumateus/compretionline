interface ProductTypes {
  id: string,
  title: string,
  description: string,
  price: number,
  imgSrc: string
}

export default function ProductCard(props: ProductTypes) {
  return (
    <article className="w-[200px] flex flex-col justify-between gap-2 flex-shrink-0 cursor-pointer"> 
      <div 
        style={{backgroundImage: `url(${props.imgSrc})`, backgroundSize: 'cover'}} 
        className="h-[235px] w-[100%] card-bg flex justify-end rounded-[0.5rem] bg-no-repeat bg-center bg-slate-400"
      >
      </div>

      <div className="w-[100%] flex justify-between items-start flex-col">
        <h3 className="font-medium text-lg text-[#24242E] select-none">{ props.title.slice(0, 13) }...</h3>
        <h4 className="font-medium text-sm text-[#24242E] select-none">${ props.price }</h4>
      </div>

      <p className="text-sm text-[#BBBBBB] select-none">{props.description.slice(0, 14)}...</p>
      <a href={`/product/${props.id}`}>
        <button className="h-[50px] w-[200px] border border-[#24242E] text-[15px] rounded select-none active:bg-[#24242E] active:text-white">
          Mais informações
        </button>
      </a>

    </article>
  )
}