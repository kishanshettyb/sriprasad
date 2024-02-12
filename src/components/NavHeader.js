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
							<NavDropdown.Item href="#action4">Sri Vidhya Eshwari Sadhana </NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Immortal Process</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Eshwari Kalavahana</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Events" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Aham to Shivam</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action4">Nava Rathri</NavDropdown.Item>
							<NavDropdown.Divider />
							<Link className="nav-link" href="/srikari/">
								Sri Kari
							</Link>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Sri Naada</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Projects" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">I and You Green</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action4">I and You Vidhya</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Punarjeevana</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Sanskara</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Spiritual Centre" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Sri Vasukinaga Eswari Temple</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Sadhana" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Dakshna Kali</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action3">Devi Mathangi</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action3">Devi Varahi</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action3">Devi Chandi</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action3">Sri (Lakshmi)</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#action1">Contact</Nav.Link>
					</Nav>
					{/* <Form className="d-flex">
						<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
						<Button variant="outline-success">Search</Button>
					</Form> */}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavHeader;
