import { Mail } from 'lucide-react'

import { ComponentProps, ReactNode } from "react";

interface IconProps extends ComponentProps<'input'> { 
  error?: boolean
}

export function Input({ error, ...props}: IconProps) {
  return (
    <div className='group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 items-center flex gap-2 focus-within:border-gray-100'> 
      <span className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 "
      >
        <Mail />  
      </span>

      <input 
        className="flex-1 outline-0 placeholder-gray-400 "
        {...props}
      />
    </div>
  )
}