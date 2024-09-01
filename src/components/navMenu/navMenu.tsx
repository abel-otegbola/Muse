'use client'

import { useOutsideClick } from "@/helpers/useClickOutside";
import { Gear, Heart, House } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export default function Menu ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) {
    const pathname = usePathname()

    const menu = [
        { id: 0, title: "Dashboard", to: "/", icon: <House /> },
        { id: 1, title: "Wishlist", to: "/wishlist", icon: <Heart /> },
        { id: 2, title: "Settings", to: "/settings", icon: <Gear /> },
    ]

    const menuRef = useOutsideClick(setOpen, false)

    return (
        <div ref={menuRef} className="flex flex-col gap-2 p-2 w-[150px] rounded shadow-md border border-gray/[0.3] absolute top-12 right-0 bg-white">
        { 
            menu.map(item => (
                <Link
                    key={item.id}
                    href={item.to}
                    className={`flex items-center gap-2 h-[32px] p-[8px] hover:text-primary font-semibold rounded-[4px]
                        ${pathname === item.to ? "bg-tetiary text-primary" : ""}
                    `}
                >
                    <span className="md:text-lg text-2xl opacity-[0.6]">{item.icon}</span>
                    <span className="md:inline opacity-[0.6]">{item.title}</span>
                </Link>
            )) 
        }
        </div>       
    )
}