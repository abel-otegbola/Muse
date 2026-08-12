'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/context/useAuth";
import { loginSchema } from "@/schema/auth";
import { Envelope, LockKey, Spinner } from "@phosphor-icons/react";
import { Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react"

export default function Loginpage() {
    const { signIn, loading } = useContext<any>(AuthContext)

    
    return (
        <div className="min-h-[500px] flex mt-[3%] gap-12 sm:items-center justify-center">
            <div className="sm:block hidden w-[400px] h-[450px] relative rounded-[20px]">
              <Image src={"/guitarist-bass.jpg"} alt="guitarist" fill sizes={"100%"} className="rounded-[20px] object-cover" />
            </div>

            <div className="sm:w-[476px] w-full p-12">
                <Formik
                    initialValues={{ email: '', password: ''}}
                    validationSchema={loginSchema}
                    onSubmit={( values, { setSubmitting }) => {
                        signIn(values.email, values.password);
                        setSubmitting(false);
                    }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                      }) => (

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div>
                                <h1 className="font-bold text-xl">Welcome</h1>
                                <p className="mt-2 mb-3">Add your details below to get back into the app</p>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium">Email address</label>
                                <div className="relative">
                                    <Envelope size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                    <Input id="email" name="email" value={values.email} onChange={handleChange} type="email" placeholder="e.g alex@email.com" className="pl-10" />
                                </div>
                                {touched.email && errors.email ? <p className="text-xs text-red">{errors.email}</p> : null}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="text-sm font-medium">Password</label>
                                <div className="relative">
                                    <LockKey size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                    <Input id="password" name="password" value={values.password} onChange={handleChange} type="password" placeholder="At least 8 characters" className="pl-10" />
                                </div>
                                {touched.password && errors.password ? <p className="text-xs text-red">{errors.password}</p> : null}
                            </div>

                            <Button type="submit" className="w-full">{ isSubmitting || loading ? <Spinner size={16} className="animate-spin" /> : "Login"}</Button>
                            
                            <p className="text-center">Don&apos;t have an account? <Link href={"/register"} className="text-primary">Create account</Link></p>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
