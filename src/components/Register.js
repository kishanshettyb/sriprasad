import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import JotformEmbed from "react-jotform-embed";

const Register = (props) => {
	const eshwarikriya = "../images/banner/eshwari-kriya-banner.jpeg";
	const immortal = "../images/banner/immortal-process.png";
	const dummylarge = "../images/dummy-large.png";
	const kalavahana = "../images/banner/kalavahana-1.jpeg";
	const vidhya = "../images/banner/vidhya.jpeg";
	const sri = "../images/banner/sri-1.jpeg";
	const temple = "../images/pages/temple/temple.jpeg";

	return (
		<section className="register-card">
			<Container>
				<Row>
					<Col xl={6} className="pe-lg-0">
						{props.title === "Eshwari Kriya" ? (
							<StaticImage className="register-card-image" src={`${eshwarikriya}`} alt="Page Banner" />
						) : props.title === "Immortal Process" ? (
							<StaticImage className="register-card-image" src={`${immortal}`} alt="Page Banner" />
						) : props.title === "Kalavahana" ? (
							<StaticImage className="register-card-image" src={`${kalavahana}`} alt="Page Banner" />
						) : props.title === "Sri Vidhya Eshwari Sadhana" ? (
							<StaticImage className="register-card-image" src={`${vidhya}`} alt="Page Banner" />
						) : props.title === "sri" ? (
							<StaticImage className="register-card-image" src={`${sri}`} alt="Page Banner" />
						) : props.title === "Sri Vasukinaga Eswari Temple" ? (
							<StaticImage className="register-card-image" src={`${temple}`} alt="Page Banner" />
						) : (
							<StaticImage className="register-card-image" src={`${dummylarge}`} alt="Page Banner" />
						)}
					</Col>

					<Col xl={6} className="ps-lg-0">
						<JotformEmbed src="https://form.jotform.com/240421983787062" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Register;
