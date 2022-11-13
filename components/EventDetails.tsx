import React from "react"
import Image from 'next/image'

export default function EventDetails() {
    return (
        <section className="flex flex-col p-4 lg:p-10 xl:px-40 items-center gap-6 z-[30]" id="event" style={{backgroundColor: "#1B1464"}}>
            <div className="text-3xl font-bold text-white"> Here&apos;s what you need to know: </div>
            <div className="flex flex-wrap justify-around p-4 lg:p-10 gap-6 text-lg text-black">
                <div className="bg-white rounded-md p-4 text-center w-80">
                    <span className="font-bold text-4xl"> WHEN </span> <br/>
                    <span className="font-bold text-md text-gray-300"> it&apos;s happening </span>
                    <p>
                        December 16th to December 17th, 2022
                    </p>
                </div>
                <div className="bg-white rounded-md p-4 text-center w-80">
                    <span className="font-bold text-4xl"> WHERE </span> <br/>
                    <span className="font-bold text-md text-gray-300"> it&apos;s happening </span>
                    <p>
                        The Woodlands Secondary School, located at <span className="font-bold">3225 Erindale Station Road, Mississauga, Ontario.</span>
                    </p>
                </div>
                <div className="bg-white rounded-md p-4 text-center w-80">
                    <span className="font-bold text-4xl"> WHAT </span> <br/>
                    <span className="font-bold text-md text-gray-300"> to bring </span>
                    <p>
                        Any tools you&apos;ll need for your project, and an open mind!
                    </p>
                </div>
            </div>
        </section>
    )
}