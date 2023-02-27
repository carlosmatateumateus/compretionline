import ReactSelect, { OptionsOrGroups, GroupBase } from "react-select"

interface SelectProps {
  id?: string,
  options: OptionsOrGroups<any, GroupBase<any>> | undefined,
  placeHolder?: string,
  setValue: Function,
  value: string | undefined,
}

export default function Select({ id, options, placeHolder, setValue, value }: SelectProps) {
  return (
    <ReactSelect
      id={id}
      options={options}
      classNamePrefix="select"
      placeholder={placeHolder}
      onChange={(e) => { setValue(e?.value) }}
      value={options?.filter(function(option) {
        return option.value === value;
      })}
    />
  )
}