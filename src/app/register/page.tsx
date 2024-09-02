'use client'
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { AuthContext } from "@/context/useAuth";
import { validateForm } from "@/helpers/validateForm";
import { Envelope, LockKey, Spinner } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [errors, setErrors] = useState({ email: "", password: "", cpassword: "" })

    const { signUp, loading } = useContext<any>(AuthContext)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setErrors({ email: "", password: "", cpassword: "" })
       
        const validate = validateForm(email, password, cpassword)

        if(validate === null) {
            signUp(email, password)
        }
        else {
            setErrors(validate)
        }
      
    }

    return (
        <div className="min-h-[500px] flex mt-[3%] gap-12 sm:items-center justify-center">
            
            <div className="sm:block hidden w-[400px] h-[500px] relative rounded-[20px]">
              <Image src={"/guitarist-bass.jpg"} alt="guitarist" fill sizes={"100%"} className="rounded-[20px] object-cover" />
            </div>

            <div className="sm:w-[476px] w-full p-8">
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div>
                        <h1 className="font-bold text-xl">Create account</h1>
                        <p className="mt-2 mb-6">Let&apos;s get you started sharing your links!</p>
                    </div>
                    
                    <Input name="email" label="Email address" value={email} onChange={setEmail} type="email" error={errors.email} placeholder="e.g alex@email.com" leftIcon={<Envelope size={16}/>}/>

                    <Input name="password" label="Create password" value={password} onChange={setPassword} type={"password"} error={errors.password} placeholder="At least 8 characters" leftIcon={<LockKey size={16}/>}/>

                    <Input name="cpassword" label="Confirm password" value={cpassword} onChange={setCpassword} type={"password"} error={errors.cpassword} placeholder="At least 8 characters" leftIcon={<LockKey size={16}/>}/>

                    <p className="text-[12px] opacity-[0.6]">Password must contain at least 8 characters</p>

                    <Button size="full">{ loading ? <Spinner size={16} className="animate-spin" /> : "Create new account" }</Button>

                    <p className="text-center">Already have an account? <Link href={"/"} className="text-primary">Login</Link></p>
                </form>
            </div>
        </div>
    )
}