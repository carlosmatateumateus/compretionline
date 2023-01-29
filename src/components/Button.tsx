import { ButtonHTMLAttributes } from "react"

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button 
      className="h-[56px] p-4 bg-[#75AEE3] text-white rounded flex-shrink-0"
      {...props}
    />
  )
}

export default Button;