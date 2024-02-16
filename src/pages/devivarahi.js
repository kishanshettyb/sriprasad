import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";

const devivarahi = () => {
	return (
		<Layout>
			<section>
				<PageBanner title="Devi Varahi" />
				<Container>
					<h2 className="display-2 fw-bolder text-center mb-5">Devi Varahi Sadhana</h2>
					<p>
						Varahi is one of the Saptha Matrikas, a group of seven goddesses in the Shakta Tredition. Bearing the head of a sow, Varahi is the shakti (feminine energy) of Varaha,
						the boar avatara of the god Vishnu.{" "}
					</p>
					<p>In Nepal, she is called Barahi. In Rajasthan and Gujarat, she is venerated as Dandini.</p>
					<p>Varahi is more commonly venerated in the sect of the Goddess-oriented Shakthisam, but also in Shaivism (devotees of Shiva) and Vaishnavism (devotees of Vishnu). </p>
					<p>
						She is usually worshipped at night, using secretive Vama marga Tantric & Yoga Tantra practices, In Varanasi (Kashi), Varahi is worshipped as Patala Bhairavi, The
						Buddhist goddesses Vajravarahi and Marichi have their origins in the Shakta goddess Varahi.
					</p>

					<Row className="align-items-center">
						<Col md={6}>
							<h2 className="fw-bold display-5 mb-4">Benefits of Varahi Worship</h2>
							<ul className="regular-ul">
								<li>Eradication of the “evil eyes” cast upon you by others.</li>
								<li>Shields from the dangers emanating from evil spirits. </li>
								<li>Varahi protects her devotees from black magic and unethical occult practices. </li>
								<li>Varahi worship offers protection against mishaps like accidents.</li>
								<li>It Boosts your goodwill and recognition.</li>
								<li>It increases fame and makes your words count.</li>
								<li>Invoking Varahi frees you from fear and self-doubt</li>
								<li>She blesses the devotees with courage and confidence. </li>
								<li>Shields devotees from diseases and sickness. </li>
								<li>It helps to manage enemies and emerge successfully.</li>
								<li>Her worship bestows happiness and prosperity.</li>
								<li>Varahi blesses her devotees with knowledge and wisdom</li>
							</ul>
						</Col>
						<Col md={6}>
							<StaticImage src="../images/pages/varahi.jpeg" className="img-fluid shadow br-20" alt="" />
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Container>
					<p>
						She represents Vama Nadi and been worshiped through Vamachara with Pancha Ma” kara method, so she is referred has Panchami, But in the Yoga Tantra Marga the practice is
						simple but very effective and result oriented{" "}
					</p>
					<p>
						The mystic way of worshiping Devi Varahi during the Ashada Navarathri (Jun/July) with the Mystic lamp, Varahi Mudra, Yantra, Mantra and yogic tantra will bless the
						above mentioned benefits.{" "}
					</p>
				</Container>
			</section>
		</Layout>
	);
};

export default devivarahi;
