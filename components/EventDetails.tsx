// @ts-ignore
import { IconType } from "react-icons";
import { HiCalendar, HiLocationMarker, } from "react-icons/hi"
import { MdMoneyOff, MdBackpack, MdPerson, MdFastfood } from "react-icons/md"

export interface DetailCardData {
    title: string,
    icon: JSX.Element,
    content: string
}

const cardData: DetailCardData[] = [
    {
        title: "When",
        icon: <HiCalendar className='text-blue-500' />,
        content: "Friday December 16 6:00PM-10PM\nSaturday December 17 8:00AM-7:00PM"
    },
    {
        title: "Where",
        icon: <HiLocationMarker className='text-blue-500' />,
        content: "The Woodlands Secondary School, located at 3225 Erindale Station Road, Mississauga, Ontario."
    },
    {
        title: "What to bring",
        icon: <MdBackpack className='text-blue-500' />,
        content: "Any tools you'll need for your project, and an open mind!"
    },
    {
        title: "Experience required",
        icon: <MdPerson className='text-blue-500' />,
        content: "None! No tech experience is required to attend hack::peel"
    },
    {
        title: "Cost",
        icon: <MdMoneyOff className='text-blue-500' />,
        content: "hack::peel is free for all attendees!"
    },
    {
        title: "Food",
        icon: <MdFastfood className='text-blue-500' />,
        content: "All meals are provided for free!"
    },
];

/*
function DetailCard(data: DetailCardData) {
    return(<>
        <div className="bg-white rounded-md p-4 text-center w-80" style={{margin:"10px", minHeight:"170px"}}>
            <span className="font-bold text-4xl">{data.title}</span> <br/>
            <span className="font-bold text-md text-gray-300">{data.subtitle}</span>
            <p>{data.content}</p>
        </div>
    </>)
}
*/

function DetailCard(data: DetailCardData) {
    return (
        <div className="flex flex-col p-4 gap-4 items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center justify-center text-2xl text-white bg-blue-50 w-12 h-12 rounded-lg">
                {data.icon}
            </div>

            <h1 className="text-3xl text-white font-bold">{data.title}</h1>
            <p className="text-lg text-gray-300 whitespace-pre-line">
                {data.content}
            </p>
        </div>
    )
}

export default function EventDetails() {
    return (<>
        <section className="flex flex-col items-center p-10 lg:p-20 xl:px-40 z-[30] text-center" id="about" style={{ backgroundColor: "#232f69", width: "100%", paddingLeft: "15px", paddingRight: "15px" }}>
            <div className="flex flex-col text-center mb-8">
                <h1 className="text-4xl text-white font-bold">Event Overview</h1>
            </div>

            <div className="row centered justify-center items-center flex w-full mx-auto flex-wrap">
                <div className="event-details-map-container" style={{ alignSelf: "center" }}>
                    <div className="column">
                        <div className="venue-map border-black-fade"
                            style={{ borderColor: "#101A38", borderWidth: "5px", borderStyle: "solid" }}>
                            <iframe
                                src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyDBAITNT-GVJnc7JzdT4__nF2eREVLxL6o&q=The+Woodlands+Secondary+School"}
                                frameBorder="0" style={{ border: "0", marginBottom: "-5px" }} allowFullScreen />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 flex-wrap justify-between lg:w-1/2 h-full gap-4">

                    {cardData.map(card_entry => (<DetailCard key={card_entry.title} {...card_entry} />))}

                </div>



            </div>
        </section>
    </>)
}