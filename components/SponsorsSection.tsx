import Image from "next/future/image"



// Sponsor object
// name: sponsor name (string) [used for alternate text]
// img: logo path
// col: hover color (string)
// href: sponsor link (if available)
interface sponsorEntry {
	name: string,
	img: any,
	col: string,
	href: string
}
const sponsors: sponsorEntry[] = [
	{
		name: "CGI",
		img: "/sponsor_logos/cgi.png",
		col: "red",
		href: "https://cgi.com/"
	},
	{
		name: "Wolfram",
		img: "/sponsor_logos/wolfram.png",
		col: "#e35c22",
		href: "https://www.wolfram.com/"
	},
	{
		name: "Desmos",
		img: "/sponsor_logos/desmos.png",
		col: "lime",
		href: "https://www.desmos.com/"
	},
	{
		name: "StickerGiant",
		img: "/sponsor_logos/stickergiant.png",
		col: "orange",
		href: "https://www.stickergiant.com/"
	},
	{
		name: "taskade",
		img: "/sponsor_logos/taskade.png",
		col: "white",
		href: "https://www.taskade.com/"
	},
	{
		name: "axure",
		img: "/sponsor_logos/axure.png",
		col: "lightgray",
		href: "https://www.axure.com/"
	},
	{
		name: "sashido",
		img: "/sponsor_logos/sashido.png",
		col: "cyan",
		href: "https://www.sashido.io/"
	},
	{
		name: "InterviewCake",
		img: "/sponsor_logos/interviewcake.png",
		col: "cyan",
		href: "https://www.interviewcake.com/"
	},
	{
		name: "echo3d",
		img: "/sponsor_logos/echo3d.png",
		col: "lightblue",
		href: "https://www.echo3d.com/"
	},

];

function Sponsor({entry}: {entry: sponsorEntry}) {
	const name: string = entry.name;
	const img: any = entry.img;
	const col: string = entry.col;
	const href: string = entry.href;

	const styling: React.CSSProperties = {
		"--sponsor-col": col
	} as React.CSSProperties;
	return (<>
		<a className="block w-72 h-36 m-5" href={href} rel="noreferrer" target="_blank">
			<div className="block w-full h-full m-auto p-4 l-0 r-0 object-contain relative" style={styling}>
			{
				img ? <Image src={img} fill={true} alt={name} className="sponsor transition-all" style={{overflowX: "visible", objectFit: "contain"}}/> : null
			}
			</div>
		</a>
	</>)
}

export default function SponsorsSection() {
	const flexcls = "flex flex-wrap mx-16 pt-10 justify-around w-auto";
	return (<>
		<section id="sponsors" className="text-center w-auto p-10" style={{backgroundColor: "#232f69", paddingBottom: 0}}>
			<h1 className="text-4xl text-white font-bold m-5 w-auto">Sponsors</h1>
			<div className={flexcls}>
				{sponsors.map(spnsr => (<Sponsor key={spnsr.name} entry={spnsr} />))}
			</div>
			<a className="m-auto l-0 r-0" href="/hackpeel_sponsor_package.pdf" target="_blank">
				<button className="transition-all p-4 rounded-xl bg-blue-700 text-white text-lg hover:text-blue-700 active:bg-blue-500 active:text-white hover:bg-white" style={{marginBottom: '80px'}}>Become a Sponsor</button>
			</a>
			<div className="w-1/2 p-2  text-xl font-bold m-auto" style={{backgroundColor: "#101E47", clipPath:"polygon(21% 0, 79% 0, 100% 100%, 0 100%)", marginBottom: '-1px'}}>‎</div>
		</section>
	</>)
}