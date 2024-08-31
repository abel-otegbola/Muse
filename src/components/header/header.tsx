'use client'
import Image from "next/image";
import Tab from "../tab/tab";
import Button from "../button/button";
import Search from "../search/search";
import { Guitar, House, ListMagnifyingGlass, User } from "@phosphor-icons/react";

type navTab =  {
    id: number | string,
    label: string,
    to: string,
    icon: any
}

export default function Header() {
    const navTabs: navTab[] = [
        { id: 0, label: "Home", to: "/", icon: <House /> },
        { id: 1, label: "Buy/Rent Gears", to: "/shop", icon: <Guitar/> },
        { id: 2, label: "Hire Talents", to: "/talents", icon: <User /> },
        { id: 3, label: "Find Gigs", to: "/gigs", icon: <ListMagnifyingGlass /> }
    ]

    return (
        <div className="flex items-center justify-between lg:sticky top-0 left-0 w-full lg:px-[5%] px-8 bg-white p-3 rounded-[8px] border border-transparent border-b-primary/[0.1]">
            <Image src="/logo.svg" width={30} height={30} alt="logo" className="lg:block" />

            <nav className="flex items-center justify-between gap-4 bg-white lg:w-auto w-full lg:static fixed left-0 bottom-0 z-[50] lg:p-0 p-4 lg:border-none border border-transparent border-t-primary/[0.2]">
                {
                    navTabs.map((tab: navTab) => (
                        <Tab key={tab.id} label={tab.label} to={tab.to} icon={tab.icon} />
                    ))
                }
            </nav>

            <div className="md:flex items-center gap-6 w-[40%] hidden">
                <Search placeholder="Search Products, Gigs and Talents" />
                <Button href={"/login"} >Login</Button>
            </div>
        </div>
    )
}