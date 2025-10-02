import { StaticImageData } from "next/image";

declare global {
	type LucideIconsType = ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
	>;

	interface UserType {
		id: string;
		name: string;
		email: string;
		image: StaticImageData;
	}

	interface StoreInfoType {
		id: string;
		userId: string;
		name: string;
		description: string;
		username: string;
		address: string;
		status: "approved" | "pending" | "rejected";
		isActive: boolean;
		logo: StaticImageData;
		email: string;
		contact: string;
		createdAt: Date;
		updatedAt: Date;
	}

	interface ProductRatingType {
		id: string;
		rating: number;
		review: string;
		user: UserType;
		productId: string;
		createdAt: Date;
		updatedAt: Date;
		product: Partial<ProductType>;
	}

	interface ProductType {
		id: string;
		name: string;
		description: string;
		mrp: number;
		price: number;
		images: StaticImageData[];
		category: string;
		storeId: string;
		inStock: boolean;
		store: StoreInfoType;
		rating: ProductRatingType[];
		createdAt: Date;
		updatedAt: Date;
	}
}

export {};
