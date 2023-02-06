import * as Popover from '@radix-ui/react-popover';
import { Bell, X} from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import './style.css'

import NotificationFeed from "./NotificationFeed"

const Notification = () => {
  const navigate = useNavigate()
  return (
    <Popover.Root>
    <a href="/" className='hidden max-md:inline'>
      <button className="IconButton bg-white h-[35px] w-[35px] inline-flex items-center justify-center rounded-full" aria-label="Open and close Notifications">
        <Bell size="23px" weight="light" className="cursor-pointer"/>
      </button>
    </a>
    <Popover.Trigger asChild className='max-md:hidden'>
      <button className="IconButton bg-white h-[35px] w-[35px] inline-flex items-center justify-center rounded-full" aria-label="Open and close Notifications">
        <Bell size="23px" weight="light" className="cursor-pointer"/>
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent w-80 rounded p-5 bg-white z-50 select-none max-md:hidden" sideOffset={5}>
        <div className="flex flex-col gap-[10px]">
          <h3 className="Text mb-[10px]">
            Notificações
          </h3>
          <NotificationFeed 
            author='Carlos Mateus' 
            autorPhoto='https://avatars.githubusercontent.com/u/91576261?v=4'
            action='perguntou-te a seguinte questão' 
            msg={`Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty.  So, som`.slice(0, 50)+"..."}
          />
          <NotificationFeed 
            author='Carlos Mateus' 
            autorPhoto='https://avatars.githubusercontent.com/u/91576261?v=4'
            action='perguntou-te a seguinte questão' 
            msg={`OK, I finished de-bugging the phones, but the system's compiling for eighteen minutes`.slice(0, 50)+"..."}
          />
          <span 
            className='text-[#75AEE3] text-[14px] flex items-center gap-2 text-center flex-wrap-reverse justify-center cursor-pointer'
          >
            Ver todas notificações
          </span>
        </div>
        <Popover.Close 
            className="PopoverClose rounded-full h-[25px] w-[25px] inline-flex top-[5px] right-[5px] absolute items-center justify-center" 
            aria-label="Close"
          >
          <X />
        </Popover.Close>
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
  )
}

export default Notification;