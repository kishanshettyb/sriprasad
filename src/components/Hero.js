import { Link } from "gatsby";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FirstImg from "../images/hero/hero-2.png";
import ThirdImg from "../images/hero/hero-3.png";
import SriPrasad from "../images/hero/sriprasad.jpeg";

import Carousel from "react-bootstrap/Carousel";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
	return (
		<>
			<section className="iandyou-card-section d-none d-md-block pb-0">
				<Container>
					<Row className="pb-5">
						<Col xs={4} md={4} className="p-0">
							<div className="image-grid">
								<div className="image-grid__item">
									<Link to="about" className="grid-item">
										<div className="grid-item__image" style={{ backgroundImage: `url(${FirstImg})` }}></div>
										<div className="grid-item__hover"></div>
									</Link>
								</div>
							</div>
						</Col>
						<Col xs={4} md={4} className="p-0">
							<div className="image-grid">
								<div className="image-grid__item center_item">
									<Link to="iandyou" className="grid-item">
										<div className="grid-item__image" style={{ backgroundImage: `url(${SriPrasad})` }}></div>
										<div className="grid-item__hover"></div>
									</Link>
								</div>
							</div>
						</Col>
						<Col xs={4} md={4} className="p-0">
							<div className="image-grid">
								<div className="image-grid__item">
									<Link to="#" className="grid-item">
										<div className="grid-item__image" style={{ backgroundImage: `url(${ThirdImg})` }}></div>
										<div className="grid-item__hover"></div>
									</Link>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<div className="d-block d-md-none hero-mobile-slider">
				<Carousel fade>
					<Carousel.Item interval={1500}>
						<StaticImage className="slider-image" src="../images/hero/hero-2.png" alt="SriPrasad" />
					</Carousel.Item>
					<Carousel.Item interval={1500}>
						<StaticImage className="slider-image" src="../images/hero/sriprasad.jpeg" alt="SriPrasad" />
					</Carousel.Item>
					<Carousel.Item interval={1500}>
						<StaticImage className="slider-image" src="../images/hero/hero-3.png" alt="SriPrasad" />
					</Carousel.Item>
				</Carousel>
			</div>
			<section className="pt-0">
				<div className="text-center ">
					<h2 className="display-3 fw-bolder text-center mt-5">
						"I am here to introduce you to <span className="text-primary">your self</span>"
					</h2>
					<h3 className="special-title display-4 pt-3">- Sri Prasad</h3>
					<div className="text-center">
						<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
