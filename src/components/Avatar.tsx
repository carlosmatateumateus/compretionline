import * as Popover from '@radix-ui/react-popover';
import { XCircle, PlusCircle, Storefront } from "phosphor-react";

import useAuth from '../hooks/useAuth';

export default function Avatar() {
  const { user, GoogleSignOut } = useAuth()

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        {
          user?.photoURL?
          (
            <button className="border border-black h-[35px] w-[35px] inline-flex items-center justify-center rounded-full" aria-label="Got to my favorites products">
              <img src={user?.photoURL} className='w-full h-full select-none rounded-full' alt="Google account avatar" aria-label="Avatar photo url" draggable={false}/>
            </button>
          ):
          (
            <button 
              className="skeleton border border-black h-[35px] w-[35px] inline-flex items-center justify-center rounded-full"
            />
          )
        }
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="box-shadow border border-black rounded p-5 bg-white z-[999] mr-3 relative top-3">
          <a href="/product/new">
            <div className='flex items-center gap-3 cursor-pointer mb-3 text-[15px]'>
              <PlusCircle size="21px" weight="fill" className="cursor-pointer header-icon"/>
              Criar postagem
            </div>
          </a>
          <a href="/product/my">
            <div className='flex items-center gap-3 cursor-pointer mb-3 text-[15px]'>
              <Storefront size="23px" weight="fill" className="cursor-pointer header-icon"/>
              Meus productos
            </div>
          </a>
          <div 
            className='flex items-center gap-3 cursor-pointer text-[15px]'
            onClick={() => GoogleSignOut()}
          >
            <XCircle size="23px" weight="fill" className="cursor-pointer header-icon"/>
            Terminar sessão
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}