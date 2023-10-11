/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react"
import { callback } from 'chart.js/helpers';
import { useSession } from "next-auth/react"


const SignOut = () => {
    const router = useRouter();
    const { data: session, status } = useSession()
    if(session?.user?.email){
        signOut({callbackUrl:'/auth/login'});
    }
    return;
};

export default SignOut;
