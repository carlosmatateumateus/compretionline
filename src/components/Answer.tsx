import { ArrowRight } from "phosphor-react";

const Answer = () => {
  return (
    <article className="bg-[#f9f9f977] w-[700px] border border-[#bdbdbd] rounded p-4 flex flex-col mt-5 max-lg:w-[100%]">
      <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit?
         <span className="text-[#0000008c]"> <ArrowRight className="inline"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium sagittis egestas. In dignissim neque congue ligula venenatis faucibus. Maecenas eleifend lorem et tincidunt facilisis. Nullam eu faucibus nunc. Donec pretium diam augue.</span>
      </p>
    </article>
  )
}

export default Answer;