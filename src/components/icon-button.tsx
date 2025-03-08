import { type ComponentProps, ReactNode } from 'react'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      className="p-1.5 bg-gray-500 text-blue  rounded-md cursor-pointer hover:bg-blue transition-colors duration-300 hover:text-gray-900"
      {...props}
    />
  )
}
