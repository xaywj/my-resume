import React from 'react'

export default function page() {
    return (
        <div className='bg-white/50 backdrop-blur-sm p-5 text-white'>
            <div className="text-2xl font-bold">Skill</div>

            <div className="text-xl mt-5 grid gap-5">

                <div className="gap-5">
                    <div className="text font-bold">HTML</div>
                    <div className="w-full bg-gray-200 rounded-full text-sm">
                        <div className="bg-blue-600 rounded-full transition-all duration-700 text-center" style={{ width: '70%' }}>70%</div>
                    </div>
                </div>
                <div className="gap-5">
                    <div className="text font-bold">PHP Laravel</div>
                    <div className="w-full bg-gray-200 rounded-full text-sm">
                        <div className="bg-blue-600 rounded-full transition-all duration-700 text-center" style={{ width: '90%' }}>90%</div>
                    </div>
                </div>
                <div className="gap-5">
                    <div className="text font-bold">React & Next.js</div>
                    <div className="w-full bg-gray-200 rounded-full text-sm">
                        <div className="bg-blue-600 rounded-full transition-all duration-700 text-center" style={{ width: '85%' }}>85%</div>
                    </div>
                </div>
                <div className="gap-5">
                    <div className="text font-bold">Java Spring Boot</div>
                    <div className="w-full bg-gray-200 rounded-full text-sm">
                        <div className="bg-blue-600 rounded-full transition-all duration-700 text-center" style={{ width: '65%' }}>65%</div>
                    </div>
                </div>
                <div className="gap-5">
                    <div className="text font-bold">Vue & Nuxt.js</div>
                    <div className="w-full bg-gray-200 rounded-full text-sm">
                        <div className="bg-blue-600 rounded-full transition-all duration-700 text-center" style={{ width: '80%' }}>80%</div>
                    </div>
                </div>
                <div className="gap-5">
                    <div className="text font-bold">Golang</div>
                    <div className="w-full bg-gray-200 rounded-full text-sm">
                        <div className="bg-blue-600 rounded-full transition-all duration-700 text-center" style={{ width: '90%' }}>90%</div>
                    </div>
                </div>


            </div>

        </div>
    )
}
