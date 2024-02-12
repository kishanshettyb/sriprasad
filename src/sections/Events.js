import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import React from "react";

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
							<div className="basic-card">
								<StaticImage className="card-image" src="../images/workshops/eshwari_kriya.jpg" alt="Eshwari Kriya" />
								<div className="content">
									<h2>Eshwari Kriya</h2>
									<p>
										Most people say that their act was Crying and i hope most of us will agree with that but if you ask me, I would say it’s a big No, do you know why ? because the
										1st immediate act which we perform was Breathing{" "}
									</p>
								</div>
							</div>
						</Col>
						<Col md={3}>
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
						</Col>
						<Col md={3}>
							<div className="basic-card">
								<StaticImage className="card-image" src="../images/workshops/immortal_process_new.png" alt="Immortal Process" />
								<div className="content">
									<h2>Immortal Process</h2>
									<p>
										The theory of "karma and rebirth" raises numerous questions such as how, when, and why did the cycle start in the first place, what is the relative Karmic merit
										of one karma versus another and why, and what evidence is there that rebirth actually happens, among others.
									</p>
								</div>
							</div>
						</Col>
						<Col md={3}>
							<div className="basic-card">
								<StaticImage className="card-image" src="../images/workshops/sadhana.png" alt="Sri Vidhya Eshwari Sadhana Level - 1" />
								<div className="content">
									<h2>Sri Vidhya Eshwari Sadhana Level - 1 </h2>
									<p>
										Most people say that their act was Crying and i hope most of us will agree with that but if you ask me, I would say it’s a big No, do you know why ? because the
										1st immediate act which we perform was Breathing{" "}
									</p>
								</div>
							</div>
						</Col>
						<Col md={3}>
							<div className="basic-card">
								<StaticImage className="card-image" src="../images/workshops/guruji.jpeg" alt="Eshwari Nirmalikarana kriya - Level 01 & 02" />
								<div className="content">
									<h2>Eshwari Nirmalikarana kriya - Level 01 & 02</h2>
									<p>
										Målā means the impurities or negative energy or Black energy , this Målā is neither formless nor has form , there are three types , Physical , Mental and
										Emotional, there are many reasons that form or accumulate impurities some have been mentioned below , scientifically it is an exchange of energy the compatible
										energy is considered as positive energy and incompatible is negative energy but in reality there is no such positive or negative, energy it is just energy
									</p>
								</div>
							</div>
						</Col>
						<Col md={3}>
							<div className="basic-card">
								<StaticImage className="card-image" src="../images/workshops/horoscope.jpeg" alt="Jyothishmathi - Astro/Vastu Solutions" />
								<div className="content">
									<h2>Jyothishmathi - Astro/Vastu Solutions</h2>
									<p>
										The school of Jyothishmathi - Astro/Vastu solutions is founded by Guruji Sri Prasad, a profound Srividhya Yoga Tantra Master , who is fully established in the
										Self. Our school seeks to expand the world’s understanding of yoga through an education and training that are steeped in the Shaktha tradition, the original
										roots of yoga tantra, Astrology and Vastu , a long lineage of masters while making yoga tantra, Astrology and Vastu accessible and applicable for modern day use
										for people of all ages, abilities, cultures and religions.
									</p>
								</div>
							</div>
						</Col>
					</Slider>
				</Row>
			</Container>
		</section>
	);
};

export default Events;
