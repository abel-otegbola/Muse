'use client'
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Homepage() {

    return (
      <main>
        <div className="relative md:min-h-[700px] h-screen bg-tetiary dark:bg-gray/[0.08] dark:bg-gray/[0.08] gap-5 lg:flex-nowrap flex-wrap">
          
          <Image src="/hero.png" width={3000} height={500} alt="girl listening to music" className="absolute bottom-0 left-0 lg:block z-[1]" />
          <div className="relative flex flex-col items-center  text-center md:h-[700px] h-screen gap-4 md:px-[22%] px-4 md:py-[6%] pt-[20%] z-[3] text-white bg-[#000]/[0.9]">
              <h1 className="xl:text-[58px] sm:text-[48px] text-[32px] font-bold leading-[120%]">Connecting Music Talents With Global Opportunities.</h1>
              <p className="mb-2 md:text-[16px] text-[14px] md:w-[80%]">Hire talented musicians, buy and sell instruments, learn music, and promote your craft, all in one growing music community. Muziic helps musicians and music lovers connect, grow, and create real opportunities together.</p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/shop">Explore Products</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/talents">Discover Talents</Link>
                </Button>
              </div>
          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:px-[8%] px-4 py-[3%]">
          {
            [ 
              { id: 0, text: "Buy or Rent Musical Instruments ", img: "/buy.png", actionHref: "shop", actionText: "Shop products", color: "text-primary" },
              { id: 1, text: "Hire Talented Musicians ", img: "/hire.png", actionHref: "talents", actionText: "Find talents", color: "text-black dark:text-gray" },
              { id: 2, text: "Learn Music From Our Courses ", img: "/learn.png", actionHref: "learn", actionText: "Start learning", color: "text-cyan-800" },
            ]
            .map(item => (
              <div key={item.id} className={`flex flex-col justify-between h-[260px] md:p-8 p-4 ${item.color} bg-gray/[0.3] dark:bg-gray/[0.08] dark:bg-[#000]/[0.2] rounded-[20px] bg-cover border border-gray /[0.5] dark:border-gray /[0.2] dark:border-none`} style={{ backgroundImage: `url("${item.img}")` }}>
                <h2 className="text-[18px] md:w-[70%] w-[50%] font-bold">{item.text}</h2>
                <Link className="flex items-center gap-2 px-6 py-2 border border-gray dark:border-gray/[0.2] rounded-full w-fit" href={item.actionHref}>{item.actionText} <ArrowRight weight="fill" size={16}/></Link>
              </div>
            ))
          }
        </div>
      </main>
    )
}
