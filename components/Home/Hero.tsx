import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import Banner from "../../public/images/banner.jpg"
import DateCounter from "../DateCounter";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const topLineVariants = {
    initial: {
    },
    animate: {
        transition: {
            staggerChildren: 0.05,
        }
    }
};

const bottomLineVariants = {
    initial: {
    },
    animate: {
        transition: {
            delayChildren: 0.7,
            staggerChildren: 0.2,
        }
    }
};

const characterVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.15, ...transition }, }
};

const topLine = "It's a wrap for 2022!".split(' ');
const bottomLine = "hack::peel".split('');

export default function Hero() {
    return (
        <div className="flex flex-col h-screen relative" id="hero">
            <div className='overflow-hidden' style={{ boxShadow: "inset 0 0 200px #000000" }}>
                <Image
                    src={Banner}
                    placeholder="blur"
                    objectFit="cover"
                    objectPosition="center"
                    alt="Banner"
                    layout="fill"
                    quality={100}
                    priority={true}
                />
            </div>

            <div className="absolute p-4 xs:p-8 sm:p-16 z-1 flex flex-col justify-center items-center h-screen w-full">
                <div className="text-center">
                    <div className="mb-4">
                        <motion.div variants={topLineVariants} initial="initial" animate="animate" className="font-medium text-white flex gap-2 text-xl lg:text-4xl justify-center">
                            {topLine.map(char => <motion.span className="inline-block relative" variants={characterVariants} key={char}>{char}</motion.span>)}
                        </motion.div>

                        <motion.div variants={bottomLineVariants} initial="initial" animate="animate" className="font-bold flex gap-2 text-5xl sm:text-7xl lg:text-9xl" style={{marginTop:'25px'}}>
                            <div className='flex'>
                                {bottomLine.slice(0, 4).map(char => <motion.span className="hero-title inline-block relative bg-clip-text text-[#06f5c2]" variants={characterVariants} key={char}>{char}</motion.span>)}
                            </div>

                            <div className='flex'>
                                {bottomLine.slice(4, 5).map(char => <motion.span className="hero-title left-colon inline-block relative bg-clip-text text-[#06f5c2]" variants={characterVariants} key={char}>{char}</motion.span>)}
                            </div>

                            <div className='flex'>
                                {bottomLine.slice(4, 5).map(char => <motion.span className="hero-title right-colon inline-block relative bg-clip-text text-[#06f5c2]" variants={characterVariants} key={char}>{char}</motion.span>)}
                            </div>

                            <div className='flex'>
                                {bottomLine.slice(6).map(char => <motion.span className="hero-title inline-block relative bg-clip-text text-white" variants={characterVariants} key={char}>{char}</motion.span>)}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/*<div className="flex flex-col gap-2 text-white mb- md:w-3/4 lg:w-1/2">*/}
                {/*    <p className="text-2xl font-light text-center">*/}
                {/*        Join us at The Woodlands Secondary School from <b>December 16 to 17, 2022</b>!*/}
                {/*    </p>*/}
                {/*</div>*/}
                
                {/*<DateCounter />*/}

                <a className="py-4 px-6 bg-blue-500 rounded-lg font-semibold text-white hover:bg-blue-700 duration-150 text-lg lg:text-2xl mt-4" href="https://hackpeel22.devpost.com/" rel="noreferrer" target="_blank">
                    View project gallery
                </a>
            </div>
        </div>
    )
}
