"use client"
import { useEffect, useState } from "react";
import { useLocalStorage } from "@/customHooks/useLocaStorage";
import { Desktop, Moon, Sun } from "@phosphor-icons/react";
import Tab from "@/components/tab/tab";
import Button from "@/components/button/button";

interface Theme {
    id: number, icon: any, title: string
}
export interface Themes extends Array<Theme>{}


function Settings() {
    const [theme, setTheme] = useState(localStorage.theme)
    const [fontSize, setFontSize] = useLocalStorage("size", "14px")

    const themes: Themes = [
        { id: 0, icon: <Desktop />, title: "System" },
        { id: 1, icon: <Sun />, title: "light" },
        { id: 2, icon: <Moon />, title: "dark" },
    ]

    useEffect(() => {
        if(theme === 'light') {
            // Whenever the user explicitly chooses light mode
            localStorage.theme = 'light'
        }
        else if(theme === 'dark') {
            // Whenever the user explicitly chooses dark mode
            localStorage.theme = 'dark'
        }  
        else {
            // Whenever the user explicitly chooses to respect the OS preference
            localStorage.removeItem('theme')
        }  
    }, [theme])
    
    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        if(!localStorage.theme) {
            setTheme("System")
        }
    }, [theme])

    return (
        <>
        <div className="md:flex items-start md:px-[8%] px-8">
            
            <div className="md:m-2 flex-1 pt-[60px]">
                <h2 className="flex items-center gap-3 font-semibold uppercase text-purple pb-3 border border-transparent border-b-gray-200 dark:border-b-gray-100/[0.08]">Settings</h2>


                <div className="py-8 border border-transparent border-b-gray-200 dark:border-b-gray-100/[0.08]">
                    <h3 id="appearance" className="py-2 text-purple">Appearance</h3>
                    <p className="">Select or customize your ui theme</p>
                    <div className="flex gap-4 py-2">
                        {
                            themes.map(item => {
                                return (
                                    
                                <Button key={item.id} variant={item.title !== theme ? "secondary" : "primary"} onClick={() => setTheme(item.title)} >
                                    <span className="md:text-lg text-2xl opacity-[0.6]">{item.icon}</span>
                                    <span className="md:inline md:text-[12px] md:opacity-[0.6] text-[8px]">{item.title}</span>
                                </Button>
                                )
                            })
                        }
                    </div>

                    
                </div>

                <div className="py-8 border border-transparent border-b-gray-200 dark:border-b-gray-100/[0.08]">
                    <h3 id="preferences" className="py-2 text-purple">Preferences</h3>
                    <p className="">Font size</p>
                    <div className="">
                        <select className="w-[100px] p-4 rounded border border-gray-600/[0.2] bg-black text-white" aria-label={"Font size changed to "+ fontSize} onChange={(e) => setFontSize(e.target.value)} defaultValue={fontSize}>
                        {
                            ["10px", "12px", "14px", "16px", "18px", "20px"].map((item, i) => (
                                <option key={i} className="bg-black text-white">{item}</option>
                            ))
                        }
                        </select>
                        <p style={{ fontSize: fontSize }} className="p-2 px-4 rounded bg-purple/[0.1] w-fit mt-2">A cat inside a bag</p>
                    </div>
                </div>
                
            </div>

        </div>
        </>
    )
}

export default Settings;