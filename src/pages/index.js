import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
import Workshop from "../sections/Workshop";
import PageBanner from "../components/PageBanner";
import Events from "../sections/Events";
import Register from "../components/Register";

const IndexPage = () => {
	return (
		<Layout>
			<Hero />
			<Workshop />
			<PageBanner title="Eshwari Kriya" subTitle="Celebrate Life" />
			<Events />
			<Register />
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
