import Header from "../components/Header"
import Error404 from "../components/Error404"
import Footer from "../components/Footer"

export default function NotFound() {
  return (
    <section>
      <Header />
      <main className="p-20">
        <Error404 
          title="Página não encontada"
          description="A paǵina que você está procurando não existe ou foi temporariamente removida."
        />
      </main>
      <Footer />
    </section>
  )
}