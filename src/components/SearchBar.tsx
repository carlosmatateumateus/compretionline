import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  className: string,
  value?: string,
  buttonChildren: string,
  setValue: Function,
}

export default function SearchBar(props: SearchBarProps) {
  const [title, setTitle] = useState() as any
  const navigate = useNavigate()
  
  async function HandleSubmit(e:any) {
    e.preventDefault()

    if (props.buttonChildren === "cancelar") {
      props.setValue(false)
    }
    
    if (title !== undefined) {
      navigate(`/search/${title}/`)
    }
  }

  return (
    <form 
      method="get"
      onSubmit={HandleSubmit}
      >
      <div className={props.className}>
        <div className="w-[100%] border bg-[#0000000c] rounded p-3 gap-2 flex items-center select-none text-[#6e6e6e]">
          <MagnifyingGlass weight="bold"/>
          <input
            placeholder="Oque estás a procura?"
            className="h-full w-[100%] bg-transparent outline-none text-[13px]"
            onChange={(e) => { setTitle(e.target.value) }}
            defaultValue={props.value}
          />
        </div>
        <button className="bg-black text-white text-[13px] pl-4 pr-4 rounded-r">{props.buttonChildren}</button>
      </div>
    </form>
  )
}