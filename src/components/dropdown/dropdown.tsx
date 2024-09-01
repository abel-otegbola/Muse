'use client'
import { useOutsideClick } from "@/helpers/useClickOutside";
import { SortAscending } from "@phosphor-icons/react";
import { useState } from "react";

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
    const [active, setActive] = useState({ id: 0, title: "", icon: null })

    const handleSearch = (query: string) => {
      onChange(query)
    }

    const optionsRef = useOutsideClick(setFocus, false)

    return (
        <div ref={optionsRef} className="relative flex flex-col w-full gap-1">
            { label ? <label htmlFor={name} className="text-[12px]">{label}</label> : "" }

            <div className={`flex items-center relative rounded-[4px] bg-white w-full h-[40px] p-1 px-4 border border-gray duration-500 z-[10] 
                ${error && !focus ? "border-red text-red" : "border-gray"}
                ${focus ? "border-primary shadow-input-active" : "border-gray"}
            `}>
                <span className="text-[16px]">{ active.icon || <SortAscending /> }</span>
                <input 
                    className={` p-2 w-full outline-none
                        ${className} 
                        ${disabled ? "opacity-[0.25]" : ""}
                    `}
                    name={name}
                    id={name}
                    value={active.title}
                    placeholder={placeholder}
                    onFocus={() => setFocus(true)}
                    onChange={(e) => handleSearch(e.target.value)}
                />

                { error && !focus ? <p className="absolute right-2 px-2 text-[12px] bg-white/[0.8] backdrop-blur-sm">{error}</p> : "" }
            </div>

            <div className={`p-4 rounded-[8px] absolute top-[50px] left-0 w-full z-[1000] bg-white shadow-md overflow-y-auto border border-gray/[0.4] ${focus ? "block" : "hidden"}`}>
              {
                options?.map((option: any) => (
                  <button key={option.id} onClick={() => {setActive(option); onChange(option.title); setFocus(false)}} className={`p-4 flex w-full items-center gap-2 hover:text-primary border border-transparent border-b-gray ${option.title === value ? "text-primary" : ""}`}>
                    <span className="text-[16px]">{option.icon}</span>
                    {option.title}
                  </button>
                ))
              }
            </div>
        </div>
    )
}