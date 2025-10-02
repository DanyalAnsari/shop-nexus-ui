import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/lib/features/cart/cart.slice";
import productReducer from "@/lib/features/product/product.slice";
import ratingReducer from "@/lib/features/rating/rating.slice";
import addressReducer from "@/lib/features/address/address.slice";

export const makeStore = () =>
	configureStore({
		reducer: {
			cart: cartReducer,
			product: productReducer,
			rating: ratingReducer,
			address: addressReducer,
		},
	});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
