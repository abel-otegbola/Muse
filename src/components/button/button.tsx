'use client'
import { useRouter } from "next/navigation";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    className?: string;
    href?: string;
    size?: "full";
    disabled?: boolean,
    onClick?: () => void,
    children: ReactNode
}

export default function Button({ variant, className, href, size, disabled, onClick, children }: buttonProps) {
    const router = useRouter()
    const variants = {
        primary: "bg-primary text-white focus:bg-secondary hover:bg-primary/[0.8]",
        secondary: "bg-white text-primary focus:bg-tetiary hover:bg-tetiary/[0.8] border border-primary"
    }

    return (
        <button className={`rounded-[4px] h-[40px] p-[12px_32px] flex items-center justify-center
            ${variants[variant || "primary"]}
            ${className} 
            ${disabled ? "opacity-[0.25]" : ""}
            ${size === "full" ? "w-full" : "w-fit"}
        `}
        disabled={disabled}
        onClick={() => href ? router.push(href) : onClick}
        >
            { children }
        </button>
    )
}