import { currencyFormatter } from "@/helpers/currencyConverter";
import { IProductProps } from "@/interface/store";
import { Heart } from "@phosphor-icons/react";
import Image from "next/image";

export default function ProductCard({ product }: {product: IProductProps}) {
    return (
        <div className="flex flex-col gap-4 p-2 rounded-[8px] border border-gray/[0.5]">

            <div className="w-full h-[200px] relative rounded bg-gray/[0.3]">
                <Image src={"/" +product.img} sizes="100%" fill objectFit="cover" alt={product.title} className="rounded" />
                <button className="absolute top-2 right-2 opacity-[0.3] hover:opacity-[1] p-1"><Heart size={16} /></button>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="">{product.title}</h3>
                <h4 className="text-lg font-black">{currencyFormatter(product.price)}</h4>
            </div>
        </div>
    )
}