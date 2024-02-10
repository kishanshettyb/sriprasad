import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
import SlickSlides from "../components/SlickSlides";
import Slider from "../components/Slider";
import Workshop from "../sections/Workshop";

const IndexPage = () => {
	return (
		<Layout>
			<Hero />
			<Workshop />
		</Layout>
	);
};

export default IndexPage;

export const Head = () => (
	<Seo
		title="Sri Prasad"
		description="Sri Prasad, one of the eminent new age master of Spiritual Yogic Science, imparting knowledge through Yogic Science in the name of Eshwari sadhana. His vision to create a disease-free, stress-free and as a whole a holistic society, has brought millions together in India and overseas."
	/>
);
