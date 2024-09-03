"use client"
import { AuthContext } from "@/context/useAuth"
import { useContext } from "react"

export default function Dashboard() {
    const { user } = useContext(AuthContext)

    return (
        <div className="md:p-4 md:bg-gray/[0.2] dark:md:bg-dark w-full h-full">
            <div className="flex p-4 border border-gray/[0.6] dark:border-gray/[0.08] rounded bg-white dark:bg-dark dark:text-gray">
                <h2 className="capitalize"><span className="font-semibold text-lg">Welcome, </span>{user?.displayName || user?.email.split("@")[0]}</h2>
            </div>
        </div>
    )
}