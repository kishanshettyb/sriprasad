import React from "react";
import Hero from "../components/Hero";
import NavHeader from "../components/NavHeader";

const IndexPage = () => {
	return (
		<>
			<NavHeader />
			<Hero />
		</>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
