import Image from 'next/image'
import React from 'react'
import { FaLinkedinIn, FaPhoneVolume } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { SiFacebook } from 'react-icons/si'

export default function MyProfile() {
    return (
        <div className='bg-white/50 min-h-screen p-5 text-white'>
            <div>
                <Image className='border-3 border-white rounded-full mx-auto'
                    src="/images/anima2.webp" alt='profile' width={100} height={100} />
            </div>
            <div className='mt-5'>
                <div className="text-2xl text-center font-bold">
                    Mr Xa YAJ
                </div>

                <div className="text-xl text-center">
                    Frontend Developer
                </div>

                <div className='mt-5 border-t-2 border-white p-5'>
                    <div className="text-xl text-center">Contact</div>

                    <div className="flex justify-around gap-5 mt-5">
                        <FaPhoneVolume size={40} className='hover:text-sky-500 duration-500' />
                        <SiFacebook size={40} className='hover:text-sky-500 duration-500' />
                        <IoLogoWhatsapp size={40} className='hover:text-sky-500 duration-500' />
                        <FaLinkedinIn size={40} className='hover:text-sky-500 duration-500' />
                    </div>
                </div>

                <div className='mt-5 border-t-2 border-white p-5'>
                    <div className="text-xl text-center">Address</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam delectus molestiae fuga maiores sit voluptate cupiditate id assumenda laudantium ipsa commodi eveniet porro dolorum nobis cum earum, illum ullam itaque.</p>
                </div>
            </div>
        </div>
    )
}
