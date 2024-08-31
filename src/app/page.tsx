'use client'
import Button from "@/components/button/button";
import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Homepage() {

    return (
      <main>
        <div className="md:px-[8%] md:py-[3%] p-8 flex justify-between bg-tetiary gap-5 lg:flex-nowrap flex-wrap">
          
          <div className="flex flex-col gap-7 lg:w-[50%] mt-[5%]">
              <h1 className="xl:text-[58px] sm:text-[48px] text-[32px] font-bold leading-[120%]">Discover Musical Talents, Lessons, Gigs and Gears</h1>
              <p className="mb-2">Bri8 musicals find talented musicians for your next gig, learn from our expert instructors, buy, sell or rent musical instruments .</p>
              <div className="flex gap-4">
                <Button href="/shop">Explore Products</Button>
                <Button href="/talents" variant="secondary">Discover Talents</Button>
              </div>
          </div>
            
          <Image src="/hero-image.png" width={500} height={500} alt="girl listening to music" className="lg:block" />

        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:px-[8%] px-8 py-[3%]">
          {
            [ 
              { id: 0, text: "Buy or Rent Musical Instruments ", img: "buy", actionHref: "shop", actionText: "Shop products" },
              { id: 1, text: "Hire Talented Musicians ", img: "hire", actionHref: "talents", actionText: "Find talents" },
              { id: 2, text: "Learn Music From Our Courses ", img: "learn", actionHref: "learn", actionText: "Start learning" },
            ]
            .map(item => (
              <div key={item.id} className={`flex flex-col justify-between h-[260px] p-8 text-gray rounded-[20px] bg-cover`} style={{ backgroundImage: `url("/${item.img}.png")` }}>
                <h2 className="text-[18px] w-[70%] font-bold">{item.text}</h2>
                <Link className="flex items-center gap-2 px-6 py-2 border border-gray rounded-full w-fit" href={item.actionHref}>{item.actionText} <ArrowRight weight="fill" size={16}/></Link>
              </div>
            ))
          }
        </div>
      </main>
    )
}
