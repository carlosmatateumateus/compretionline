const Answer = () => {
  return (
    <article className="bg-[#f9f9f977] w-[700px] border border-[#bdbdbd] rounded p-4 flex flex-col gap-6 mt-10 max-lg:w-[100%]">
      <span className="flex items-center gap-4">
        <img 
          src="https://avatars.githubusercontent.com/u/91576261?v=4" 
          alt="Avatar" 
          className="w-[45px] h-[45px] rounded-full"
        />
        <label>carlosmatateumateus@gmail</label>
        <span className="text-[#b9b9b9]">5h ago</span>
      </span>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit?" <mark className="bg-transparent text-[#75AEE3]">answer: </mark>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </article>
  )
}

export default Answer;