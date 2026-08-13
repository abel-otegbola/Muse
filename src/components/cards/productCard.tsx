import { storeContext } from "@/context/useStore";
import { currencyFormatter } from "@/helpers/currencyConverter";
import { IProductProps } from "@/interface/store";
import { CheckCircleIcon, HeartIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Button } from "@/components/ui/button";

export default function ProductCard({ product }: {product: IProductProps}) {
    const { cart, toggleCart, wishlist, toggleWishlist } = useContext(storeContext)

    return (
        <div className="flex flex-col gap-4 p-2 rounded-[8px] bg-gray/[0.2]">

            <div className="w-full h-[230px] relative rounded">
                <Link href={"/product?id=" + product.id}>
                    <Image src={"/" +product.img} sizes="100%" fill alt={product.title} className="rounded object-cover" />
                </Link>

                <div className="absolute top-2 right-2 flex flex-col items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-background/80 p-1" onClick={() => toggleWishlist(product.id) }>
                        { wishlist.indexOf(product.id) !== -1 ? <HeartIcon size={16} color="red" /> : <HeartIcon size={16} className=" opacity-[0.8] hover:opacity-[1]"/> }
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-background/80 p-1 opacity-[0.8]" onClick={() => toggleCart(product.id)}>
                        {
                            cart.map((item: any) => item.id).indexOf(product.id) !== -1 ? 
                            <CheckCircleIcon size={16} color="green"/> : 
                            <ShoppingCartIcon size={16} /> 
                        }
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-2 px-1">
                <span className="opacity-[0.8] w-fit hover:opacity-[1] p-1 px-2 text-[8px] border border-gray /[0.8] rounded-[2px]">{product?.condition}</span>
                <Link href={"/product?id=" + product.id}>
                    <h3 className="">{product.title}</h3>
                </Link>
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-black">{currencyFormatter(product.price)}</h4>
                </div>
            </div>
        </div>
    )
}