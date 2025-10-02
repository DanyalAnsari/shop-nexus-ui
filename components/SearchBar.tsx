"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
const SearchBar = () => {
	const router = useRouter();
	const [search, setSearch] = React.useState("");
	// const cartCount = useSelector((state) => state.cart.total);

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		router.push(`/shop?search=${search}`);
	};
	return (
		<form
			onSubmit={handleSearch}
			className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 px-4 py-3 rounded-full"
		>
			<Search size={18} className="text-primary-foreground/80" />
			<input
				className="w-full bg-transparent outline-none placeholder-slate-600"
				type="text"
				placeholder="Search products"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				required
			/>
		</form>
	);
};

export default SearchBar;
