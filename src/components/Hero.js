import { Link } from "gatsby";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FirstImg from "../images/hero/img-1.jpeg";
import SecondImg from "../images/hero/img-2.jpeg";
import ThirdImg from "../images/hero/img-3.jpeg";
import Line from "../images/others/line-2.png";

const Hero = () => {
	return (
		<>
			<section className="iandyou-card-section d-none d-lg-block pb-0">
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
			<section className="pt-0">
				<div className="text-center ">
					<h2 className="  display-4 fw-bold text-center   mt-5 wow fadeInUp" data-wow-delay="0.5s">
						I And You Being Together
						<br />
						<span className="gradient-text text-primary">Let's move together</span>
					</h2>
					<h3 className="special-title display-4 wow fadeInUp pt-3" data-wow-delay="0.5s" data-wow-duration="1s">
						- Sangachadwam
					</h3>
					<div className="text-center">
						<img src={Line} alt="line" className="line wow fadeInUp" data-wow-delay="1s" data-wow-duration="1s" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
