import Button from "./Button"

const QuestionBar = () => {
  return (
    <div>
      <textarea
        className="max-lg:w-[100%] bg-[#f9f9f977] w-[700px] h-[230px] border border-[#bdbdbd] rounded mt-10 resize-none p-4 focus:outline-[#75aee36b]"
        placeholder="❔ Faça uma pergunta ao vendedor"
      />
      <span className="w-[700px] flex items-center justify-between flex-wrap gap-4 mt-3 max-lg:w-[100%]">
        <p>Para fazer um pergunta, <a href="#" className="text-[#75AEE3]">faça seu login.</a></p>
        <Button disabled>Fazer pergunta.</Button>
      </span>
    </div>
  )
}

export default QuestionBar