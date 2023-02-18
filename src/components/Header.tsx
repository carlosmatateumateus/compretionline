import SearchBar from "./SearchBar";
import useAuth from "../hooks/useAuth";
import Avatar from "./Avatar";
import clsx from "clsx";

import { useState } from "react";

import logo from "../assets/logo.svg" 
import GoogleLogo from "../assets/Google logo.svg"
import { MagnifyingGlass, PlusCircle, Storefront } from "phosphor-react";

export default function Header() {
  const [searchMobile, setSearchMobile] = useState(false)

  const { user, signInWithGoogle } = useAuth()

  return (
    <header className="h-12 flex items-center justify-between on-center mt-2">
      <>
        <div 
          className={clsx("flex gap-4", {
            "hidden": searchMobile === true,
            "flex": searchMobile === false
          })}
          >
          <a href="/">
            <img src={logo} alt="compretionline logo" className="max-[300px]:hidden select-none" draggable="false" />
            <abbr title="compretionline logo">
              <Storefront size="33" weight="light" className="hidden max-[300px]:block select-none" />
            </abbr>
          </a>
          <SearchBar />
        </div>
        { !user?
        (
          <div 
            className={clsx("flex items-center flex-row-reverse gap-2", {
              "hidden": searchMobile === true,
              "flex": searchMobile === false
            })}
            >
            <button 
              className="flex p-3 gap-4  bg-white border border-[#696969] rounded max-md:hidden active:brightness-95" 
              onClick={() => signInWithGoogle()}
            >
              <img src={GoogleLogo} alt="Google logo"/>
              <span className="font-medium text-sm text-[#24242E]"> Iniciar sesão com o Google </span>
            </button>
            <button 
              className="IconButton bg-white h-[35px] w-[35px] hidden max-md:inline-flex items-center justify-center rounded-full" 
              onClick={() => signInWithGoogle()}
            >
              <img src={GoogleLogo} alt="Google logo"/>
            </button>
            <button 
              className="IconButton bg-white h-[35px] w-[35px] hidden max-md:inline-flex items-center justify-center rounded-full" aria-label="Search Products"
              onClick={() => setSearchMobile(searchMobile?(false):(true))}
            >
              <MagnifyingGlass 
                size="22px" 
                weight="light" 
                className="cursor-pointer header-icon"
              />
            </button>
          </div>
        ):
        (
          <div 
            className="flex items-center gap-3" 
            style={{display: searchMobile?("none"):("flex")}}
          >
            <button 
              className="IconButton bg-white h-[35px] w-[35px] hidden max-md:inline-flex items-center justify-center rounded-full" aria-label="Search Products"
              onClick={() => setSearchMobile(searchMobile?(false):(true))}
            >
              <MagnifyingGlass 
                size="22px" 
                weight="light" 
                className="cursor-pointer header-icon"
              />
            </button>
            <a href="/product/new" className="IconButton bg-white h-[35px] w-[35px] inline-flex items-center justify-center rounded-full max-md:hidden" aria-label="Go to post a product form">
              <PlusCircle size="23px" weight="light" className="cursor-pointer header-icon"/>
            </a>
            <a href="/product/my/" className="max-md:hidden">
              <button className="IconButton bg-white h-[35px] w-[35px] inline-flex items-center justify-center rounded-full" aria-label="Go to my products">
                <Storefront size="23px" weight="light" className="cursor-pointer header-icon"/>
              </button>
            </a>
            <Avatar />
          </div>
        )
        }
        <div 
          className={clsx("w-full h-full justify-between items-center", {
            "flex": searchMobile === true,
            "hidden": searchMobile === false
          })}
          >
          <div className="bg-[#f9f9f977] w-[75%] h-full flex p-3 gap-4 border border-[#bdbdbd] items-center leading-6 text-slate-400 rounded-md py-1.5 pl-2 pr-3">
            <MagnifyingGlass className="text-slate-400"/>
            <input 
              type="search" 
              className="w-[90%] h-full bg-transparent outline-none text-sm"
              placeholder="Oque estás a procura?"
            />
          </div>
          <span 
            onClick={() => setSearchMobile(searchMobile?(false):(true))}
            className="cursor-pointer text-base text-[#24242e] font-medium"
          >
            Cancelar
          </span>
        </div>
      </>
    </header>
  )
}