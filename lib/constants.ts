import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	MailIcon,
	MapPinIcon,
	PhoneIcon,
	TwitterIcon,
} from "lucide-react";

export const FOOTER_LINKS = [
	{
		title: "PRODUCTS",
		links: [
			{ text: "Earphones", path: "/", icon: null },
			{ text: "Headphones", path: "/", icon: null },
			{ text: "Smartphones", path: "/", icon: null },
			{ text: "Laptops", path: "/", icon: null },
		],
	},
	{
		title: "WEBSITE?",
		links: [
			{ text: "Home", path: "/", icon: null },
			{ text: "Privacy Policy", path: "/", icon: null },
			{ text: "Become Plus Member", path: "/pricing", icon: null },
			{ text: "Create Your Store", path: "/create-store", icon: null },
		],
	},
	{
		title: "CONTACT",
		links: [
			{ text: "+1-212-456-7890", path: "/", icon: MailIcon },
			{ text: "contact@example.com", path: "/", icon: PhoneIcon },
			{ text: "794 Francisco, 94102", path: "/", icon: MapPinIcon },
		],
	},
];

export const FOOTER_SOCIAL_ICONS = [
	{ icon: FacebookIcon, link: "https://www.facebook.com" },
	{ icon: InstagramIcon, link: "https://www.instagram.com" },
	{ icon: TwitterIcon, link: "https://twitter.com" },
	{ icon: LinkedinIcon, link: "https://www.linkedin.com" },
];
