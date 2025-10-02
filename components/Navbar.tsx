'use client'
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useAppSelector } from "@/lib/hooks/hooks";

const Navbar = () => {
	const cartCount = useAppSelector((state) => state.cart.total);
	return (
		<nav className="relative">
			<div className="mx-6">
				<div className="flex-container container justify-between py-4  transition-all">
					{/* Logo */}
					<Link
						href="/"
						className="relative font-serif text-4xl font-semibold text-primary-foreground/90"
					>
						<span className="text-green-600">Shop</span>Nexus
						<span className="text-green-600 text-5xl leading-0">.</span>
						<p className="absolute text-xs font-semibold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-foreground bg-green-500">
							plus
						</p>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden sm:flex items-center gap-4 lg:gap-8 text-primary-foreground/80">
						<Link href="/">Home</Link>
						<Link href="/shop">Shop</Link>
						<Link href="/">About</Link>
						<Link href="/">Contact</Link>

						{/* Search Bar */}
						<SearchBar />

						<Link
							href="/cart"
							className="relative flex items-center gap-2 text-slate-600"
						>
							<ShoppingCart size={18} />
							Cart
							<button className="absolute -top-1 left-3 text-[8px] text-white bg-slate-600 size-3.5 rounded-full">
								{cartCount}
							</button>
						</Link>

						<button className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
							Login
						</button>
					</div>

					{/* Mobile User Button  */}
					<div className="sm:hidden">
						<button className="px-7 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-sm transition text-white rounded-full">
							Login
						</button>
					</div>
				</div>
			</div>
			<hr className="bg-accent" />
		</nav>
	);
};

export default Navbar;
