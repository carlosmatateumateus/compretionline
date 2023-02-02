import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Bell, CheckCircle } from 'phosphor-react';
import './style.css'

import NotificationFeed from "./NotificationFeed"

const Notification = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button className="IconButton bg-white h-[35px] w-[35px] inline-flex items-center justify-center rounded-full" aria-label="Update dimensions">
        <Bell size="23px" weight="light" className="cursor-pointer"/>
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent w-96 rounded p-5 bg-white z-50" sideOffset={5}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <h3 className="Text mb-[10px]">
            Notificações
          </h3>
          <NotificationFeed 
            author='Carlos Mateus' 
            autorPhoto='https://avatars.githubusercontent.com/u/91576261?v=4'
            action='perguntou-te a seguinte questão' 
            msg={`Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty.  So, some minor systems may go on and off for a while.?`}
          />
          <NotificationFeed 
            author='Carlos Mateus' 
            autorPhoto='https://avatars.githubusercontent.com/u/91576261?v=4'
            action='perguntou-te a seguinte questão' 
            msg={`Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty.  So, some minor systems may go on and off for a while.?`}
          />
          <NotificationFeed 
            author='Carlos Mateus' 
            autorPhoto='https://avatars.githubusercontent.com/u/91576261?v=4'
            action='perguntou-te a seguinte questão' 
            msg={`Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty.  So, some minor systems may go on and off for a while.?`}
          />
          <span 
            className='text-[#75AEE3] text-[14px] flex items-center gap-2 text-center flex-wrap-reverse justify-center'
          >
            Marcar todas como lidas
            <CheckCircle />
          </span>
        </div>
        <Popover.Close 
            className="PopoverClose rounded-full h-[25px] w-[25px] inline-flex top-[5px] right-[5px] absolute items-center justify-center" 
            aria-label="Close"
          >
          <Cross2Icon />
        </Popover.Close>
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default Notification;