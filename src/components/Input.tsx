interface InputProps {
  width?: number,
  height?: number,
  title: string,
  placeHolder: string,
  errorMessage?: string | undefined
}

const Input = ({ title, placeHolder, errorMessage }:InputProps) => {
  return (
    <div className="mb-[16px]">
      <div className="mb-[16px]">
        <label>{title}*</label>
      </div>
      <input 
        className="rounded border text-[14px] border-[#24242E] p-4 placeholder:text-[14px] max-md:w-[100%]"
        placeholder={placeHolder}
      />
    </div>
  )
}

export default Input