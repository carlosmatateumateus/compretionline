import Button from "./Button"

const FilterBar = () => {
  return (
    <article className="on-center mt-14">
      <p className="text-lg">20 resultados encontrados para <mark className="bg-transparent text-[#75AEE3]">computadores portateis</mark></p>
      <div className="w-[100%] flex items-center justify-between flex-wrap gap-4 mt-4">
        <div className="flex gap-4 flex-wrap">
          <select className="bg-transparent p-3 border-[0.8px] border-[#24242E] rounded">
            <option>categoria</option>
          </select>
          <select className="bg-transparent p-3 border-[0.8px] border-[#24242E] rounded">
            <option>marca</option>
          </select>
          <select className="bg-transparent p-3 border-[0.8px] border-[#24242E] rounded">
            <option>tamanho</option>
          </select>
          <select className="bg-transparent p-3 border-[0.8px] border-[#24242E] rounded">
            <option>estado</option>
          </select>
          <select className="bg-transparent p-3 border-[0.8px] border-[#24242E] rounded">
            <option>localização</option>
          </select>
          <select className="bg-transparent p-3 border-[0.8px] border-[#24242E] rounded">
            <option>data de criação</option>
          </select>
          <select className="bg-transparent p-3 border-[0.8px] border-[#24242E] rounded">
            <option>mais relevantes</option>
            <option>mais recentes</option>
          </select>
        </div>
        <Button>Aplicar filtros</Button>
      </div>
    </article>
  )
}

export default FilterBar