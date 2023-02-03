import Button from "./Button"

const FilterBar = () => {
  return (
    <article className="on-center mt-14">
      <p className="text-lg">20 resultados encontrados para <mark className="bg-transparent text-[#75AEE3]">computadores portateis</mark></p>
      <div className="w-[96%] flex items-center justify-between ml-auto mr-auto flex-wrap gap-4 mt-4 max-sm:justify-center">
        <div className="flex gap-2 flex-wrap max-sm:justify-center">
          <select className="bg-white h-[56px] rounded border border-[#24242E] p-4 pr-6 pl-6 items-center justify-between cursor-pointer">
            <option>categoria</option>
          </select>
          <select className="bg-white h-[56px] rounded border border-[#24242E] p-4 pr-6 pl-6  flex items-center justify-between cursor-pointer">
            <option>marca</option>
          </select>
          <select className="bg-white h-[56px] rounded border border-[#24242E] p-4 pr-6 pl-6 flex items-center justify-between cursor-pointer">
            <option>localização</option>
          </select>
          <select className="bg-white h-[56px] rounded border border-[#24242E] p-4 pr-6 pl-6 flex items-center justify-between cursor-pointer">
            <option>estado</option>
          </select>
          <select className="bg-white h-[56px] rounded border border-[#24242E] p-4 pr-6 pl-6 flex items-center justify-between cursor-pointer">
            <option>mais recentes</option>
            <option>mais relevantes</option>
          </select>
        </div>
        <Button>Aplicar filtros</Button>
      </div>
    </article>
  )
}

export default FilterBar