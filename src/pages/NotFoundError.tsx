import Header from "../components/Header"
import Button from "../components/Button"

const NotFoundError = () => {
  return (
    <section>
      <Header />
      <main className="h-[90vh] flex flex-col items-center justify-center gap-5">
        <img src="/medium_logo.svg" alt="compretionline logo"/>
        <h2 className="text-[20px] text-[#24242E] font-medium">404 página não encontrada</h2>
        <p className="text-[#AEAEAE] text-[18px] text-center">A página que você está procurando não existe ou está temporariamente indisponível!</p>
        <a href="/">
          <Button>Voltar para para a Home</Button>
        </a>
      </main>
    </section>
  )
}

export default NotFoundError