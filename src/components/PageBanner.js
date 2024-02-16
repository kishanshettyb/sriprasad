import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container } from "react-bootstrap";

const PageBanner = (props) => {
	const eshwarikriya = "../images/banner/eshwari-kriya-banner.jpeg";
	const eshwaridhyana = "../images/banner/eshwaridhyana.png";
	const ahamtoshivam = "../images/banner/ahamtoshivam.png";
	const navarathri = "../images/banner/navarathri.jpeg";
	const matangi = "../images/banner/matangi.png";
	const varahi = "../images/banner/varahi.png";
	const chandi = "../images/banner/chandike.png";
	const kali = "../images/banner/kali.png";
	const srikari = "../images/banner/srikari.jpeg";
	const srividya = "../images/banner/srividya.jpeg";
	const immortal = "../images/banner/immortal-process.png";
	const kalavahana = "../images/banner/kalavahana-1.jpeg";
	const dummylarge = "../images/dummy-large.png";
	const srinaada = "../images/banner/srinaada.png";
	const sri = "../images/banner/sri.jpeg";
	const vasukinaga = "../images/pages/temple/temple.jpeg";

	return (
		<section className="page-banner position-relative">
			<Container>
				<div className="position-relative">
					{props.title === "Eshwari Kriya" ? (
						<StaticImage className="image" src={`${eshwarikriya}`} alt="Page Banner" />
					) : props.title === "Sri Kari" ? (
						<StaticImage className="image" src={`${srikari}`} alt="Page Banner" />
					) : props.title === "Sri (Lakshmi)" ? (
						<StaticImage className="image" src={`${sri}`} alt="Page Banner" />
					) : props.title === "Immortal Process" ? (
						<StaticImage className="image" src={`${immortal}`} alt="Page Banner" />
					) : props.title === "Kalavahana" ? (
						<StaticImage className="image" src={`${kalavahana}`} alt="Page Banner" />
					) : props.title === "SVES" ? (
						<StaticImage className="image" src={`${srividya}`} alt="Page Banner" />
					) : props.title === "Eshwari Dhyana" ? (
						<StaticImage className="image" src={`${eshwaridhyana}`} alt="Page Banner" />
					) : props.title === "Devi Mathangi" ? (
						<StaticImage className="image" src={`${matangi}`} alt="Page Banner" />
					) : props.title === "Devi Varahi" ? (
						<StaticImage className="image" src={`${varahi}`} alt="Page Banner" />
					) : props.title === "Devi Chandi" ? (
						<StaticImage className="image" src={`${chandi}`} alt="Page Banner" />
					) : props.title === "Dakshina Kali" ? (
						<StaticImage className="image" src={`${kali}`} alt="Page Banner" />
					) : props.title === "Aham to Shivam" ? (
						<StaticImage className="image" src={`${ahamtoshivam}`} alt="Page Banner" />
					) : props.title === "Navarathri" ? (
						<StaticImage className="image" src={`${navarathri}`} alt="Page Banner" />
					) : props.title === "Sri Naada" ? (
						<StaticImage className="image" src={`${srinaada}`} alt="Page Banner" />
					) : props.title === "Sri Vasukinaga Eswari Temple" ? (
						<StaticImage className="image" src={`${vasukinaga}`} alt="Page Banner" />
					) : (
						<StaticImage className="image" src={`${dummylarge}`} alt="Page Banner" />
					)}

					<div className="overlay"></div>
					<div className="content">
						<span className={`${props.classes}`}>
							<h2 className="display-3 fw-bold">{props.title}</h2>
							<h3 className="display-6 fw-bold">{props.subTitle}</h3>
						</span>
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
