import TeamDisplay from "./TeamDisplay";
import { socialsEntry } from "./SocialsDisplay"

const styleTrapezoid: React.CSSProperties = {
	"clipPath": "polygon(21% 0, 79% 0, 100% 100%, 0 100%)"
};

// Structure:
/*
 entry - {
	first: first name (string),
	last: last name (string),
	img: profile photo (image object {} or object with "src" property),
	title: title (string),
	highlight: whether or not to apply executive colour schemes to this person (bool),
	socials: [
		entry - {
			img: social icon (image object or {} or object with "src" property),
			col: background color (string or hex),
			href: social link (string)
		}
	]

 }
*/

interface staffEntry {
	first: string,
	last: string,
	img?: string,
	title: string,
	highlight?: boolean,
	socials?: socialsEntry[]
}

const staff: staffEntry[] = [
	{
		first: "Pranav",
		last: "Tripathi",
		title: "Co-president and Head of Finance",
		highlight: true
	},
	{
		first: "Aayush",
		last: "Panda",
		title: "Co-president and Head of Technology",
		highlight: true
	},
	{
		first: "Vishnu",
		last: "Satish",
		title: "Co-president and Head of Sponsorships and Outreach",
		highlight: true
	},

	{
		first: "Catherine",
		last: "Zhang",
		title: "Head of Marketing and Design",
		highlight: true
	},
	{
		first: "Marcus",
		last: "Chong",
		title: "Head of Logistics",
		highlight: true
	},
	{
		first: "Nathan",
		last: "Chung",
		title: "Tech Lead",
		highlight: true
	},
	{
		first: "Ike",
		last: "Yang",
		title: "Frontend Developer and Designer",
	},
	{
		first: "Aritro",
		last: "Saha",
		title: "Backend/Frontend Developer"
	},
	{
		first: "Yibo",
		last: "Sun",
		title: "Marketing Designer"
	}
	,
	{
		first: "E.J.",
		last: "Ramas",
		title: "Logistics Staff"
	},
	{
		first: "Grant",
		last: "Ren",
		title: "Logistics Staff"
	},
	{
		first: "Khalil",
		last: "Ramzi",
		title: "Logistics Staff"
	},
	{
		first: "Ashley",
		last: "",
		title: "Logistics Staff"
	},
	{
		first: "Aarav",
		last: "Modi",
		title: "Sponsorships and Outreach Staff"
	},
	{
		first: "Chinmayi",
		last: "Gannamaraju",
		title: "Sponsorships and Outreach Staff"
	},
	{
		first: "Jacob",
		last: "Park",
		title: "Sponsorships and Outreach Staff"
	},
	{
		first: "Rohith",
		last: "Rajmohan",
		title: "Marketing and Design Staff"
	}
]

function SectionDisp({ arr }: { arr: staffEntry[] }) {
	return <></>;
}

export default function TeamSection({ team }) {
	const flexcls: string = "flex flex-wrap gap-8 justify-around w-full";
	return (<>
		<section id="team" className="text-center m-0" style={{backgroundColor: "#232f69"}}>
			<div className="p-10 lg:p-16 lg:py-10" style={{backgroundColor: "#232f69"}}>
				<h1 className="text-4xl lg:text-5xl font-bold mb-6 w-auto text-white"> Meet the Team </h1>
				<div className={flexcls}>
					{team.map(
						member => (
							<TeamDisplay
								fn={member.firstName}
								ln={member.lastName}
								img={member.image}
								title={member.position}
								hl={member.highlighted}
								scls={member.links}
								key={member.firstName}
							/>
						)
					)}
				</div>
				<br />
				
			</div>
			<div className="w-1/2 p-2  text-xl font-bold m-auto" style={{backgroundColor: "#101E47", clipPath:"polygon(21% 0, 79% 0, 100% 100%, 0 100%)", marginBottom: '-1px'}}>‎</div>
		</section>
	</>)
}