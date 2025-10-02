"use client";
import StoreProvider from "@/app/StoreProvider";
import React from "react";
import LatestProducts from "../product/LatestProducts";
import BestSelling from "../product/BestsellerProducts";

const ProductCatalog = () => {
	return (
		<section>
			<StoreProvider>
				<LatestProducts />
				<BestSelling />
			</StoreProvider>
		</section>
	);
};

export default ProductCatalog;
