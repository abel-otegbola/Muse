'use client'
import { Musicians } from "@/data/musicians";
import { ITalentsProps } from "@/interface/store";
import { Heart } from "@phosphor-icons/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LoaderIcon } from "react-hot-toast";

export default function TalentPage () {
    const searchParams = useSearchParams();
    const id = searchParams.get("id") || 0
    const [talent, setTalent] = useState<ITalentsProps>({ id: "0", name: "", biography: "", genres: [], instruments: [], img: "", available: false })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTalent(Musicians.filter(item => item.id === id)[0])
    }, [id])


    return (<div className="md:p-[8%] p-[3%]">
        {
            loading ? <LoaderIcon /> :
                <div key={id}>
                    <div className="relative flex flex-wrap justify-center items-center my-2 rounded gap-[5%]">
                        <div className="md:w-[400px] w-full h-[472px] relative bg-gray/[0.3]">
                        {/* <Slide arrows={false} indicators={true} cssClass="" easing="linear" transitionDuration={500} duration={3000}>
                            {
                                [talent.thumbnail, ...talent.images].map((img: any, i: number) => (
                                    <div className={`each-slide-effect`} key={i}>
                                        <img src={img.url} width={"100%"}  />
                                    </div>
                                ))
                            }
                        </Slide> */}
                        
                            <Image src={talent.img || "/guitarist.jpg"} alt={talent.name} fill sizes="100%" className="object-cover" />
                        </div>
                        <div className="md:px-[3%] px-4 md:py-0 py-6 md:w-[50%] w-full">
                            <h2 className="py-2 md:text-[40px] text-[28px] font-bold">{talent?.name}</h2>

                            <div className="flex flex-col gap-2 py-4">
                                <p className="rounded py-1 w-fit"><span className="font-bold">Genres:</span> {talent?.genres + ", "}</p>
                                <p className="rounded py-1 w-fit"><span className="font-bold">Instruments:</span> {talent?.instruments + ", "}</p>
                            </div>                            

                            <div className="mt-4 px-1">
                                <div className="my-2">
                                    <p className="font-bold">biography: </p>
                                    <div className="mt-4">
                                        <div dangerouslySetInnerHTML={{ __html: talent?.biography}} className="w-full"></div>
                                    </div>
                                </div>
                            </div>


                            <div className="mt-6 flex items-center gap-4 py-4">
                                

                               
                            </div>
                        </div>
                    </div> 


                    <div className="px-[5%]">
                        <h2 className="border border-transparent border-b-gray/[0.4] text-lg mt-10 font-semibold">Talent Details</h2>
{/*                         
                        <div className="flex flex-col gap-2 py-4">
                            <p className="rounded py-1 w-fit"><span className="font-bold">Brand:</span> {talent?.brand + ", "}</p>
                            <p className="rounded py-1 w-fit"><span className="font-bold">Model:</span> {talent?.model + ", "}</p>
                            <p className="rounded py-1 w-fit"><span className="font-bold">Color:</span> {talent?.color + ", "}</p>
                            <p className="rounded py-1 w-fit"><span className="font-bold">Features:</span> {talent?.features + ", "}</p>
                        </div>                             */}
                    </div>

                    <div className="px-[5%]">
                        <h2 className="border border-transparent border-b-gray/[0.4] text-lg mt-20 font-semibold">Related talents</h2>
                        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-4 gap-2 py-[40px] ">
                            {/* {
                                MusicInstruments.filter((item: any) => item.category === talent.category && item.id !== id).slice(0,5).map((talent: any) => (
                                <talentCard key={talent.id} talent={talent.data} />
                            ))
                            } */}
                        </div>
                    </div>
                </div>
                
        }

        </div>
    )

}