import React from "react"
import Image from 'next/image'

import Logo from "../public/images/logo-small.png"

export default function About() {
    return (
        <section className="flex flex-col items-center lg:flex-row p-10 lg:p-20 xl:px-40 items-left gap-6 z-[30]" id="about" style={{backgroundColor: "#1B1464"}}>
            <div
                className="flex flex-col items-center lg:items-start w-4/5 text-center lg:text-left mb-4 lg:mb-0"
            >
                <h1 className="text-white font-bold text-3xl md:text-4xl">Enter STEM with a <span className='text-[#04f4c1]'>bang</span>.</h1>
                <p className="mt-4 w-full md:w-3/4 text-lg text-gray-200">
                    hack::peel is a hackathon curated specifically for students in the Peel Region. As a hacker, you&#39;ll learn, hone, and develop your skills in STEM in a 24 hour blitz of passion, skill, and creativity.
                </p>

                <p className='mt-4 w-full md:w-3/4 text-lg text-gray-200'>
                    With no barrier of entry and no specific theme, this hackathon is for all students! Regardless of your prior experience, this is your chance to build, learn, and show off the creations you&#39;ve always dreamed of, while competing for a chance at the $20,000 prize pool!
                </p>
            </div>

            <div 
                className="flex p-0 m-0 w-1/2 md:w-1/3"
            >
                <div className='flex ring-8 ring-[#04f4c1] rounded-full'>
                    <Image className="rounded-full" src={Logo} alt="Logo" objectFit="cover" objectPosition="center" width={540} height={540} quality={100} placeholder="blur" />
                </div>
            </div>
            
        </section>
    )
}