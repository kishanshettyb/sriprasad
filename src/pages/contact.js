import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import JotformEmbed from "react-jotform-embed";

const contact = () => {
	return (
		<Layout>
			<section className="contact-section">
				<Container>
					<h2 className="display-2 fw-bolder text-center mb-5">Contact Us</h2>

					<Row>
						<Col md={12}>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.76105869523!2d77.59603241237782!3d13.039474301007811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae177f375fc6f5%3A0x7c5cf5ae98bd8fc4!2sI%20And%20You%20Foundation!5e0!3m2!1sen!2sin!4v1707801888135!5m2!1sen!2sin"
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe>
						</Col>
						<Col md={6}>
							<div className="contact-card">
								<h2 className="fw-bold">Our Location</h2>
								<hr />
								<ul>
									<li>
										<h4 className="fw-bold">Address</h4>
										<a target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/rPeb63vs37WvfBHs6">
											3J35+9R2 Naga Eshwari Temple, 1460, Dasarahalli Main Rd, behind Sri. Vasuki, HAF (P, Kaveri Layout, Mariyannapalya, Dasarahalli, Bengaluru, Byatarayanapura
											CMC and OG Part, Karnataka 560024
										</a>
									</li>
									<li>
										<h4 className="fw-bold">Phone</h4>
										<a target="_blank" rel="noreferrer" href="tel:+91 999999999">
											+91 999999999
										</a>
									</li>
									<li>
										<h4 className="fw-bold">Email</h4>
										<a target="_blank" rel="noreferrer" href="mailto:info@iandyou.org">
											info@iandyou.org
										</a>
									</li>
								</ul>
							</div>
						</Col>
						<Col md={6}>
							<div className="contact-card">
								<h2 className="fw-bold">Contact Form</h2>
								<hr />
								<JotformEmbed src="https://form.jotform.com/240431203986049" />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default contact;
