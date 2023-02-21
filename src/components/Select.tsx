import ReactSelect, { OptionsOrGroups, GroupBase } from "react-select"

interface SelectProps {
  id?: string,
  options: OptionsOrGroups<any, GroupBase<any>> | undefined,
  placeHolder?: string,
  setValue: Function,
  value: string | undefined,
}

export default function Select(props: SelectProps) {
  return (
    <ReactSelect
      id={props.id}
      options={props.options}
      classNamePrefix="select"
      placeholder={props.placeHolder}
      onChange={(e) => { props.setValue(e?.value) }}
      value={props.options?.filter(function(option) {
        return option.value === props.value;
      })}
    />
  )
}