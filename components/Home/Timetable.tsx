import React, { CSSProperties } from 'react'


const linkstyle: CSSProperties = {
    color: "turquoise",
    fontWeight: "bold"
} as CSSProperties;

export interface Event {
    name: string,
    time: string
}

export interface Day {
    day_text: string,
    events: Event[]
}

const timetable: Day[] = [
    {
        day_text: "Friday — Dec. 16",
        events: [
            {
                name: "Opening ceremony",
                time: "5:00 PM"
            },
            {
                name: "Hacking begins",
                time: "5:45 PM"
            },
            {
                name: "Dinner served",
                time: "6:00 PM"
            },
            {
                name: "Programming Contest",
                time: "6:15 PM"
            },
            {
                name: "End of day 1 (participants go home)",
                time: "8:00 PM"
            },

        ]
    },
    {
        day_text: "Saturday — Dec. 17",
        events: [
            {
                name: "Start of Day 2",
                time: "8:00 AM"
            },
            {
                name: "Breakfast served",
                time: "9:00 AM"
            },
            {
                name: "Among Us IRL activity",
                time: "10:00 AM"
            },
            {
                name: "Line tracing robot competition",
                time: "11:00 AM"
            },
            {
                name: "Lunch served",
                time: "12:00 PM"
            },
            {
                name: "Presentations start",
                time: "3:45 PM"
            },
            {
                name: "Closing ceremony",
                time: "5:00 PM"
            },
            {
                name: "End of Day 2",
                time: "6:00 PM"
            }
        ]
    },
];

function DayCol(dayData: Day){
    const day_text: string = dayData.day_text;
    const events: Event[] = dayData.events;

    return (<>
        <div className="timetable-container">
            <table className="timetable">
                <thead>
                <tr>
                    <th colSpan={2} >{day_text}</th>

                </tr>
                </thead>

                <tbody>

                {events.map(
                    event_entry => (
                        <tr key={event_entry.name}>
                            <td>{event_entry.time}</td>
                            <td >{event_entry.name}</td>
                        </tr>
                    )
                )}

                </tbody>
            </table>
        </div>
    </>)

}

export default function FAQ({ faq: faqRaw }) {
    // Reformat to work with Accordion
    // const faq: FrequentlyAskedQuestion[] = faqRaw.map(({ question, answer }) => ({ title: question, content: answer }))

    return (<>
        <section id="agenda" className="flex flex-col p-10 items-center md:p-20 md:py-16 lg:px-32 items-left" style={{backgroundColor: "#1b1464"}}>
            <div className="flex flex-col text-center mb-8">
                <h1 className="text-4xl text-white font-bold">Tentative Event Agenda</h1>
            </div>

            <div className="row centered" style={{justifyContent: "center", display: "flex", width: "100%", marginRight: "auto", flexWrap: "wrap", marginLeft: "auto"}}>
                {timetable.map(day_entry => (<DayCol key={day_entry.day_text} day_text={day_entry.day_text} events={day_entry.events} />))}
            </div>
        </section>
    </>)
}
