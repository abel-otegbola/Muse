'use client'
import { useEffect, useState } from "react";

interface dropdownProps {
    className?: string;
    disabled?: boolean;
    label?: string;
    name: string;
    value: string | number;
    onChange: (value: string) => void;
    error: string | undefined;
    placeholder?: string;
    leftIcon?: any;
    options?: any;
}

export default function Dropdown({ className, disabled, label, name, options, value, onChange, error, placeholder, leftIcon }: dropdownProps) {
    const [focus, setFocus] = useState(false)
    const [optionsList, setOptionsList] = useState(options)
    const [active, setActive] = useState({ id: 0, platform: "", icon: null })

    const handleSearch = (query: string) => {
      setOptionsList(options.filter((option: any) => option.platform.indexOf(query) !== 0))
    }

    return (
        <div className="relative flex flex-col w-full gap-1">
            { label ? <label htmlFor={name} className="text-[12px]">{label}</label> : "" }

            <div className={`flex items-center relative rounded-[8px] bg-white w-full h-[48px] p-1 px-4 border border-gray duration-500 z-[100] 
                ${error && !focus ? "border-red text-red" : "border-gray"}
                ${focus ? "border-primary shadow-input-active" : "border-gray"}
            `}>
                <span>{ active.icon }</span>
                <input 
                    className={` p-2 w-full outline-none
                        ${className} 
                        ${disabled ? "opacity-[0.25]" : ""}
                    `}
                    name={name}
                    id={name}
                    value={active.platform}
                    placeholder={placeholder}
                    onFocus={() => setFocus(true)}
                    onChange={(e) => handleSearch(e.target.value)}
                />

                { error && !focus ? <p className="absolute right-2 px-2 text-[12px] bg-white/[0.8] backdrop-blur-sm">{error}</p> : "" }
            </div>

            <div className={`p-4 rounded-[8px] absolute top-[64px] left-0 w-full z-[1000] bg-white h-[250px] shadow-md overflow-y-auto ${focus ? "block" : "hidden"}`}>
              {
                optionsList?.map((option: any) => (
                  <button key={option.id} onClick={() => {setActive(option); onChange(option.platform); setFocus(false)}} className={`p-4 flex w-full items-center gap-2 hover:text-primary border border-transparent border-b-gray ${option.platform === value ? "text-primary" : ""}`}>
                    {option.icon} 
                    {option.platform}
                  </button>
                ))
              }
            </div>
        </div>
    )
}