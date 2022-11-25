// @ts-ignore
import React from "react";

export interface DetailCardData {
    title: string,
    subtitle: string,
    content: string
}

const cardData: DetailCardData[] = [
    {
        title: "WHEN",
        subtitle: "it's happening",
        content: "Friday December 16 6:00PM-10PM \n Saturday December 17 8:00AM-8:00PM"
    },
    {
        title: "WHERE",
        subtitle: "it's happening",
        content: "The Woodlands Secondary School, located at 3225 Erindale Station Road, Mississauga, Ontario."
    },
    {
        title: "WHAT",
        subtitle: "to bring",
        content: "Any tools you'll need for your project, and an open mind!"
    },
    {
        title: "EXPERIENCE",
        subtitle: "required",
        content: "None! No tech experience is required to attend hack::peel"
    },
    {
        title: "COST",
        subtitle: "of attending",
        content: "hack::peel is free for all attendees."
    },
    {
        title: "FOOD",
        subtitle: "at the event",
        content: "All meals are provided for free"
    },
];

function DetailCard(data: DetailCardData) {
    return(<>
        <div className="bg-white rounded-md p-4 text-center w-80" style={{margin:"10px", minHeight:"170px"}}>
            <span className="font-bold text-4xl">{data.title}</span> <br/>
            <span className="font-bold text-md text-gray-300">{data.subtitle}</span>
            <p>{data.content}</p>
        </div>
    </>)
}

export default function EventDetails() {
    return (<>
        <section className="flex flex-col items-center p-10 lg:p-20 xl:px-40 z-[30] text-center" id="about" style={{backgroundColor: "#1B1464", width:"100%", paddingLeft:"15px", paddingRight:"15px"}}>
            <div className="flex flex-col text-center mb-8">
                <h1 className="text-4xl text-white font-bold">Event Overview</h1>
            </div>

            <div className="row centered" style={{justifyContent: "center", display: "flex", width: "100%", marginRight: "auto", flexWrap: "wrap", marginLeft: "auto"}}>
                <div className="event-details-map-container" style={{alignSelf:"center"}}>
                    <div className="column">
                        <div className="venue-map border-black-fade"
                             style={{borderColor: "#101A38", borderWidth: "5px", borderStyle: "solid"}}>
                            <iframe
                                src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyDBAITNT-GVJnc7JzdT4__nF2eREVLxL6o&q=The+Woodlands+Secondary+School"}
                                frameBorder="0" style={{border: "0", marginBottom: "-5px"}} allowFullScreen/>
                        </div>
                    </div>
                </div>

                <div className="column event-details-card-container" style={{alignSelf:"center", height: "100%", justifyContent: "center", display: "flex", flexWrap: "wrap"}}>

                    {cardData.map(card_entry => (<DetailCard key={card_entry.title} title={card_entry.title} subtitle={card_entry.subtitle} content={card_entry.content}/>))}

                </div>



            </div>
        </section>
    </>)
}