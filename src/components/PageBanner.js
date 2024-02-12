import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container } from "react-bootstrap";

const PageBanner = (props) => {
	const imagename = "../images/banner/eshwari-kriya-banner.jpeg";
	return (
		<section className="page-banner position-relative">
			<Container>
				<div className="position-relative">
					<StaticImage className="image" src={`${imagename}`} alt="Page Banner" />
					<div className="overlay"></div>
					<div className="content">
						<h2 className="display-3 fw-bold">Eshwari Kriya</h2>
						<h3 className="display-6 fw-bold">Celebrate Life</h3>
					</div>
				</div>
			</Container>
			<div className="d-none d-xl-block">
				<StaticImage src="../images/banner/lotus.png" className="img-1" alt="lotus" />
				<StaticImage src="../images/banner/lotus.png" className="img-2" alt="lotus" />
			</div>
		</section>
	);
};

export default PageBanner;
