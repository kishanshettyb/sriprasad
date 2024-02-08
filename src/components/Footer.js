import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col md={4}>
						<StaticImage className="footer-logo mb-4" src="../images/logo/sriprasad.png" alt="Sriprasad" />
						<p>Sri Prasad, one of the eminent new age master of Spiritual Yogic Science, imparting knowledge through Yogic Science in the name of Eshwari sadhana. </p>
						<Button className="mb-4" variant="outline-primary" size="sm">
							Read More
						</Button>
						<h6 className="mb-3">Social Media</h6>
						<ul className="social-media">
							<li>
								<a href="#">
									<StaticImage className="icon" src="../images/social/facebook.svg" alt="Sriprasad Facebook" />
								</a>
							</li>
							<li>
								<a href="#">
									<StaticImage className="icon" src="../images/social/instagram.svg" alt="Sriprasad instagram" />
								</a>
							</li>
							<li>
								<a href="#">
									<StaticImage className="icon" src="../images/social/youtube.svg" alt="Sriprasad youtube" />
								</a>
							</li>
							<li>
								<a href="#">
									<StaticImage className="icon" src="../images/social/twitter.svg" alt="Sriprasad twitter" />
								</a>
							</li>
							<li>
								<a href="#">
									<StaticImage className="icon" src="../images/social/linkedin.svg" alt="Sriprasad linkedin" />
								</a>
							</li>
						</ul>
					</Col>

					<Col md={2}>
						<h6 className="mb-4">Quick Links</h6>
					</Col>

					<Col md={2}>
						<h6 className="mb-4">Socila Media</h6>
					</Col>
					<Col md={2}>
						<h6 className="mb-4">Menus</h6>
					</Col>
					<Col md={2}>
						<h6 className="mb-4">Contact</h6>
					</Col>
				</Row>
			</Container>
			<div className="copyright-div">
				<Container>
					<Row>
						<Col md={6}>
							<p>&copy; 2024 I and You Foundation. All Rights Reserved.</p>
						</Col>
						<Col md={6}>
							<a href="#">Privacy Policy</a>
							&nbsp; &nbsp; &nbsp;<a href="#">Terms and conditions</a>
						</Col>
					</Row>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
