import logo from "../assets/logo.svg" 
import GoogleLogo from "../assets/Google logo.svg"
import { MagnifyingGlass } from "phosphor-react";


import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="h-12 flex items-center justify-between on-center mt-2">
      <div className="flex gap-4">
        <img src={logo}/>
        <SearchBar />
      </div>
      <div className="flex items-center flex-row-reverse gap-2">
        <button className="flex p-3 gap-4 border border-[#696969] rounded">
          <img src={GoogleLogo}/>
          <span className="font-medium text-sm text-[#24242E] max-md:hidden"> Iniciar sesão com o Google </span>
        </button>
        <MagnifyingGlass className="hidden max-md:block cursor-pointer text-[#000000]" size="23px" weight="thin"/>
      </div>
    </header>
  )
}

export default Header;