'use client'
import Button from "@/components/button/button"
import { storeContext } from "@/context/useStore"
import { currencyFormatter } from "@/helpers/currencyConverter"
import { Minus, Plus, ShoppingCart, Trash } from "@phosphor-icons/react"
import Image from "next/image"
import { useContext, useEffect } from "react"



export default function Cartpage() {
    const { cart, toggleCart, products, changeQuantity } = useContext(storeContext)

    useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <>
        
        <div className="min-h-[70vh]">
            
            <div className="md:px-[8%] md:py-[2%] w-full p-8 flex flex-col items-center justify-start bg-tetiary dark:bg-gray/[0.08] gap-5 lg:flex-nowrap flex-wrap">
                <div className="flex flex-col gap-3 items-center my-[5%]">
                    <h1 className="xl:text-[40px] text-center text-[32px] font-bold leading-[120%]">Your Cart </h1>
                    <p className="p-1 px-2 bg-primary/[0.1] border border-gray /[0.8] rounded">{cart.length} { cart.length === 1 ? "Item" : "Items" }</p>
                </div>
            </div>

            <div className="md:w-[50%] mx-auto w-full md:flex-row flex-col p-4 rounded">
                <div className="flex flex-col gap-2 py-2 mb-12">
                {   
                    products.filter((item: any) => cart.map((item: any) => item.id).indexOf(item.id) !== -1 ).length > 0 ?
                    products.filter((item: any) => cart.map((item: any) => item.id).indexOf(item.id) !== -1 ).map((product: any) => (
                        <div key={product?.id} className="relative bg-white dark:bg-dark dark:text-gray flex p-2 mx-2 rounded border border-gray/[0.7] dark:border-gray/[0.08]">
                            <a href={`/product?id=${product?.id}`}>
                                <Image src={"/" + product?.img} alt={product?.title} width={100} height={150} className="rounded bg-gray/[0.3] dark:bg-gray/[0.05] w-[100px] border border-gray/[0.5] dark:border-gray/[0.2]" />
                            </a>
                            <div className="pl-6 py-2 w-full flex flex-col justify-between">
                                <a href={`/product?id=${product?.id}`} className="mr-8">{product?.title}</a>
                               
                                <div className="flex items-center justify-between mt-4 gap-[3%] -ml-1 w-full">
                                    <div className="flex items-center gap-2">
                                        <p className="flex items-center text-purple text-[18px] font-semibold">{currencyFormatter(product?.price)}</p>
                                    </div>
                                    <div className="flex items-center animate-zoom-in text-[10px]">
                                        <button className="h-[40px] p-[8px] rounded" onClick={() => changeQuantity(product.id, "minus")}><Minus /></button>
                                        <p className="flex items-center justify-center h-[40px] p-[8px] py-[5px] text-center rounded w-[50px] text-[10px] border border-gray /[0.6]">{cart.filter((item: any) => item.id === product?.id).map((item: any) => item.quantity)}</p>
                                        <button className="h-[40px] p-[8px] rounded"  onClick={() => changeQuantity(product.id, "plus")}><Plus /></button>
                                    </div>
                                </div>
                                
                                <button className="flex items-center gap-2 absolute right-4 top-4 text-[10px] text-red cursor-pointer text-red-500 p-1 rounded bg-gray-500/[0.1]" onClick={() => toggleCart(product?.id) }><Trash className="text-[16px]"/></button>
                            </div>
                        </div>
                    ))
                    :
                    <div className="flex flex-col gap-4 items-center justify-center min-h-[40vh]">
                        <h1>You have no product in your cart</h1>
                        <a href="/shop" className="p-2 px-6 border border-purple text-purple rounded">Visit Shop to add products</a>
                    </div>
                }
                </div>

                <div className="flex justify-end sm:static gap-2 border border-transparent border-t-black/[0.1] w-full sm:px-0 p-4">
                    <Button href="/checkout">Proceed to checkout</Button>
                </div>
            </div>
        </div>
        </>
    )
}