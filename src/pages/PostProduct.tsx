import Button from "../components/Button"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ImgInput from "../components/ImgInput"
import Input from "../components/Input"

const PostProduct = () => {
  return (
    <section>
      <Header />
        <article className="on-center mt-[43px]">
          <h2 className="text-[24px] text-[#24242E] font-medium leading-relaxed">Products details</h2>
          <p className="text-[15px] text-[#AEAEAE]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <hr className="mt-[17px] w-[90%]"/>
          <main className="flex gap-6 mt-[17px] flex-wrap">
            <div className="flex flex-col gap-5">
              <ImgInput />
              <Input
                title="Nome do producto"
                placeHolder="Qual é o nome do producto?"
              />
              <Input
                title="Modelo"
                placeHolder="Qual é o modelo do producto?"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <div className="mb-[16px]">
                  <span>Descrição * </span>
                </div>
                <textarea
                  title="Descrição"
                  placeholder="Faça uma breve e descrição sobre o producto"
                  className="max-md:w-[90vw] resize-none w-[299px] h-[220px] rounded border text-[14px] border-[#24242E] p-4 placeholder:text-[14px]"
                />
              </div>
              <Input
                title="Preço"
                placeHolder="Degite o preço do producto"
              />
              <Input
                title="Localização"
                placeHolder="Qual é a sua localização actual?"
              />
            </div>
            <div className="mt-[40px] flex flex-col h-[220px] justify-between">
              <select className="bg-white h-[56px] rounded border border-[#24242E] p-4 pr-6 pl-6 items-center justify-between cursor-pointer">
                <option>categoria</option>
              </select>
              <select className="bg-white h-[56px] rounded border border-[#24242E] p-4 pr-6 pl-6 items-center justify-between cursor-pointer">
                <option>marca</option>
              </select>
              <select className="bg-white h-[56px] rounded border border-[#24242E] p-4 pr-6 pl-6 items-center justify-between cursor-pointer">
                <option>estado</option>
                <option>novo</option>
                <option>usado</option>
                <option>antigo</option>
              </select>
            </div>
          </main>
          <div className="flex items-center justify-end gap-3 max-md:justify-center mt-20">
            <span className="text-[#24242E] cursor-pointer">Cancelar</span>
            <Button>Salvar producto</Button>
          </div>
        </article>
      <Footer />
    </section>
  )
}

export default PostProduct