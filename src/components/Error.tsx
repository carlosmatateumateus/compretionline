import Button from "./Button"
import { Link } from "react-router-dom"
import { Ghost } from "phosphor-react"

interface ErrorProps {
  children: string,
  title: string,
  description: string,
  redirectTo: string,
}

export default function Error({ children, title, description, redirectTo}:ErrorProps) {
  return (
    <main className="h-[60vh] flex flex-col items-center justify-center gap-5">
      <Ghost size="50" weight="fill"/>
      <h2 className="text-[20px] text-[#24242E] font-medium">{ title }</h2>
      <p className="text-[#AEAEAE] text-[18px] text-center">{ description }</p>
      <Link to={redirectTo}>
        <Button>{children}</Button>
      </Link>
    </main>
  )
}