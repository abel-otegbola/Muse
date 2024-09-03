'use client'
import Button from "@/components/button/button";
import ProductCard from "@/components/cards/productCard";
import TalentCard from "@/components/cards/talentCard";
import Dropdown from "@/components/dropdown/dropdown";
import Search from "@/components/search/search";
import { Musicians } from "@/data/musicians";
import { Funnel, SortAscending, SortDescending } from "@phosphor-icons/react";
import { useState } from "react";

export default function Talentspage() {
  const [sort, setSort] = useState("Latest")

  const sortOptions = [
    { id: 0, title: "Latest", icon: <SortAscending /> },
    { id: 1, title: "Oldest", icon: <SortDescending /> },
  ]

    return (
      <main>
        <div className="md:px-[8%] md:py-[3%] p-8 flex flex-col items-center justify-start bg-tetiary dark:bg-gray/[0.08] gap-5 lg:flex-nowrap flex-wrap">
          
          <div className="flex flex-col gap-3 items-center my-[5%] md:w-[80%]">
              <h1 className="xl:text-[40px] text-center text-[32px] font-bold leading-[120%]">Hire Expert Musicians Around You</h1>
              <p className="mb-2 text-center">Bri8 musicals find talented musicians for your next gig, learn from our expert instructors, buy, sell or rent musical instruments .</p>
              <div className="flex gap-2">
                <Search placeholder="Search musicians" />
                <Button >Search</Button>
              </div>
          </div>

        </div>

        <div className="flex justify-between md:px-[8%] p-8  ">
          <div className="flex items-center gap-2"></div>
          <div className="flex items-center gap-2">
            <Button variant="secondary"><Funnel size={16} /> Filter</Button>
            <Dropdown name="Sort" onChange={setSort} value={sort} error={""} options={sortOptions} placeholder="Sort by" className="w-[100px]"/>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:gap-6 gap-4 md:px-[8%] px-4 pb-[3%]">
          {
            Musicians
            .map(item => (
                <TalentCard key={item.id} talent={item} />
            ))
          }
        </div>
      </main>
    )
}
