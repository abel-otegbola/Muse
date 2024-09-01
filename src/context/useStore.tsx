"use client"
import { createContext, useEffect } from "react";
// import { onValue, ref } from "firebase/database";
// import { database } from "../firebase/firebase";
import { useLocalStorage } from "@/customHooks/useLocaStorage";
import { MusicInstruments } from "@/data/musicInstruments";

export const storeContext = createContext<any>([])

export default function StoreContextProvider({ children }: any) {
    const [cart, setCart] = useLocalStorage("cart", [])
    const [wishlist, setWishlist] = useLocalStorage("wishlist", [])
    const [products, setProducts] = useLocalStorage("products", MusicInstruments)

    // useEffect(() => {
    //     const projectsRef = ref(database, 'products/');
    //     let arr: any[] = []
    //     onValue(projectsRef, (snapshot) => {
    //         const data: any = snapshot.val();
    //         Object.keys(data).map((key: any) => {
    //             arr.push({id: key, data: data[key]})
    //         })
    //         setProducts(arr)
    //     });
    // }, [setProducts])

    
    const toggleCart = (id: number | string | null) => {
        if(cart.map((item: any) => item.id).indexOf(id) === -1) {
            setCart([ {id, quantity: 1}, ...cart ])
        }
        else {
            setCart(cart.filter((item: any) => item.id !== id))
        }
    }

    const toggleWishlist = (id: number | string | null) => {
        if(wishlist.indexOf(id) === -1) {
            setWishlist([ id, ...wishlist ])
        }
        else {
            setWishlist(wishlist.filter((item: any) => item !== id))
        }
    }

    const changeQuantity = (id: number | string | null, action: string) => {
        let newList = cart.map((item: any) => {
            if(item.id === id) {
                if(action === "minus" && item.quantity > 1) {
                    item.quantity -= 1
                }
                else if(action === "plus") {
                    item.quantity += 1
                }
                return item
            }
            else return item;
        })
        setCart(newList)
    }



    const data = {
        products,
        setProducts,
        cart,
        wishlist,
        toggleCart,
        toggleWishlist,
        changeQuantity
    }

    return (
        <storeContext.Provider value={data} >
            {children}
        </storeContext.Provider>
    )
}