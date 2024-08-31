import Button from "@/components/button/button";
import Image from "next/image";

export default function NotFoundPage () {
    return (
        <div className="p-[5%] flex justify-center items-center gap-[10%] flex-wrap">
            <Image src="/girl.jpg" width={300} height={500} alt="girl listening to music" className="lg:block" />

            <div className="flex flex-col gap-4">
                <h1 className="text-[64px] font-bold">404</h1>
                <p className="-mt-6 mb-2">You seem to be lost. This page could not be found</p>
                <Button href="/">Home</Button>
            </div>
            
        </div>
    )
}