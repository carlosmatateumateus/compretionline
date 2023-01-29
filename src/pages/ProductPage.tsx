import Answer from "../components/Answer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductView from "../components/ProductView";
import QuestionBar from "../components/QuestionBar";
import RelatedProducts from "../components/RelatedProducts";

const ProductPage = () => {
  return (
    <section className="on-center">
      <Header />
      <ProductView most_view={true}/>
      <div className="flex justify-between">
        <article>
          <div className="flex gap-3 mt-10 items-center">
            <h2 className="font-medium text-[25px] text-[#24242E]">Repostas de perguntas</h2>
            <a href="#" className="text-[#AEAEAE] text-[14px]">Carregar mais respostas ...</a>
          </div>
          <Answer />
          <Answer />
          <Answer />
          <QuestionBar />
        </article>
        <RelatedProducts/>
      </div>
      <Footer />
    </section>
  )
}

export default ProductPage;