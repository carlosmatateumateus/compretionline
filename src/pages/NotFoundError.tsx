import Header from "../components/Header"
import Button from "../components/Button"
import logo from "../assets/big-logo.svg" 

const NotFoundError = () => {
  return (
    <section>
      <Header />
      <main className="h-[90vh] flex flex-col items-center justify-center gap-5">
        <img src={logo} alt="compretionline logo"/>
        <h2 className="text-[20px] text-[#24242E] font-medium">404 page not found</h2>
        <p className="text-[#AEAEAE] text-[18px] text-center">The page you are looking for does not exist or has been temporarily removed.</p>
        <a href="/">
          <Button>Voltar para para a Home</Button>
        </a>
      </main>
    </section>
  )
}

export default NotFoundError