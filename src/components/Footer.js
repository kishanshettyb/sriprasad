import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ApplyModal from "./ApplyModal";

const Footer = () => {
	return (
		<footer>
			<div className="fixed-footer">
				<ApplyModal variant="primary" size="lg" btnTitle="Register" />
			</div>
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
						<h5 className="mb-3">Social Media</h5>
						<ul className="social-media">
							<li>
								<a rel="noreferrer" target="_blank" href="https://www.facebook.com/srimnprasad.prasad">
									<StaticImage className="icon" src="../images/social/facebook.svg" alt="Sri Prasad Facebook" />
								</a>
							</li>
							<li>
								<a rel="noreferrer" target="_blank" href="https://www.instagram.com/sriprasadguruji">
									<StaticImage className="icon" src="../images/social/instagram.svg" alt="Sri Prasad instagram" />
								</a>
							</li>
							<li>
								<a target="_blank" rel="noreferrer" href="https://www.youtube.com/@sriprasad4424">
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
						<h5 className="mb-4 mt-4 mt-md-0">Projects</h5>
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
						<h5 className="mb-4 mt-4 mt-md-0">Quick Links</h5>
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
						<h5 className="mb-4 mt-4 mt-md-0">Menus</h5>
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
						<h5 className="mb-4 mt-4 mt-md-0">Contact</h5>
						<h6 className="events-top">Address</h6>
						<a href="/" className="address-a">
							<b>I and You Administration Office</b> <br />
							Above Canara Bank.1, 1st Main 1st Cross,
							<br /> Atmananda Colony, Sultanpalya, <br />
							Bengaluru, Karnataka 560032.
						</a>
						<h6 className="events-top">Email</h6>
						<a target="_blank" rel="noreferrer" href="mailto:info@iandyou.org">
							info@iandyou.org
						</a>
						<h6 className="events-top">Phone</h6>
						<a target="_blank" rel="noreferrer" href="tel:+91 9900022506">
							+91 9900022506
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
