import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/NewsLetter";
import OurSpecs from "@/components/home/OurSpecs";
import ProductCatalog from "@/components/home/ProductCatalog";

export default function Home() {
	return (
		<div>
			<Hero />
			<ProductCatalog />
			<OurSpecs />
			<Newsletter />
		</div>
	);
}
