import { MagnifyingGlass } from "phosphor-react";

const SearchBar = () => {
  return (
    <div className="bg-[#f9f9f977] w-[230px] flex p-3 gap-4 border border-[#bdbdbd] items-center leading-6 text-slate-400 rounded-md py-1.5 pl-2 pr-3 max-md:hidden">
      <MagnifyingGlass className="text-slate-400"/>
      <input 
        type="search" 
        className="w-[90%] h-full bg-transparent outline-none text-sm"
        placeholder="Oque estás a procura?"
      />
    </div>
  )
}

export default SearchBar;