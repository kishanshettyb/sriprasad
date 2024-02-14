import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import React from "react";
import { Link } from "gatsby";

const Workshop = () => {
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
				<h2 className="fw-bold display-5 text-center">Workshops</h2>
				<div className="text-center">
					<StaticImage src="../images/others/line-1.png" alt="line" />
				</div>
				<Row>
					<Slider {...settings}>
						<Col md={3}>
							<Link to="/eshwarikriya/">
								<div className="basic-card">
									<StaticImage className="card-image" src="../images/workshops/eshwari_kriya.jpg" alt="Eshwari Kriya" />
									<div className="content">
										<h2>Eshwari Kriya</h2>
										<p>
											Most people say that their act was Crying and i hope most of us will agree with that but if you ask me, I would say it’s a big No, do you know why ? because
											the 1st immediate act which we perform was Breathing{" "}
										</p>
									</div>
								</div>
							</Link>
						</Col>
						<Col md={3}>
							<Link to="/srividhyaeshwarisadhana/">
								<div className="basic-card">
									<StaticImage className="card-image" src="../images/workshops/dhyana.png" alt="Eshwari Dhyana" />
									<div className="content">
										<h2>Eshwari Dhyana</h2>
										<p>
											Eshwari dhyana is come from a good old Shaktha tradition, Eshwari Dhyana is described as a simple, natural, effortless Dhyana technique that doesn't involve
											much concentration. One uses a Powerful Energized Dhyana mantra as a vehicle to let the mind settle down naturally in its source.
										</p>
									</div>
								</div>
							</Link>
						</Col>
						<Col md={3}>
							<Link to="/immortalprocess/">
								<div className="basic-card">
									<StaticImage className="card-image" src="../images/workshops/immortal_process_new.png" alt="Immortal Process" />
									<div className="content">
										<h2>Immortal Process</h2>
										<p>
											The theory of "karma and rebirth" raises numerous questions such as how, when, and why did the cycle start in the first place, what is the relative Karmic
											merit of one karma versus another and why, and what evidence is there that rebirth actually happens, among others.
										</p>
									</div>
								</div>
							</Link>
						</Col>
						<Col md={3}>
							<Link to="/srividhyaeshwarisadhana/">
								<div className="basic-card">
									<StaticImage className="card-image" src="../images/workshops/sadhana.png" alt="Sri Vidhya Eshwari Sadhana Level - 1" />
									<div className="content">
										<h2>Sri Vidhya Eshwari Sadhana Level - 1 </h2>
										<p>
											Most people say that their act was Crying and i hope most of us will agree with that but if you ask me, I would say it’s a big No, do you know why ? because
											the 1st immediate act which we perform was Breathing{" "}
										</p>
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

export default Workshop;
