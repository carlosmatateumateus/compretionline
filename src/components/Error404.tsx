import Button from "./Button"
import { Ghost } from "phosphor-react"

interface Error404Props {
  title: string,
  description: string,
}

export default function Error404({ title, description}:Error404Props) {
  return (
    <main className="h-[60vh] flex flex-col items-center justify-center gap-5">
      <Ghost size="50" weight="fill"/>
      <h2 className="text-[20px] text-[#24242E] font-medium">404 { title }</h2>
      <p className="text-[#AEAEAE] text-[18px] text-center">{ description }</p>
      <a href="/">
        <Button>Voltar para para a Home</Button>
      </a>
    </main>
  )
}