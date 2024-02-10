import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col xs={12} md={12} lg={4}>
						<StaticImage className="footer-logo mb-4" src="../images/logo/sriprasad.png" alt="Sri Prasad" />
						<p className="me-0 me-lg-5">
							<b>Sri Prasad</b>, one of the eminent new age master of Spiritual Yogic Science, imparting knowledge through Yogic Science in the name of Eshwari sadhana.{" "}
						</p>
						<Link to="/about/">
							<Button className="mb-4" variant="outline-primary mb-5" size="sm">
								Read More
							</Button>
						</Link>
						<h6 className="mb-3">Social Media</h6>
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
					</Col>
					<Col xs={6} md={3} lg={2}>
						<h6 className="mb-4 mt-4 mt-md-0">Projects</h6>
						<ul>
							<li>
								<Link to="/" className="links">
									I and You Green
								</Link>
							</li>
							<li>
								<Link to="/" className="links">
									I and You Vidhya
								</Link>
							</li>
							<li>
								<Link to="/" className="links">
									Punarjeevana
								</Link>
							</li>
							<li>
								<Link to="/" className="links">
									Sanskara
								</Link>
							</li>
						</ul>
						<h6 className="events-top">Events</h6>
						<ul>
							<li>
								<Link to="/" className="links">
									Aham to Shivam
								</Link>
							</li>
							<li>
								<Link to="/" className="links">
									Nava Rathri
								</Link>
							</li>
							<li>
								<Link to="/" className="links">
									Sri Kari
								</Link>
							</li>
							<li>
								<Link to="/" className="links">
									Sri Naada
								</Link>
							</li>
						</ul>
					</Col>
					<Col xs={6} md={3} lg={2}>
						<h6 className="mb-4 mt-4 mt-md-0">Quick Links</h6>
						<ul>
							<li>
								<Link to="/" className="links">
									Eshwari Kriya
								</Link>
							</li>
							<li>
								<Link to="/" className="links">
									Sri Vidhya Eshwari Sadhana{" "}
								</Link>
							</li>
							<li>
								<Link to="/" className="links">
									Immortal Process
								</Link>
							</li>
							<li>
								<Link to="/" className="links">
									Eshwari Kalavahana
								</Link>
							</li>
							<li>
								<Link to="/" className="links">
									I And You Vidya
								</Link>
							</li>
							<li>
								<Link to="/" className="links">
									I And You
								</Link>
							</li>
							<li>
								<Link to="/" className="links">
									Donate
								</Link>
							</li>
							<li>
								<Link to="/" className="links">
									Blog
								</Link>
							</li>
							<li>
								<Link to="/" className="links">
									FAQ
								</Link>
							</li>
						</ul>
					</Col>

					<Col xs={6} md={2} lg={1}>
						<h6 className="mb-4 mt-4 mt-md-0">Menus</h6>
						<ul>
							<li>
								<Link className="links" to="/">
									Home
								</Link>
							</li>
							<li>
								<Link className="links" to="/">
									About
								</Link>
							</li>
							<li>
								<Link className="links" to="/">
									Teaching
								</Link>
							</li>
							<li>
								<Link className="links" to="/">
									Events
								</Link>
							</li>
							<li>
								<Link className="links" to="/">
									Projects
								</Link>
							</li>
							<li>
								<Link className="links" to="/">
									Sadhana
								</Link>
							</li>
							<li>
								<Link className="links" to="/">
									Contact
								</Link>
							</li>
						</ul>
					</Col>
					<Col xs={6} md={4} lg={3}>
						<h6 className="mb-4 mt-4 mt-md-0">Contact</h6>
						<a href="/" className="address-a">
							1460, Behind Sri. Vasuki Naga Eshwari Temple, HAF (P) Kaveri Layout, Hebbal, <br />
							Dasarahalli, Bangalore, <br />
							Karnataka 560024.
						</a>
					</Col>
				</Row>
			</Container>
			<div className="copyright-div text-center">
				<Container>
					<Row>
						<Col md={6}>
							<p>&copy; 2024 I and You Foundation. All Rights Reserved.</p>
						</Col>
						<Col md={6}>
							<a href="/">Privacy Policy</a>
							&nbsp; &nbsp; | &nbsp; &nbsp;<a href="/">Terms and conditions</a>
						</Col>
					</Row>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
