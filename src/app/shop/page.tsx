'use client'
import Button from "@/components/button/button";
import ProductCard from "@/components/cards/productCard";
import Search from "@/components/search/search";
import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Homepage() {

    return (
      <main>
        <div className="md:px-[8%] md:py-[3%] p-8 flex flex-col items-center justify-start bg-tetiary gap-5 lg:flex-nowrap flex-wrap">
          
          <div className="flex flex-col gap-3 items-center mt-[5%] md:w-[80%]">
              <h1 className="xl:text-[40px] text-center text-[32px] font-bold leading-[120%]">Find Quality Musical Instruments </h1>
              <p className="mb-2 text-center">Bri8 musicals find talented musicians for your next gig, learn from our expert instructors, buy, sell or rent musical instruments .</p>
              <div className="flex gap-2">
                <Search placeholder="Search products" />
                <Button>Search</Button>
              </div>
          </div>
            
            <div className="flex items-center justify-center my-12">
                <Image src="/bass-guitar-2.png" width={450} height={200} alt="bass guitar" className="lg:block" />
            </div>

        </div>

        <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-6 md:px-[8%] px-8 py-[3%]">
          {
            [ 
              { id: "0", title: "Acoustic Guitar ", img: "products/acoustic.png", price: 400, categories: "", tags: [""], description: "" },
              { id: "1", title: "Electric Guitar ", img: "products/electric.png", price: 12000, categories: "", tags: [""], description: "" },
              { id: "2", title: "Keyboard Piano ", img: "products/piano.png", price: 3000, categories: "", tags: [""], description: "" },
              { id: "4", title: "Violin ", img: "products/violin.png", price: 400, categories: "", tags: [""], description: "" },
              { id: "3", title: "Electric Guitar Vintage ", img: "products/electric-2.png", price: 3000, categories: "", tags: [""], description: "" },
            ]
            .map(item => (
                <ProductCard key={item.id} product={item} />
            ))
          }
        </div>
      </main>
    )
}
