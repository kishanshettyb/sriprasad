import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import BasicCard from "./BasicCard";

const Slider = (props) => {
	return (
		<section className={`base ${props.sectionClass}`}>
			<Container>
				<h2 className="display-5 fw-bold text-center mt-5">{props.sectionTitle}</h2>

				<Carousel>
					<Carousel.Item>
						<Row>
							<Col md={3}>
								<BasicCard />
							</Col>
						</Row>
					</Carousel.Item>
				</Carousel>
			</Container>
		</section>
	);
};

export default Slider;
