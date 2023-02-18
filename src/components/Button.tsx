import { ButtonHTMLAttributes } from "react"

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button 
      className="h-[56px] bg-[#5286ec] text-white rounded flex-shrink-0 pl-4 pr-4 flex items-center gap-3 hover:brightness-90 disabled:brightness-75 disabled:cursor-not-allowed"
      {...props}
    />
  )
}