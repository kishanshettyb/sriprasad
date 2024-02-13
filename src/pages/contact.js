import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import JotformEmbed from "react-jotform-embed";
import { StaticImage } from "gatsby-plugin-image";

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
								title="map"
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
											<b>I and You Foundation</b> <br />
											1460, Behind Sri. Vasuki Naga Eshwari Temple, <br />
											HAF (P) Kaveri Layout, Hebbal, Dasarahalli, <br />
											Bangalore, Karnataka - 560024.
										</a>
									</li>
									<li>
										<h4 className="fw-bold">Phone</h4>
										<a target="_blank" rel="noreferrer" href="tel:+91 9900022506">
											+91 9900022506
										</a>
									</li>
									<li>
										<h4 className="fw-bold">Email</h4>
										<a target="_blank" rel="noreferrer" href="mailto:info@iandyou.org">
											info@iandyou.org
										</a>
									</li>
									<li>
										<h4 className="fw-bold">Social Links</h4>
										<ul className="social-media">
											<li>
												<a rel="noreferrer" target="_blank" href="https://www.facebook.com/iandyou.org">
													<StaticImage className="icon" src="../images/social/facebook.svg" alt="Sri Prasad Facebook" />
												</a>
											</li>
											<li>
												<a rel="noreferrer" target="_blank" href="https://www.instagram.com/iandyoubeingtogether">
													<StaticImage className="icon" src="../images/social/instagram.svg" alt="Sri Prasad instagram" />
												</a>
											</li>
											<li>
												<a href="/">
													<StaticImage className="icon" src="../images/social/youtube.svg" alt="Sri Prasad youtube" />
												</a>
											</li>
											<li>
												<a href="/">
													<StaticImage className="icon" src="../images/social/twitter.svg" alt="Sri Prasad twitter" />
												</a>
											</li>
											<li>
												<a href="/">
													<StaticImage className="icon" src="../images/social/linkedin.svg" alt="Sri Prasad linkedin" />
												</a>
											</li>
										</ul>
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