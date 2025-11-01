import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='bg-white/80 backdop-blur-sm p-5'>
            <div className="text-2xl font-bold">Education</div>
            <div className='mt-5 px-10'>
                <Image className='w-full' src="/images/certificate.webp" alt='education' width={1000} height={1000} />
            </div>
        </div>
    )
}
