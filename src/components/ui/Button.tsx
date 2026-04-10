import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'premium';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-[#1a1a1a] text-white hover:bg-[#2c2c2c]': variant === 'default',
            'border border-[#1a1a1a]/10 bg-transparent hover:bg-[#1a1a1a]/5 text-[#1a1a1a]': variant === 'outline',
            'hover:bg-[#1a1a1a]/5 text-[#1a1a1a]': variant === 'ghost',
            'text-[#1a1a1a] underline-offset-4 hover:underline': variant === 'link',
            'bg-[#8c7851] text-white hover:bg-[#7a6846] shadow-sm': variant === 'premium',
            'h-10 px-4 py-2': size === 'default',
            'h-9 rounded-xl px-3': size === 'sm',
            'h-11 rounded-xl px-8': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
