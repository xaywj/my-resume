import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='bg-white/50 backdop-blur-sm p-5 text-white'>
            <div className="text-2xl font-bold">Education</div>
            <div>
                <Image className='w-full' src="/images/certificate.webp" alt='education' width={1000} height={1000} />
            </div>
        </div>
    )
}
