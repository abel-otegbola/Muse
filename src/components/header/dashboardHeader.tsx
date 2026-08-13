'use client'
import Image from "next/image";
import { ShoppingCart, User } from "@phosphor-icons/react";
import { useContext } from "react";
import Link from "next/link";
import { storeContext } from "@/context/useStore";
import { AuthContext } from "@/context/useAuth";
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


export default function DashboardHeader() {
    const { cart } = useContext(storeContext)
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="flex items-center justify-between sticky top-0 left-0 w-full z-[50] px-6 bg-dark  p-3 border border-transparent border-b-primary/[0.1]">
            <Link href="/">
                <Image src="/logo.svg" width={30} height={30} alt="logo" className="lg:block" />
            </Link>

            <div className="flex items-center justify-end gap-6 xl:w-[40%] md:w-[35%] relative">
                <div className="md:block hidden flex-1">
                    <Input placeholder="Search Products, Gigs and Talents" />
                </div>
                <Button asChild variant="ghost" size="icon" className="relative rounded-full bg-gray/20 dark:bg-gray/10">
                    <Link href="/cart">
                        <ShoppingCart size={16}/>
                        <sup className="absolute -right-1 -top-1 rounded-full bg-dark px-1.5 py-0.5 text-[8px] text-emerald-500 dark:">{cart.length}</sup>
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