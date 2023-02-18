import * as Popover from '@radix-ui/react-popover';
import { XCircle, PlusCircle, Storefront } from "phosphor-react";

import useAuth from '../hooks/useAuth';

export default function Avatar() {
  const { user, GoogleSignOut } = useAuth()

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="IconButton bg-white h-[35px] w-[35px] inline-flex items-center justify-center rounded-full" aria-label="Got to my favorites products">
          <img src={user?.photoURL} className='w-full h-full select-none rounded-full' alt="Google account avatar" aria-label="Avatar photo url" draggable={false}/>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="IconButton rounded p-5 bg-white z-50 mr-3 relative top-3" sideOffset={5}>
          <a href="/product/new">
            <div className='hidden gap-3 cursor-pointer max-md:flex mb-3'>
              <PlusCircle size="23px" weight="light" className="cursor-pointer header-icon"/>
              Criar postagem
            </div>
          </a>
          <a href="/">
            <div className='hidden gap-3 cursor-pointer max-md:flex mb-3'>
              <Storefront size="23px" weight="light" className="cursor-pointer header-icon"/>
              Meus productos
            </div>
          </a>
          <div 
            className='flex gap-3 hover:text-[#75AEE3] cursor-pointer'
            onClick={() => GoogleSignOut()}
          >
            <XCircle size="23px" weight="light" className="cursor-pointer header-icon"/>
            Terminar sessão
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}