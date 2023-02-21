import { LinkedinLogo, MagnifyingGlass } from "phosphor-react";
import SearchBar from "./SearchBar";
import useAuth from "../hooks/useAuth";
import Avatar from "./Avatar";
import clsx from "clsx";

import { useState } from "react";

import { GoogleLogo } from "phosphor-react";

interface HeaderProps {
  title?: string,
}

export default function Header(props:HeaderProps) {
  const [searchMobile, setSearchMobile] = useState(false)
  
  const { user, signInWithGoogle } = useAuth()

  return (
    <header className="h-12 flex items-center justify-between on-center mt-2">
      <div 
        className={clsx({
          "hidden": searchMobile,
          "flex gap-4": !searchMobile,
        })}
        >
        <a href="/">
          <img 
            src="/logo.svg" 
            alt="compretionline logo" 
            className="max-[300px]:hidden select-none" 
            draggable="false" 
          />
        </a>
          <SearchBar 
            value={props.title} 
            buttonChildren="search" 
            className="flex max-md:hidden w-[330px]" 
            setValue={() => {}}
          />
      </div>
      <div
        className={clsx({
          "hidden": !searchMobile,
          "block": searchMobile,
        })}
      >
        <SearchBar 
          value={props.title} 
          buttonChildren="cancelar" 
          setValue={setSearchMobile}
          className={clsx("w-[95vw] ml-auto justify-center",{
            "flex": searchMobile,
            "hidden": !searchMobile,
          })}
        />
      </div>
      <div 
        className={clsx({
          "hidden": searchMobile,
          "flex items-center gap-4": !searchMobile,
        })}
        >
        <div className="hidden max-md:block">
          <button 
            className="border-[0.1px] border-black  text-black h-[35px] w-[35px] flex items-center justify-center rounded-full active:bg-black active:text-white"
            onClick={() => setSearchMobile(true)}
            >
            <MagnifyingGlass weight="bold"/>
          </button>
        </div>
        <div>
          {
            !user?
            (
              <div>
                <button
                  className="flex p-3 gap-3  bg-white  text-black border border-black rounded max-md:hidden active:bg-black active:text-white"
                  onClick={() => signInWithGoogle()}
                  >
                  <GoogleLogo size="20" weight="bold"/>
                  <span className="font-medium text-sm"> Iniciar sesão com o Google </span>
                </button>
                <button
                  className="hidden max-md:flex border-[0.1px] bg-black text-white h-[35px] w-[35px] items-center justify-center rounded-full active:bg-white active:text-black active:border-black"
                  onClick={() => signInWithGoogle()}
                  >
                  <GoogleLogo size="20" weight="bold"/>
                </button>
              </div>
            ):
            (
              <Avatar />
            )
          }
        </div>
      </div>
    </header>
  )
}