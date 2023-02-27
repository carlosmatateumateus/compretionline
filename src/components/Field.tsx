import { OptionsOrGroups, GroupBase } from "react-select"
import clsx from "clsx"
import { Info } from "phosphor-react"
import Select from "./Select";

interface FieldProps {
  id?: string,
  isTextArea?: boolean,
  isSelect?: boolean,
  label: string,
  placeHolder?: string,
  inputValue: string | any,
  setValue: Function,
  inputError: string,

  // Select
  options?: OptionsOrGroups<any, GroupBase<any>> | undefined,

}

export default function Field(
    { id, isTextArea, isSelect, 
      label, placeHolder, inputValue, 
      setValue, inputError, options
    }:FieldProps
  ) 
  {
  return (
    <div className="flex flex-col" id={id}>
      <div className="max-md:w-[90vw] mb-[16px] w-[305px] flex justify-between">
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
         isSelect?
        (
          <Select
            options={options}
            placeHolder={placeHolder}
            setValue={setValue}
            value={inputValue}
          />
        ):
        (
          <>
            {
              !isTextArea?
              (
                <input 
                  className="max-md:w-[100%] rounded border h-[56px] text-[14px] outline-none border-[#24242E] p-4 placeholder:text-[14px] placeholder:text-[#a5a5a5]"
                  placeholder={placeHolder}
                  onChange={(e) => { setValue(e.target.value) }}
                  value={inputValue}
                />
              ):
              (
                <textarea
                  className="max-md:w-[100%] resize-none p-4 w-[305px] h-[220px] outline-none rounded border text-[14px] border-[#24242E] placeholder:text-[14px] placeholder:text-[#a5a5a5]"
                  placeholder={placeHolder}
                  onChange={(e) => { setValue(e.target.value) }}
                  value={inputValue}
                />
              )
            }
          </>
        )
      }
    </div>
  )
}