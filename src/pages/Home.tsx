import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductQueue from "../components/ProductQueue";
import ProductView from "../components/ProductView";

const Home = () => {
  return (
    <section>
      <Header />
      <Carousel />
      <ProductQueue title="Se diverta da melhor forma possível"/>
      <ProductQueue title="Se diverta da melhor forma possível"/> 
      <ProductView most_view={true}/>
      <ProductQueue title="Se diverta da melhor forma possível"/>
      <Footer />
    </section>
  )
}

export default Home;