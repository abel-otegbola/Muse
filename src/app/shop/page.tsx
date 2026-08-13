'use client'
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/cards/productCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MusicInstruments } from "@/data/musicInstruments";
import { Funnel, SortAscending, SortDescending } from "@phosphor-icons/react";
import { useState } from "react";

export default function Shoppage() {
  const [sort, setSort] = useState("Latest")

  const sortOptions = [
    { id: 0, title: "Latest", icon: <SortAscending /> },
    { id: 1, title: "Oldest", icon: <SortDescending /> },
  ]

    return (
      <main>
        <div className="md:px-[8%] md:py-[3%] p-8 flex flex-col items-center justify-start bg-tetiary dark:bg-gray/[0.08] gap-5 lg:flex-nowrap flex-wrap">
          
          <div className="flex flex-col gap-3 items-center my-[5%] md:w-[80%]">
              <h1 className="xl:text-[40px] text-center text-[32px] font-bold leading-[120%]">Find Quality Musical Instruments </h1>
              <p className="mb-2 text-center">Bri8 musicals find talented musicians for your next gig, learn from our expert instructors, buy, sell or rent musical instruments .</p>
              <div className="flex gap-2">
                <Input placeholder="Search products" />
                <Button type="button">Search</Button>
              </div>
          </div>

        </div>

        <div className="flex justify-between md:px-[8%] p-4 ">
          <div className="flex items-center gap-2"></div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" type="button"><Funnel size={16} /> Filter</Button>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.id} value={option.title}>
                    <span className="flex items-center gap-2">{option.icon}{option.title}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:gap-6 gap-4 md:px-[8%] px-4 pb-[3%]">
          {
            MusicInstruments
            .map(item => (
                <ProductCard key={item.id} product={item} />
            ))
          }
        </div>
      </main>
    )
}
