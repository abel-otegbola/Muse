'use client'
import Button from "@/components/button/button";
import { storeContext } from "@/context/useStore";
import { MusicInstruments } from "@/data/musicInstruments";
import { currencyFormatter } from "@/helpers/currencyConverter";
import { IProductProps } from "@/interface/store";
import { Heart, Minus, Plus } from "@phosphor-icons/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { LoaderIcon } from "react-hot-toast";

export default function ProductPage () {
    const searchParams = useSearchParams();
    const id = searchParams.get("id") || 0
    const { cart, toggleCart, wishlist, toggleWishlist, changeQuantity } = useContext(storeContext)
    const [product, setProduct] = useState<IProductProps>({ id: "0",  title: "", description: "", categories: [],tags: [], img: "", price: 0, brand: "", model: "", color: "", features: [] })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setProduct(MusicInstruments.filter(item => item.id === id)[0])
    }, [id])


    return (<div className="md:p-[8%] p-[3%]">
        {
            loading ? <LoaderIcon /> :
                <div key={id}>
                    <div className="relative flex flex-wrap justify-center items-center my-2 rounded gap-[5%]">
                        <div className="md:w-[400px] w-full h-[472px] relative bg-gray/[0.3]">
                        {/* <Slide arrows={false} indicators={true} cssClass="" easing="linear" transitionDuration={500} duration={3000}>
                            {
                                [product.thumbnail, ...product.images].map((img: any, i: number) => (
                                    <div className={`each-slide-effect`} key={i}>
                                        <img src={img.url} width={"100%"}  />
                                    </div>
                                ))
                            }
                        </Slide> */}
                        
                            <Image src={"/" +product.img || "guitarist.jpg"} alt={product.title} fill sizes="100%" className="bg-cover" />
                        </div>
                        <div className="md:px-[3%] px-4 md:py-0 py-6 md:w-[50%] w-full">
                            <h2 className="py-2 md:text-[40px] text-[28px] font-bold">{product?.title}</h2>

                            
                            <div className="flex items-center justify-between gap-2">
                                <p className="flex items-center text-[20px] font-bold py-4">{currencyFormatter(product?.price)}</p>
                                <div>
                                {
                                    wishlist.indexOf(id) === -1 ? 
                                    <button className="h-[40px] text-gray-300 flex items-center gap-2" onClick={() => toggleWishlist(id) }><Heart size={16}/>Save to wishlist</button> 
                                    : 
                                    <button className=" h-[40px] text-red-500 flex items-center gap-2" onClick={() => toggleWishlist(id)}><Heart size={16}/> Remove from wishlist</button> 
                                }
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 py-4">
                                <p className="rounded py-1 w-fit"><span className="font-bold">Categories:</span> {product?.categories + ", "}</p>
                                <p className="rounded py-1 w-fit"><span className="font-bold">Tags:</span> {product?.tags + ", "}</p>
                            </div>                            

                            <div className="mt-4 px-1">
                                <div className="my-2">
                                    <p className="font-bold">Description: </p>
                                    <div className="mt-4">
                                        <div dangerouslySetInnerHTML={{ __html: product?.description}} className="w-full"></div>
                                    </div>
                                </div>
                            </div>


                            <div className="mt-6 flex items-center gap-4 py-4">
                                
                                <div className="text-[14px] border border-transparent border-t-black/[0.1] sm:px-0 py-6 w-full sm:z-0 bg-white">
                                {
                                    cart.map((item: any) => item.id).indexOf(id) === -1 ? 
                                    <Button size="full" onClick={() => toggleCart(id) } >Add to Cart</Button>
                                    : 
                                    <div className="flex gap-2">
                                        <Button size="full" variant="secondary" onClick={() => toggleCart(id)} >Remove From Cart</Button>
                                        <div className="flex items-center gap-1 animate-zoom-in ">
                                            <button className="h-[40px] p-[12px]" onClick={() => changeQuantity(id, "minus")}><Minus /></button>
                                            <p className="flex items-center justify-center h-[40px] p-[12px] py-1 rounded bg-transparent w-[70px] border border-gray/[0.5]">{cart.filter((item: any) => item.id === id).map((item: any) => item.quantity)}</p>
                                            <button className="h-[40px] p-[12px]" onClick={() => changeQuantity(id, "plus")}><Plus /></button>
                                        </div> 
                                    </div>
                                    
                                }
                                </div>

                               
                            </div>
                        </div>
                    </div> 


                    <div className="px-[5%]">
                        <h2 className="border border-transparent border-b-gray/[0.4] text-lg mt-10 font-semibold">Product Details</h2>
                        
                        <div className="flex flex-col gap-2 py-4">
                            <p className="rounded py-1 w-fit"><span className="font-bold">Brand:</span> {product?.brand + ", "}</p>
                            <p className="rounded py-1 w-fit"><span className="font-bold">Model:</span> {product?.model + ", "}</p>
                            <p className="rounded py-1 w-fit"><span className="font-bold">Color:</span> {product?.color + ", "}</p>
                            <p className="rounded py-1 w-fit"><span className="font-bold">Features:</span> {product?.features + ", "}</p>
                        </div>                            
                    </div>

                    <div className="px-[5%]">
                        <h2 className="border border-transparent border-b-gray/[0.4] text-lg mt-20 font-semibold">Related Products</h2>
                        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-4 gap-2 py-[40px] ">
                            {/* {
                                MusicInstruments.filter((item: any) => item.category === product.category && item.id !== id).slice(0,5).map((product: any) => (
                                <ProductCard key={product.id} product={product.data} />
                            ))
                            } */}
                        </div>
                    </div>
                </div>
                
        }

        </div>
    )

}