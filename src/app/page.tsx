import Button from "@/components/button/button";
import Image from "next/image";

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
      </main>
    )
}
