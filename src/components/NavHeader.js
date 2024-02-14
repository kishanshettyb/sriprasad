import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const NavHeader = () => {
	const [scrolltopdata, setscrolltopdata] = useState("");

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY < 50) {
				setscrolltopdata("");
			} else {
				setscrolltopdata("fixed-top fixed-bg shadow-sm");
			}
		});
	}, []);

	return (
		<Navbar expand="lg" className={`navbar-bg   ${scrolltopdata}`}>
			<Container>
				<Navbar.Brand href="/">
					<StaticImage className="sriprasd-logo me-md-5 me-0" src="../images/logo/sriprasad.png" alt="Sri Prasad" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="m-auto my-2 my-lg-0" style={{ maxHeight: "500px" }} navbarScroll>
						<Link className="nav-link" to="/">
							Home
						</Link>
						<Link className="nav-link" to="/about/">
							About Him
						</Link>
						<NavDropdown title="Teaching" id="navbarScrollingDropdown">
							<Link className="nav-link" href="/eshwarikriya/">
								Eshwari Kriya
							</Link>
							<NavDropdown.Divider />
							<Link className="nav-link" href="/srividhyaeshwarisadhana/">
								Sri Vidhya Eshwari Sadhana
							</Link>
							<NavDropdown.Divider />
							<Link className="nav-link" href="/immortalprocess/">
								Immortal Process
							</Link>
							<NavDropdown.Divider />
							<Link className="nav-link" href="/eshwarikalavahana/">
								Eshwari Kalavahana
							</Link>
						</NavDropdown>
						<NavDropdown title="Events" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Aham to Shivam</NavDropdown.Item>
							<NavDropdown.Divider />
							<Link className="nav-link" href="/navarathri/">
								Nava Rathri
							</Link>
							<NavDropdown.Divider />
							<Link className="nav-link" href="/srikari/">
								Sri Kari
							</Link>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Sri Naada</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Projects" id="navbarScrollingDropdown">
							<Link className="nav-link" href="https://iandyougreen.org">
								I and You Green
							</Link>
							<NavDropdown.Divider />
							<Link className="nav-link" href="https://iandyouvidya.org">
								I and You Vidhya
							</Link>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Punarjeevana</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Sanskara</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Spiritual Centre" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Sri Vasukinaga Eswari Temple</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Sadhana" id="navbarScrollingDropdown">
							<Link className="nav-link" href="/dakshinakali/">
								Dakshina Kali
							</Link>
							<NavDropdown.Divider />
							<Link className="nav-link" href="/devimathangi/">
								Devi Mathangi
							</Link>
							<NavDropdown.Divider />
							<Link className="nav-link" href="/devivarahi/">
								Devi Varahi
							</Link>
							<NavDropdown.Divider />
							<Link className="nav-link" href="/devichandi/">
								Devi Chandi
							</Link>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action3">Sri (Lakshmi)</NavDropdown.Item>
						</NavDropdown>
						<Link className="nav-link" href="/contact/">
							Contact
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavHeader;
