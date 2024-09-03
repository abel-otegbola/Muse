'use client'
import Image from "next/image";
import Tab from "../tab/tab";
import Search from "../search/search";
import { Guitar, House, ListMagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import Menu from "../navMenu/navMenu";
import Link from "next/link";
import { storeContext } from "@/context/useStore";

type navTab =  {
    id: number | string,
    label: string,
    to: string,
    icon: any
}

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const { cart } = useContext(storeContext)

    const navTabs: navTab[] = [
        { id: 0, label: "Home", to: "/", icon: <House /> },
        { id: 1, label: "Buy/Rent Gears", to: "/shop", icon: <Guitar/> },
        { id: 2, label: "Hire Talents", to: "/talents", icon: <User /> },
        { id: 3, label: "Find Gigs", to: "/gigs", icon: <ListMagnifyingGlass /> }
    ]

    return (
        <div className="flex items-center justify-between sticky top-0 left-0 w-full lg:px-[8%] z-[50] px-8 bg-white dark:bg-dark dark:text-gray p-3 border border-transparent border-b-primary/[0.1]">
            <Link href="/">
                <Image src="/logo.svg" width={30} height={30} alt="logo" className="lg:block" />
            </Link>

            <nav className="flex items-center justify-between gap-4 bg-white dark:bg-dark dark:text-gray lg:w-auto w-full lg:static fixed left-0 bottom-0 z-[50] lg:p-0 p-4 lg:border-none border border-transparent border-t-primary/[0.2]">
                {
                    navTabs.map((tab: navTab) => (
                        <Tab key={tab.id} label={tab.label} to={tab.to} icon={tab.icon} />
                    ))
                }
            </nav>

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