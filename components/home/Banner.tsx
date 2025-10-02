"use client";
import { X } from "lucide-react";
import React from "react";
import { toast } from "sonner";

export default function Banner() {
	const [isOpen, setIsOpen] = React.useState(true);

	const handleClaim = () => {
		setIsOpen(false);
		toast.success("Coupon copied to clipboard!");
		navigator.clipboard.writeText("NEW20");
	};

	return (
		isOpen && (
			<div className="w-full px-6 py-1 font-medium text-sm text-white text-center gradient-banner">
				<div className="flex-container justify-between container">
					<p>Get 20% OFF on Your First Order!</p>
					<div className="flex items-center space-x-6">
						<button
							onClick={handleClaim}
							type="button"
							className="font-mono text-gray-800 bg-white px-4 py-2 rounded-full max-sm:hidden"
						>
							Claim Offer
						</button>
						<button
							onClick={() => setIsOpen(false)}
							type="button"
							className="text-gray-800 rounded-full"
						>
							<X className="w-5 h-5" />
						</button>
					</div>
				</div>
			</div>
		)
	);
}
