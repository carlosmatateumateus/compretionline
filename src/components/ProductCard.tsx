interface ProductTypes {
  id: string | undefined,
  title: string | undefined,
  description: string | undefined,
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

      <p className="text-sm text-[#BBBBBB] select-none">{ String(props?.description).slice(0, 13) }...</p>
      <a>
        <button className="h-[50px] w-[200px] border border-[#24242E] text-[15px] rounded select-none active:bg-[#24242E] active:text-white">
          Mais informações
        </button>
      </a>

    </article>
  )
}