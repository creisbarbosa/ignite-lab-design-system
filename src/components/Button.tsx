import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'; 

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    
    return (
        <Comp
            className={clsx(
                'py-2 px-3 bg-cyan-500 h-12 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:bg-cyan-700', 
            )}
        >
            {children}
        </Comp>
    )
}