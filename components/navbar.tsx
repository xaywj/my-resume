import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='bg-white p-5'>
            <div className="flex justify-around gap-3 items-center">
                <Link href="/" className='hover:text-sky-500 duration-300'>Experience</Link>
                <Link href="/skill" className='hover:text-sky-500 duration-300'>Skill</Link>
                <Link href="/education" className='hover:text-sky-500 duration-300'>Education</Link>
                <Link href="/portfolio" className='hover:text-sky-500 duration-300'>Portfolio</Link>
                <Link href="/contact" className='hover:text-sky-500 duration-300'>Contact</Link>
            </div>
        </div>
    )
}
