'use client'
import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-black dark:bg-[#000]/[0.6] text-[#D9D9F2] mt-12">
            <div className="grid lg:grid-cols-4 grid-cols-2 text-[12px] gap-[30px] py-[30px] md:px-[8%] px-8 border border-transparent border-t-gray-700/[0.09] dark:border-t-gray-100/[0.09]">
                <ul className="w-full">
                    <h2 className="py-2 font-semibold uppercase">Products</h2>
                    <li className="flex w-full"><Link href="/search?query=Acoustic guitars" className="py-[5px] w-full hover:text-primary">Acoustic guitars</Link></li>
                    <li className="flex w-full"><Link href="/search?query=Electric guitars" className="py-[5px] w-full hover:text-primary">Electric guitars</Link></li>
                    <li className="flex w-full"><Link href="/search?query=Violin" className="py-[5px] w-full hover:text-primary">Violin</Link></li>
                    <li className="flex w-full"><Link href="/search?query=Saxophones" className="py-[5px] w-full hover:text-primary">Saxophones</Link></li>
                </ul>
                <ul className="w-full">
                    <h2 className="py-2 font-semibold uppercase text-purple">Gigs</h2>
                    <li className="flex w-full"><Link href="/search?query=Saxophones" className="py-[5px] w-full hover:text-primary">Keyboardists needed</Link></li>
                    <li className="flex w-full"><Link href="/search?query=Saxophones" className="py-[5px] w-full hover:text-primary">Bands needed</Link></li>
                    <li className="flex w-full"><Link href="/search?query=Saxophones" className="py-[5px] w-full hover:text-primary">Guitarist needed</Link></li>
                </ul>
                <ul className="w-full">
                    <h2 className="py-2 font-semibold uppercase text-purple">Talents</h2>
                </ul>
                <ul className="w-full">
                    <div className="flex flex-wrap gap-4 py-4 text-[20px] text-purple">
                        <a href="https://facebook.com/"><FacebookLogo /></a>
                        <a href="https://twitter.com/"><TwitterLogo /></a>
                        <a href="https://instagram.com/"><InstagramLogo /></a>
                    </div>
                    <p className="py-1">OAU, Ile-Ife, Osun state, Nigeria</p>
                    <a href="tel:+2347060989331" className="block py-1">+2347060989331</a>
                    <a href="mailto:support@ennovate.com" className="block py-1">Support@muse.com</a>
                </ul>
            </div>
            <div className="bg-[#000]/[0.2] dark:bg-[#000]/[0.8] text-white text-center">
                <p className="px-[3%] py-3 flex items-center gap-2 justify-center">muse &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;