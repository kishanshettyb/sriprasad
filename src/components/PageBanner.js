import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container } from "react-bootstrap";

const PageBanner = (props) => {
	const eshwarikriya = "../images/banner/eshwari-kriya-banner.jpeg";
	const srikari = "../images/banner/srikari.jpeg";
	const srividya = "../images/banner/srividya.jpeg";
	const immortal = "../images/banner/immortal-process.png";
	const kalavahana = "../images/banner/kalavahana-2.jpeg";
	const dummylarge = "../images/dummy-large.png";
	return (
		<section className="page-banner position-relative">
			<Container>
				<div className="position-relative">
					{props.title === "Eshwari Kriya" ? (
						<StaticImage className="image" src={`${eshwarikriya}`} alt="Page Banner" />
					) : props.title === "Sri Kari" ? (
						<StaticImage className="image" src={`${srikari}`} alt="Page Banner" />
					) : props.title === "Immortal Process" ? (
						<StaticImage className="image" src={`${immortal}`} alt="Page Banner" />
					) : props.title === "Kalavahana" ? (
						<StaticImage className="image" src={`${kalavahana}`} alt="Page Banner" />
					) : props.title === "SVES" ? (
						<StaticImage className="image" src={`${srividya}`} alt="Page Banner" />
					) : (
						<StaticImage className="image" src={`${dummylarge}`} alt="Page Banner" />
					)}

					<div className="overlay"></div>
					<div className="content">
						<h2 className="display-3 fw-bold">{props.title}</h2>
						<h3 className="display-6 fw-bold">{props.subTitle}</h3>
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
