import logo from "../assets/logo.svg" 
import GoogleLogo from "../assets/Google logo.svg"
import { MagnifyingGlass, PlusCircle, Heartbeat, Storefront } from "phosphor-react";
import { Link } from  "react-router-dom"
import avatar from "../assets/avatar.png"

import Notification from "./Notification/Notification";

import SearchBar from "./SearchBar";


interface HeaderProps {
  isLogged?: boolean
}

const Header = ({ isLogged=true }:HeaderProps) => {
  return (
    <header className="h-12 flex items-center justify-between on-center mt-2">
      <div className="flex gap-4">
        <a href="/">
          <img src={logo} alt="compretionline logo"/>
        </a>
        <SearchBar />
      </div>
      { !isLogged? 
      (
        <div className="flex items-center flex-row-reverse gap-2">
          <button className="flex p-3 gap-4 border border-[#696969] rounded">
            <img src={GoogleLogo} alt="Google logo"/>
            <span className="font-medium text-sm text-[#24242E] max-md:hidden"> Iniciar sesão com o Google </span>
          </button>
          <MagnifyingGlass className="hidden max-md:block cursor-pointer text-[#000000]" size="23px" weight="thin"/>
        </div>
      ):
      (
        <div className="flex items-center gap-3">
          <Link to="/product/new">
            <PlusCircle size="23px" weight="light" className="cursor-pointer header-icon"/>
          </Link>
          <Storefront size="23px" weight="light" className="cursor-pointer header-icon"/>
          <Heartbeat size="23px" weight="light" className="cursor-pointer header-icon"/>
          <Notification />
          <img src={avatar} alt="Google account avatar"/>
        </div>
      )
      }
    </header>
  )
}

export default Header;