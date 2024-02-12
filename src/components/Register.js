import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import JotformEmbed from "react-jotform-embed";

const Register = () => {
	return (
		<section className="register-card">
			<Container>
				<Row>
					<Col xl={6} className="pe-lg-0">
						<StaticImage alt="" src="../images/banner/eshwari-kriya-banner.jpeg" className="register-card-image" />
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
