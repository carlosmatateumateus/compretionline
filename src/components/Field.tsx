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

export default function Field(props:FieldProps) {
  return (
    <div className="flex flex-col" id={props.id}>
      <div className="max-md:w-[90vw] mb-[16px] w-[305px] flex justify-between">
        <label>{props.label} *</label>
        <aside 
          className={clsx("flex items-center gap-1 text-[#ff6961]", {
            "hidden": props.inputError==="" || props.inputError===undefined,
            "block": props.inputError!==""
          })}
        > 
          <Info />
          <span className="text-[14px]">{ props.inputError }</span>
        </aside>
      </div>
      {
         props.isSelect?
        (
          <Select
            options={props.options}
            placeHolder={props.placeHolder}
            setValue={props.setValue}
            value={props.inputValue}
          />
        ):
        (
          <>
            {
              !props.isTextArea?
              (
                <input 
                  className="max-md:w-[100%] rounded border h-[56px] text-[14px] outline-none border-[#24242E] p-4 placeholder:text-[14px] placeholder:text-[#a5a5a5]"
                  placeholder={props.placeHolder}
                  onChange={(e) => { props.setValue(e.target.value) }}
                  value={props.inputValue}
                />
              ):
              (
                <textarea
                  className="max-md:w-[100%] resize-none p-4 w-[305px] h-[220px] outline-none rounded border text-[14px] border-[#24242E] placeholder:text-[14px] placeholder:text-[#a5a5a5]"
                  placeholder={props.placeHolder}
                  onChange={(e) => { props.setValue(e.target.value) }}
                  value={props.inputValue}
                />
              )
            }
          </>
        )
      }
    </div>
  )
}