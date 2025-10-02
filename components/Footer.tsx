import { FOOTER_LINKS, FOOTER_SOCIAL_ICONS } from "@/lib/constants";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="mx-6">
			<div className="container">
				<div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-primary-foreground/60 text-primary-foreground/70">
					<div>
						<Link href="/" className="text-4xl font-semibold">
							<span className="text-green-600">go</span>cart
							<span className="text-green-600 text-5xl leading-0">.</span>
						</Link>
						<p className="max-w-[410px] mt-6 text-sm">
							Welcome to ShopNexus, your ultimate destination for the latest and
							smartest gadgets. From smartphones and smartwatches to essential
							accessories, we bring you the best in innovation — all in one
							place.
						</p>
						<div className="flex items-center gap-3 mt-5">
							{FOOTER_SOCIAL_ICONS.map((item, i) => (
								<Link
									href={item.link}
									key={i}
									className="flex items-center justify-center w-10 h-10 bg-slate-100 hover:scale-105 hover:border border-slate-300 transition rounded-full"
								>
									<item.icon />
								</Link>
							))}
						</div>
					</div>
					<div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5 text-sm ">
						{FOOTER_LINKS.map((section, index) => (
							<div key={index}>
								<h3 className="font-medium text-slate-700 md:mb-5 mb-3">
									{section.title}
								</h3>
								<ul className="space-y-2.5">
									{section.links.map((link, i) => (
										<li key={i} className="flex items-center gap-2">
											{link.icon && <link.icon />}
											<Link
												href={link.path}
												className="hover:underline transition"
											>
												{link.text}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<p className="py-4 text-sm text-primary-foreground/60">
					Copyright 2025 © ShopNexus All Right Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
