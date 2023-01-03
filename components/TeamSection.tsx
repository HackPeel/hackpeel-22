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
								key={member.firstName + member.lastName}
							/>
						)
					)}
				</div>
				<br />
				
			</div>
		</section>
	</>)
}