import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";

const punarjeevana = () => {
	return (
		<Layout>
			<section className="punarjeevana-section">
				<Container>
					<h2 className="display-2 fw-bolder text-center ">Punarjeevana</h2>
					<p>"An Initiative to Restore Monuments"</p>
					<Row>
						<Col md={6}>
							<StaticImage className="img-fluid images mb-2 br-20" src="../images/pages/before.jpeg" />
							<h2 className="fw-bold text-center">Before</h2>
						</Col>
						<Col md={6}>
							<StaticImage className="img-fluid images mb-2 br-20" src="../images/pages/after.jpeg" />
							<h2 className="fw-bold text-center">After</h2>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="bg-light-1">
				<Container>
					<p>
						Punar Jeevan - Monuments Restoration Project -I and You being together Foundation has taken up a project to restore the Old Historical Monuments and Old Clan deities
						Temples for renovations and Re-constructions.
					</p>
					<p>Under the Project Punar jeevan- which means giving life, started from the year 2012 we have renovated 11 such temples </p>
					<ul className="award-ul">
						<li>2006- Lord Muneshawara temple </li>
						<li>
							2006- Sri vasukinaga Eshari temple
							<br />
							<Row>
								<Col md={6}>
									<StaticImage className="img-fluid images mb-2 br-20" src="../images/pages/before-1.jpeg" />
									<h2 className="fw-bold text-center">Before</h2>
								</Col>
								<Col md={6}>
									<StaticImage className="img-fluid images mb-2 br-20" src="../images/pages/after-1.jpeg" />
									<h2 className="fw-bold text-center">After</h2>
								</Col>
							</Row>
						</li>
						<li>2007- Sri Manchalamma temple at Channaraya Patna</li>
						<li>2008- Lord Hanuman temple at Yerram palli, Kolar</li>
						<li>2016- Lord Muneshwara temple at Jala Halli, Bangalore, So on...</li>
					</ul>
					<p>
						In 2017 the organization first succeeded in completing the Lord Nandi Temple at Doddaballapura - Bangalore rural, Nandi- Bull is Monument of Ganga dynasty carved from a
						single rock.{" "}
					</p>
					<p>
						The I and You Being Together foundation volunteers joined hands in the cleaning drive around the idol of Nandi, initiated restoration & renovation of Nandi with Granite
						cladding on the open concrete plastering around the construction as well as on the slopping roof will be the final touch to the renovation.
					</p>
					<p>
						Upcoming Madeshwara Monuments of Ganga dynesty a Historic Monument at Doddaballapura. Mudeshwara Temple which was built during the Ganga Dynasty has exact evidence a
						rock carving and its translation from the University at Hubli has stated that it to be 1115AD old.{" "}
					</p>
					<p>The surrounding area was surveyed, cleaned and the ruins were gathered for inspection along with the old carvings and sculptures for reuse.</p>
					<p>
						The I and You being together foundation functions under the thriving service of its volunteers from various countries and has illumined the lives of several million
						people. We wish to serve humanity to the maximum with Eshwari kriya a unique 20 minutes yogic technique and with that we wish to create a holistic society free of
						disease, stress and Violence
					</p>
				</Container>
			</section>
		</Layout>
	);
};

export default punarjeevana;
