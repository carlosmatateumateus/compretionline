interface InputProps {
  width?: number,
  height?: number,
  title: string,
  placeHolder: string,
  errorMessage?: string | undefined
}

const Input = ({ title, width=299, height=56, placeHolder, errorMessage }:InputProps) => {
  return (
    <div className="mb-[16px]">
      <div className="mb-[16px]">
        <label>{title}*</label>
      </div>
      <input 
        className="rounded border text-[14px] border-[#24242E] p-4 placeholder:text-[14px]"
        style={{width: `${width}px`, height: `${height}px`}} 
        placeholder={placeHolder}
      />
    </div>
  )
}

export default Input