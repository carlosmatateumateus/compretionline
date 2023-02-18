import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

export default function SearchBar() {
  const [title, setTitle] = useState()

  function handleSubmit(e: any) {
    e.preventDefault()

    if (String(title).length > 0) {
      window.document.location = `/search/${String(title).toLowerCase()}`
    }
  }

  function handleSearch(e: any) {
    setTitle(e.target.value)
  }

  return (
    <form 
      className="bg-[#f9f9f977] w-[230px] flex p-3 gap-4 border border-[#bdbdbd] items-center leading-6 text-slate-400 rounded-md py-1.5 pl-2 pr-3 max-md:hidden"
      method="get"
      onSubmit={handleSubmit}
      >
      <MagnifyingGlass className="text-slate-400"/>
      <input 
        type="search" 
        className="w-[90%] h-full bg-transparent outline-none text-sm"
        placeholder="Oque estás a procura?"
        onInput={handleSearch}
        value={title}
      />
    </form>
  )
}