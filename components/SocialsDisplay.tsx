import Image from "next/image";

export interface socialsEntry {
	url: string,
	website: string
}

const websiteLookup = {
	GitHub: {
		img: "/socials_logos/github.png",
		col: "#202020"
	},
	Instagram: {
		img: "/socials_logos/instagram.png",
		col: "#c42b5e"
	},
	LinkedIn: {
		img: "/socials_logos/linkedin.png",
		col: "#0077b5"
	},
	Website: {
		img: "/socials_logos/website.png",
		col: "gray"
	}
}

function SocialObject({img, col, href, alt}: {img: string, col: string, href: string, alt: string}) {
	// 3 Properties:
	// img - social image
	// col - bg col code (str)
	// href - link
	const acls = "grow mx-0.5 rounded-md h-full w-full grid place-item-center transition-all social-link";
	const imgcls = "relative m-auto h-8 w-8 border-0";
	const astyle = {
		"backgroundColor": col
	};
	return (
		<a className={acls} href={href} style={astyle} target="_blank" rel="noreferrer">
			<div className={imgcls}>
			{
					img ? <Image src={img} layout="fill" alt={alt}/> : null
				}
			</div>
		</a>
	)
}
export default function SocialsDisplay({socials}: {socials: socialsEntry[]}) {
	return (<>
		<div className="flex h-0 mx-2 my-0 social transition-all overflow-hidden">
			{
				socials.map(obj => (<>
					<SocialObject img={websiteLookup[obj.website] ? websiteLookup[obj.website].img: null} col={websiteLookup[obj.website] ? websiteLookup[obj.website].col : "gray"} href={obj.url} alt={obj.website} />
				</>))
			}
		</div>
	</>)
}