import StoreProvider from "@/app/StoreProvider";
import React from "react";
import Banner from "./home/Banner";
import Navbar from "./Navbar";

export default function Header() {
	return (
		<StoreProvider>
			<header>
				<Banner />
				<Navbar />
			</header>
		</StoreProvider>
	);
}
