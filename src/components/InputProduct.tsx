import clsx from "clsx"
import { Info } from "phosphor-react"

interface InputProductProps {
  isTextArea?: boolean,
  label: string,
  placeHolder?: string,
  inputValue: string,
  setValue: Function,
  inputError: string,
}

export default function InputProduct({ label, placeHolder, inputValue, setValue, inputError, isTextArea }:InputProductProps) {
  return (
    <div className="mb-[16px]">
      <div className="mb-[16px] w-[305px] flex justify-between">
        <label>{label} *</label>
        <aside 
          className={clsx("flex items-center gap-1 text-[#ff6961]", {
            "hidden": inputError==="" || inputError===undefined,
            "block": inputError!==""
          })}
        > 
          <Info />
          <span className="text-[14px]">{ inputError }</span>
        </aside>
      </div>
      {
        !isTextArea?
        (
          <input 
            className="rounded border h-[56px] text-[14px] border-[#24242E] p-4 placeholder:text-[14px] max-md:w-[100%]"
            placeholder={placeHolder}
            onChange={(e) => { setValue(e.target.value) }}
            value={inputValue}
          />
        ):
        (
          <textarea
            className="max-md:w-[90vw] resize-none p-5 w-[305px] h-[217px]  rounded border text-[14px] border-[#24242E] placeholder:text-[14px]"
            placeholder={placeHolder}
            onChange={(e) => { setValue(e.target.value) }}
            value={inputValue}
          />
        )
      }
    </div>
  )
}