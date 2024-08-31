'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkHTMLAttributes } from "react";

interface tabProps extends LinkHTMLAttributes<HTMLLinkElement> {
    to: string;
    label: string;
    icon?: any;
}

export default function Tab ({ to, label, icon }: tabProps) {
    const pathname = usePathname()

    return (
        <Link
            href={to}
            className={`flex items-center justify-center md:flex-row flex-col gap-1 h-[32px] p-[8px_16px] hover:text-primary font-semibold rounded-[4px]
                ${pathname === to ? "bg-tetiary text-primary" : ""}
            `}
        >
            <span className="md:text-lg text-2xl opacity-[0.6]">{icon}</span>
            <span className="md:inline md:text-[12px] text-[8px]">{label}</span>
        </Link>
    )
}