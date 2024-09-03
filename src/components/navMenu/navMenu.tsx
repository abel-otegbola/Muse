'use client'

import { AuthContext } from "@/context/useAuth";
import { useOutsideClick } from "@/helpers/useClickOutside";
import { Gear, Heart, House } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useContext } from "react";
import Button from "../button/button";

export default function Menu ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) {
    const pathname = usePathname()
    const { user, logOut } = useContext(AuthContext)

    const menu = [
        { id: 1, title: "Wishlist", to: "/wishlist", icon: <Heart /> },
        { id: 2, title: "Settings", to: "/settings", icon: <Gear /> },
    ]

    const menuRef = useOutsideClick(setOpen, false)

    return (
        <div ref={menuRef} className="flex flex-col gap-2 p-2 w-[150px] rounded shadow-md border border-gray/[0.3] dark:border-gray/[0.1] absolute top-12 right-0 bg-white dark:bg-dark dark:text-gray">
            {
                user ? 
                <Link
                    href={"/dashboard"}
                    className={`flex items-center gap-2 h-[32px] p-[8px] hover:text-primary font-semibold rounded-[4px]
                        ${pathname === "/dashboard" ? "bg-tetiary dark:bg-gray/[0.08] text-primary" : ""}
                    `}
                >
                    <span className="md:text-lg text-2xl opacity-[0.6]"><House/></span>
                    <span className="md:inline opacity-[0.6]">Dashboard</span>
                </Link>
                : ""
            }
            { 
                menu.map(item => (
                    <Link
                        key={item.id}
                        href={item.to}
                        className={`flex items-center gap-2 h-[32px] p-[8px] hover:text-primary font-semibold rounded-[4px]
                            ${pathname === item.to ? "bg-tetiary dark:bg-gray/[0.08] text-primary" : ""}
                        `}
                    >
                        <span className="md:text-lg text-2xl opacity-[0.6]">{item.icon}</span>
                        <span className="md:inline opacity-[0.6]">{item.title}</span>
                    </Link>
                )) 
            }
            {
                !user ? 
                <Button size="full" href="/login">Login</Button>
                : 
                <Button size="full" onClick={() => logOut()}>Logout</Button>

            }
        </div>       
    )
}