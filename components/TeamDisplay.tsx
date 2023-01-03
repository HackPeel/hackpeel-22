import SocialObject from "./SocialsDisplay";
import Image from "next/image";

import { useNextSanityImage } from "next-sanity-image";
import { SanityReference } from "@sanity/image-url/lib/types/types";
import client from "../lib/sanity";

export default function TeamDisplay({ fn, ln, title, img, hl, scls }: { fn: string, ln: string, title: string, hl: boolean, scls: any, img: SanityReference, }) {

	const firstn = fn ? fn.toUpperCase() : "";
	const lastn = ln ? ln.toUpperCase() : "";
	var cns = "p-5 overflow-hidden text-left rounded-md team-card transition-all";
	var fns = "mx-2 my-0 py-0 font-bold text-xl";
	var lns = "mx-2 mb-0 py-0 font-bold";
	var ts = "ml-2 w-44 whitespace-normal h-20 transition-all overflow-hidden text-white"
	if (scls) ts += " desc"
	if (hl) {
		cns += " bg-[#283678]";
		fns += " text-white";
		lns += " text-[#33ffc5]"

	} else {
		cns += " bg-slate-600"
		fns += " text-sky-300"
		lns += " text-slate-200"
	}

	// Prepare next.js image from sanity CMS
	const imageProps = useNextSanityImage(
		client,
		img
	);

	return (<>
		<div className={cns}>
			<div className="relative w-48 h-48 rounded-md mb-2">
				<Image
					{...imageProps}
					width={500}
					height={500}
					objectFit="cover"
					objectPosition="center"
					className="duration-300 transition-all"
					alt={fn + " " + ln}
				/>
			</div>
			<div className={fns} >{firstn}</div>
			<div className={lns}>{lastn}</div>
			<div className={ts} >{title}</div>
			{
				scls ? <SocialObject socials={scls}/> : (<></>)
			}
		</div>
	</>)
}