import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-serif",
});

const jetBrainsMono = JetBrains_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Shop-Nexus",
	description: "A One-stop Shop for all your needs.",
};

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${outfit.variable} ${inter.variable} ${jetBrainsMono.variable}  antialiased`}
			>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
