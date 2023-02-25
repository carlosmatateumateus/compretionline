import Header from "../components/Header"
import Error from "../components/Error"
import Footer from "../components/Footer"

export default function NotFound() {
  return (
    <section>
      <Header />
      <main className="p-20">
        <Error 
          title="404 Página não encontada"
          description="A paǵina que você está procurando não existe ou foi temporariamente removida."
          children="Voltar para a homepage"
          redirectTo="/"
        />
      </main>
      <Footer />
    </section>
  )
}