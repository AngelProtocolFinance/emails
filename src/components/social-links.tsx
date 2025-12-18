import { Img, Link, Section } from "@react-email/components";

const SOCIAL_ICON_BASE_URL = "https://better.giving/socials";

const socials = [
	{
		href: "https://www.linkedin.com/company/better-giving/",
		icon: "linkedin.png",
		alt: "LinkedIn",
		width: 23,
	},
	{
		href: "https://www.facebook.com/BetterGivingFB/",
		icon: "facebook.png",
		alt: "Facebook",
		width: 20,
	},
	{
		href: "https://x.com/BetterDotGiving",
		icon: "x.png",
		alt: "X",
		width: 17,
	},
	{
		href: "https://www.youtube.com/@BetterDotGiving",
		icon: "youtube.png",
		alt: "Youtube",
		width: 20,
	},
	{
		href: "https://www.instagram.com/better.giving",
		icon: "instagram.png",
		alt: "Instagram",
		width: 20,
	},
] as const;

export function SocialLinks() {
	return (
		<Section style={{ textAlign: "center", paddingTop: 10 }}>
			{socials.map((social, i) => (
				<Link
					key={social.alt}
					href={social.href}
					style={{
						marginRight: i < socials.length - 1 ? 15 : 0,
						display: "inline-block",
					}}
				>
					<Img
						src={`${SOCIAL_ICON_BASE_URL}/${social.icon}`}
						alt={social.alt}
						width={social.width}
					/>
				</Link>
			))}
		</Section>
	);
}
