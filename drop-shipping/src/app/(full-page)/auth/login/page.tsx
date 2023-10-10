/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import {  signIn } from 'next-auth/react';
import Link from 'next/link';
import { useSession } from "next-auth/react"

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });
    const { data: session, status } = useSession()


    return (
        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center w-full md:w-8 lg:w-5">
                <div style={{ borderRadius: '36px', padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                    <div className="w-full surface-card py-5 px-5 sm:px-8" style={{ borderRadius: '33px' }}>
                        <div className="text-center mb-5">
                            <div className="text-900 text-3xl font-medium mb-3">Sign In</div>
                            <span className="text-600 font-medium">Sign in to your account</span>
                        </div>

                        <div>
                            <InputText id="email1" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="w-full mb-5" style={{ padding: '1rem' }} />
                            <Password id="password1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" toggleMask className="w-full mb-5" inputClassName="w-full p-3"></Password>

                            <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                <Button
                                    label="Login"
                                    className="p-3 text-xl w-5"
                                    onClick={async (event) => {
                                        event.preventDefault();
                                        const credentials = {
                                            email: email,
                                            password: password
                                        };
                                        //callbackUrl:"/",
                                        const response  = await signIn('credentials', { ...credentials, redirect: false });
                                        // const session = await getServerSession();
                                        if(session?.user?.email){
                                            router.push('/dashboard');
                                        }
                                        //  console.log(response);
                                    }}
                                ></Button>
                                <Link className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }} href={'/'}>
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="font-medium text-center">
                                Don&apos;t Have An Account Yet?
                                <Link href={'/auth/signup'}>
                                    <span className="no-underline ml-2 text-center cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                        Sign Up
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
