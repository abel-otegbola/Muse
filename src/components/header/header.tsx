'use client'
import Image from "next/image";
import { Guitar, House, ListMagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react";
import { useContext } from "react";
import Link from "next/link";
import { storeContext } from "@/context/useStore";
import { AuthContext } from "@/context/useAuth";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type navTab =  {
    id: number | string,
    label: string,
    to: string,
    icon: any
}

export default function Header() {
    const pathname = usePathname()
    const { cart } = useContext(storeContext)
    const { user, logOut } = useContext(AuthContext)

    const navTabs: navTab[] = [
        { id: 0, label: "Home", to: "/", icon: <House /> },
        { id: 1, label: "Buy/Rent Gears", to: "/shop", icon: <Guitar/> },
        { id: 2, label: "Hire Talents", to: "/talents", icon: <User /> },
        { id: 3, label: "Find Gigs", to: "/gigs", icon: <ListMagnifyingGlass /> }
    ]

    return (
        <div className="flex items-center justify-between sticky top-0 left-0 w-full lg:px-[8%] z-[50] px-8 backdrop-blur-sm bg-dark text-gray p-3 border border-transparent border-b-primary/[0.1]">
            <Link href="/">
                <Image src="/logo.svg" width={30} height={30} alt="logo" className="lg:block" />
            </Link>

            <nav className="flex items-center justify-between gap-4 text-gray lg:w-auto w-full lg:static fixed left-0 bottom-0 z-[50] lg:p-0 p-4 lg:border-none border border-transparent border-t-primary/[0.2]">
                {navTabs.map((tab: navTab) => (
                    <Link
                        key={tab.id}
                        href={tab.to}
                        className={`flex items-center justify-center md:flex-row flex-col md:gap-1 gap-2 h-[32px] p-[8px_16px] hover:text-primary font-semibold rounded-[4px] ${pathname === tab.to ? "md:bg-primary/10 text-primary" : ""}`}
                    >
                        <span className="md:text-lg text-2xl opacity-[0.6]">{tab.icon}</span>
                        <span className="md:inline md:text-[12px] md:opacity-[0.6] text-[8px]">{tab.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="flex items-center justify-end gap-6 xl:w-[40%] md:w-[35%] relative">
                <div className="md:block hidden flex-1">
                    <div className="relative">
                        <ListMagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input placeholder="Search Products, Gigs and Talents" className="pl-10" />
                    </div>
                </div>
                <Button asChild variant="ghost" size="icon" className="relative rounded-full bg-gray/20 dark:bg-gray/10">
                    <Link href="/cart">
                        <ShoppingCart size={16}/>
                        <sup className="absolute -right-1 -top-1 rounded-full px-1 py-1.5 text-[10px] bg-dark text-gray">{cart.length}</sup>
                    </Link>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full bg-gray/20 dark:bg-gray/10">
                            <User size={16} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuLabel>Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {user ? <DropdownMenuItem asChild><Link href="/dashboard">Dashboard</Link></DropdownMenuItem> : null}
                        {user ? <DropdownMenuItem asChild><Link href="/wishlist">Wishlist</Link></DropdownMenuItem> : null}
                        {user ? <DropdownMenuItem asChild><Link href="/settings">Settings</Link></DropdownMenuItem> : null}
                        <DropdownMenuSeparator />
                        {user ? (
                            <DropdownMenuItem onSelect={() => logOut()}>Logout</DropdownMenuItem>
                        ) : (
                            <DropdownMenuItem asChild><Link href="/login">Login</Link></DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}