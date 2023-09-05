import { Input as AntdInput } from "antd";
import Props from "./type";

function Input({ id, name, value, type, placeholder, defaultValue }: Props) {
  return (
    <AntdInput
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
}

export default Input;
