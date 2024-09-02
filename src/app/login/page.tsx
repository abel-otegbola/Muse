'use client'
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { AuthContext } from "@/context/useAuth";
import { Envelope, LockKey, Spinner } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react"

export default function Loginpage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signIn, loading } = useContext<any>(AuthContext)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        signIn(email, password)
    }

    return (
        <div className="min-h-[500px] flex mt-[3%] gap-12 sm:items-center justify-center">
            <div className="sm:block hidden w-[400px] h-[450px] relative rounded-[20px]">
              <Image src={"/guitarist-bass.jpg"} alt="guitarist" fill sizes={"100%"} className="rounded-[20px] object-cover" />
            </div>

            <div className="sm:w-[476px] w-full p-12">

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                        <h1 className="font-bold text-xl">Welcome</h1>
                        <p className="mt-2 mb-3">Add your details below to get back into the app</p>
                    </div>
                    
                    <Input name="email" label="Email address" type="email" value={email} onChange={setEmail} error={""} placeholder="Enter your email address" leftIcon={<Envelope size={20}/>}/>

                    <Input name="password" label="password" type="password" value={password} onChange={setPassword} error={""} placeholder="Enter your password" leftIcon={<LockKey size={20}/>}/>

                    <Button size="full">{ loading ? <Spinner size={16} className="animate-spin" /> : "Login"}</Button>
                    
                    <p className="text-center">Don&apos;t have an account? <Link href={"/register"} className="text-primary">Create account</Link></p>
                </form>
            </div>
        </div>
    )
}
