import * as Popover from '@radix-ui/react-popover';
import avatar from "../assets/avatar.png"
import { XCircle, PlusCircle, Heartbeat, Storefront } from "phosphor-react";
import { Link } from  "react-router-dom"

const Avatar = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="IconButton bg-white h-[35px] w-[35px] inline-flex items-center justify-center rounded-full" aria-label="Got to my favorites products">
          <img src={avatar} className='w-full h-full select-none' alt="Google account avatar" aria-label="Avatar photo url" draggable={false}/>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent rounded p-5 bg-white z-50 mr-3" sideOffset={5}>
          <Link to="/product/new">
            <div className='hidden gap-3 cursor-pointer max-md:flex mb-3'>
              <PlusCircle size="23px" weight="light" className="cursor-pointer header-icon"/>
              Post new product
            </div>
          </Link>
          <div className='hidden gap-3 cursor-pointer max-md:flex mb-3'>
            <Storefront size="23px" weight="light" className="cursor-pointer header-icon"/>
            My products store
          </div>
          <div className='hidden gap-3 cursor-pointer max-md:flex mb-3'>
            <Heartbeat size="23px" weight="light" className="cursor-pointer header-icon"/>
            Favorite products
          </div>
          <div className='flex gap-3 hover:text-[#75AEE3] cursor-pointer'>
            <XCircle size="23px" weight="light" className="cursor-pointer header-icon"/>
            Terminar sessão
          </div>
        <Popover.Arrow className="PopoverArrow"/>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default Avatar