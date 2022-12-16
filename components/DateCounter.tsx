import { useState } from "react";
import { useInterval } from "../util/chooks.js";
import SpinDial from "./SpinDial"
// import Logo from "../public/images/logo.png";



const evtStart: number = Date.parse("2022-12-16T16:30:00.0000");
const evtEnd: number = Date.parse("2022-12-17T15:00:00.0000");
export default function DateCounter() {
    const [remaining, setRemaining] = useState(0);
    useInterval(() => setRemaining(Math.max(evtEnd - Date.now(), 0)), 100);
    const days = Math.floor(remaining / 86400000)
    const hours = Math.floor(remaining / 3600000) % 24
    const minutes = Math.floor(remaining / 60000) % 60
    const seconds = Math.floor(remaining / 1000) % 60

    return (
        <div className="p-4 text-center">
            <span className="text-xl text-white font-bold">Submissions close in...</span>
            <div className="flex justify-center p-2 mx-10" style={{display:'flex', flexWrap:'wrap'}}>
                <SpinDial num={days} digits={2} descriptor="Days" />
                <SpinDial num={hours} digits={2} descriptor="Hours" />
                <SpinDial num={minutes} digits={2} descriptor="Minutes" />
                <SpinDial num={seconds} digits={2} descriptor="Seconds" />
            </div>
        </div>
    )
}