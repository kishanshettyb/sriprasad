import { Link } from "gatsby";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FirstImg from "../images/hero/img-1.jpeg";
import SecondImg from "../images/hero/img-2.jpeg";
import ThirdImg from "../images/hero/img-4.png";
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
										<div className="title">I</div>
									</Link>
								</div>
							</div>
						</Col>
						<Col xs={4} md={4} className="p-0">
							<div className="image-grid">
								<div className="image-grid__item center_item">
									<Link to="iandyou" className="grid-item">
										<div className="grid-item__image" style={{ backgroundImage: `url(${SecondImg})` }}></div>
										<div className="grid-item__hover"></div>
										<div className="title">You</div>
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
										<div className="title">We</div>
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
						<StaticImage className="slider-image" src="../images/hero/slider-1.png" alt="SriPrasad" />
						<Carousel.Caption>
							<h1>I</h1>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={1500}>
						<StaticImage className="slider-image" src="../images/hero/slider-2.png" alt="SriPrasad" />
						<Carousel.Caption>
							<h1>You</h1>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={1500}>
						<StaticImage className="slider-image" src="../images/hero/slider-3.png" alt="SriPrasad" />
						<Carousel.Caption>
							<h1>We</h1>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			<section className="pt-0">
				<div className="text-center ">
					<h2 className="  display-4 fw-bold text-center mt-5">
						I And You Being Together
						<br />
						<span className="gradient-text text-primary">Let's move together</span>
					</h2>
					<h3 className="special-title display-4 pt-3">- Sangachadwam</h3>
					<div className="text-center">
						<StaticImage src="../images/others/line-2.png" alt="line" className="line" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
