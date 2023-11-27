import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

const myaccount = () => {
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            // router.push('/')
            // harry has used this 
        }
    }, [router.query])
    return (
        <div>
            <h1 className='text-center font-semibold text-2xl md:text-4xl p-6 text-purple-700'>Hi this is My account </h1>
        </div>
    )
}

export default myaccount
