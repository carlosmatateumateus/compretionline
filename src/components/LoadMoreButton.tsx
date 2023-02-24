import { ArrowCircleDown } from "phosphor-react";

interface LoadButtonProps {
  page: number,
  setPage: Function,
  isLoading: boolean
}

export default function LoadMoreButton({ page, setPage, isLoading=false }:LoadButtonProps) {
  return (
    <aside className="on-center flex justify-center mt-5">
      {
        isLoading?
          (
            <button className="flex items-center gap-3 p-4 border bg-black rounded text-white text-[14px]">
              Carregando
              <span className="load-data"></span>
            </button>
          ): 
          (
            <button 
              className="flex items-center gap-4 p-4 border border-black rounded text-black text-[14px] active:bg-black active:text-white"
              onClick={() => {
                setPage(page + 1)
                console.log(`Estamos na página ${page}`)
              }}
            >
              Carregar mais 
              <ArrowCircleDown />
            </button> 
          )
      }
    </aside>
  )
}