'use client'
import Image from "next/image";
import { ShoppingCart, User } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import Menu from "../navMenu/navMenu";
import Link from "next/link";
import { storeContext } from "@/context/useStore";
import Search from "../search/search";


export default function DashboardHeader() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const { cart } = useContext(storeContext)
    return (
        <div className="flex items-center justify-between sticky top-0 left-0 w-full z-[50] px-6 bg-white dark:bg-dark dark:text-gray p-3 border border-transparent border-b-primary/[0.1]">
            <Link href="/">
                <Image src="/logo.svg" width={30} height={30} alt="logo" className="lg:block" />
            </Link>

            <div className="flex items-center justify-end gap-6 xl:w-[40%] md:w-[35%] relative">
                <div className="md:block hidden flex-1">
                    <Search placeholder="Search Products, Gigs and Talents" className="" />
                </div>
                <Link href="/cart" className="p-2 bg-gray/[0.3] dark:bg-gray/[0.08] rounded-full relative">
                    <ShoppingCart size={16}/>
                    <sup className="absolute top-[0px] right-[0px] text-emerald-500 text-[8px] bg-white dark:bg-dark dark:text-gray p-[4px] py-[6px] rounded-full">{cart.length}
                    </sup>
                </Link>
                <button className="p-2 bg-gray/[0.3] dark:bg-gray/[0.08] rounded-full" onClick={() => setToggleMenu(!toggleMenu)}><User size={16}/></button>
                {
                    toggleMenu && <Menu setOpen={setToggleMenu} />
                }
            </div>
        </div>
    )
}