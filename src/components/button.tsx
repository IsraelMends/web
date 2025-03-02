import {ComponentProps, ReactNode } from "react";
interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
    return (
      <button
        className=" flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue transition-colors duration-300 hover:text-gray-900"
        {...props}
      />
    )
}