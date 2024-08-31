"use client"
import { createContext, useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase/firebase";
import { useLocalStorage } from "@/customHooks/useLocaStorage";

export const storeContext = createContext<any>([])

export default function StoreContextProvider({ children }: any) {
    const [cart, setCart] = useLocalStorage("cart", [])
    const [wishlist, setWishlist] = useLocalStorage("wishlist", [])
    const [products, setProducts] = useLocalStorage("products", [])

    useEffect(() => {
        const projectsRef = ref(database, 'products/');
        let arr: any[] = []
        onValue(projectsRef, (snapshot) => {
            const data: any = snapshot.val();
            Object.keys(data).map((key: any) => {
                arr.push({id: key, data: data[key]})
            })
            setProducts(arr)
        });
    }, [setProducts])

    const data = {
        products,
        setProducts,
        cart,
        setCart,
        wishlist,
        setWishlist
    }

    return (
        <storeContext.Provider value={data} >
            {children}
        </storeContext.Provider>
    )
}