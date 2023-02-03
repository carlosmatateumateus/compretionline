import { ButtonHTMLAttributes } from "react"

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button 
      className="h-[56px] bg-[#75AEE3] text-white rounded flex-shrink-0 pl-4 pr-4 flex items-center gap-3"
      {...props}
    />
  )
}

export default Button;