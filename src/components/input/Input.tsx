import React from "react";
import { useController } from "react-hook-form";

interface Props {
  type: string;
  name: string;
  placeholder: string;
  control: any;
}

const Input = ({
  type = "text",
  name = "",
  placeholder = "",
  control,
  ...props
}: Props) => {
  const { field } = useController({
    control,
    name,
  });

  return (
    <input
      type={type}
      id={name}
      placeholder={placeholder}
      {...field}
      {...props}
      className="p-4  border outline-none placeholder:text-sm bg-[#f7f7f7] border-slate-300 w-full rounded-xl  text-base"
    />
  );
};

export default Input;
