import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import React from "react";
import { Link } from "gatsby";

const Events = () => {
	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: "150px",
		centerMode: false,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 3000,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	};
	return (
		<section className="bg-light-1 default-section">
			<Container>
				<h2 className="fw-bold display-5 text-center">Events</h2>
				<div className="text-center">
					<StaticImage src="../images/others/line-1.png" alt="line" />
				</div>
				<Row>
					<Slider {...settings}>
						<Col md={3}>
							<Link to="/ahamtoshivam/">
								<div className="basic-card">
									<StaticImage className="card-image" src="../images/workshops/ahamtoshivam.jpeg" alt="Eshwari Kriya" />
									<div className="content">
										<h2>Aham to Shivam</h2>
										<p>
											This is a journey, an individual's journey, it's an unknown, directionless secret journey into the internal depths of consciousness that is basically a
											journey towards Shiva or our own Existence which gives great satisfaction.
										</p>
									</div>
								</div>
							</Link>
						</Col>
						<Col md={3}>
							<Link to="/navarathri/">
								<div className="basic-card">
									<StaticImage className="card-image" src="../images/workshops/navaratri.png" alt="Eshwari Dhyana" />
									<div className="content">
										<h2>Nava Rathri</h2>
										<p>
											A Scientific Yogic Practice during Navarathri Bharath is a such country here most of festivals are incorporated with Scientific knowledge, human values and
											Rituals based celebration .
										</p>
									</div>
								</div>
							</Link>
						</Col>
						<Col md={3}>
							<Link to="/srikari/">
								<div className="basic-card">
									<StaticImage className="card-image" src="../images/workshops/srikari.jpeg" alt="Immortal Process" />
									<div className="content">
										<h2>Sri Kari</h2>
										<p>Srikari : Kari means giver of boons and Sri meaning the Devi who bestows all; health, protection, prosperity, happiness and success.​</p>
									</div>
								</div>
							</Link>
						</Col>
						<Col md={3}>
							<Link to="/srinada/">
								<div className="basic-card">
									<StaticImage className="card-image" src="../images/workshops/srinada.jpeg" alt="Sri Vidhya Eshwari Sadhana Level - 1" />
									<div className="content">
										<h2>Sri Naada </h2>
										<p></p>
									</div>
								</div>
							</Link>
						</Col>
					</Slider>
				</Row>
			</Container>
		</section>
	);
};

export default Events;
