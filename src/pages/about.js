import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

const about = () => {
	return (
		<Layout>
			<section className="about-section">
				<Container>
					<Row className="justify-content-center align-items-center">
						<Col md={6} xl={4}>
							<StaticImage src="../images/sri-prasad-guruji.jpeg" className="sriprasad-guruji img-fluid mb-5 mb-md-0" alt="Sri Prasad" />
						</Col>
						<Col md={6} xl={6}>
							<p className="text-primary mb-0 fw-bold">About</p>
							<h1 className="fw-bold display-3 mb-3">Sri Prasad</h1>
							<p className="mb-5">
								Sri Prasad, one of the eminent new age master of Spiritual Yogic Science, imparting knowledge through Yogic Science in the name of Eshwari sadhana. His vision to
								create a disease-free, stress-free and as a whole a holistic society, has brought millions together in India and overseas.
							</p>
							<h2 className="fw-bold fs-5 mb-3">Path Towards Spirituality</h2>
							<p className="mb-5">
								Running down through the life and journey of Sri Prasad and explore a little about how he imparted the most secret of spiritual knowledge Sri Vidhya through Yogic
								Science, and the founding of I and You Being Together Foundation which also involves various humanitarian service oriented activities.
							</p>
							<h6 className="mb-3 fw-bold">Social Media</h6>
							<ul className="social-media">
								<li>
									<a href="#">
										<StaticImage className="icon" src="../images/social/facebook.svg" alt="Sri Prasad Facebook" />
									</a>
								</li>
								<li>
									<a href="#">
										<StaticImage className="icon" src="../images/social/instagram.svg" alt="Sri Prasad instagram" />
									</a>
								</li>
								<li>
									<a href="#">
										<StaticImage className="icon" src="../images/social/youtube.svg" alt="Sri Prasad youtube" />
									</a>
								</li>
								<li>
									<a href="#">
										<StaticImage className="icon" src="../images/social/twitter.svg" alt="Sri Prasad twitter" />
									</a>
								</li>
								<li>
									<a href="#">
										<StaticImage className="icon" src="../images/social/linkedin.svg" alt="Sri Prasad linkedin" />
									</a>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="childhood-section">
				<Container>
					<Row>
						<Col md={6}>
							<h2 className="display-6 text-black fw-bold mb-4">His childhood</h2>
							<p>
								Having born to a hindu family he would perform rituals with his mother, was being brought up in an islamic neighbourhood and had learnt and practiced Islamic
								rituals gaining knowledge of Quran, he also studied in a Christian institution and would attend gatherings in the church every weekend to gain knowledge from Bible.
								His mother was an orthodoxly religious person while his father, a practical man who mostly believed in social service than performing rituals. Being born a hindu
								and having experienced diverse religions he had learnt to selflessly serve humanity from his father.
							</p>
							<p>
								As the journey continued his first lesson in spirituality came from his father at the age of 5, who was a practitioner of BKS Iyengar Yoga who had then introduced
								him to yoga, having quested a long way he was actively involved in civil community services throughout his adolescence such as Scouts, NCC and staging various
								Street plays to protest and bring awareness to the general public.
							</p>

							<p className="mb-5">
								With the urge to acquire more knowledge about the yogic science he had learnt from various siddhas and yogis which had brought him to a conclusion that something
								greater was awaiting his upliftment; away from stereotypical religious life to selfless spiritual living. Finally the questions that changed the course of his life.
								Does God really exist? If he exists then why are people suffering? The craving to find answers to his questions had finally reached a peak.
							</p>
						</Col>
						<Col md={6}></Col>

						<Col md={12}>
							<h2 className="display-6 text-black fw-bold mb-4">His Personality</h2>
							<p>
								The impact of realisation gave rise to Eshwari Sadhana. Sri Prasad who began teaching Yogic Science in 2012 by the name Eshwari Kriya. 'Eshwari Kriya' a unique
								yogic 20min technique derived from age old scripture called 'Vigyan Bhairav Yoga Tantra' which means the technique of unifying with the universal consciousness.
								Eshwari Sadhna (Sri Vidya) movement which includes higher levels of meditations and workshops has been practiced by approximately 200000 people in India and
								overseas.
							</p>
						</Col>
					</Row>
				</Container>
			</section>

			<section>
				<Container>
					<Row>
						<Col md={12}>
							<h2 className="display-6 text-black fw-bold mb-4">Founding of an Organization</h2>
							<p></p>
							<p>
								Sri Prasad has established an organization in 2012 and named it “I and You Being Together Foundation”, a non -profit making, non-religious and volunteer
								organization that aims in bringing stress-free, disease-free, violence-free and self-realization in individuals to form a holistic society. I and You Being Together
								foundation has its main office in Bangalore-Karnataka, India and has established its branches in several states of India and26 countries overseas
							</p>

							<p>
								“If just one person does service unto mankind it is not enough, if the same person inspires, motivates and encourages many others to serve the mankind such service
								becomes a Divine Service(Eshwari Seva)”.
							</p>

							<p>
								The founder speaks thus…. 'I' here stands ahead leading and feeling responsible to bring the change in self and then can 'I' can count on 'You' thus 'I and You”
								together can bring the change.
							</p>

							<p>“Only two can bring the change that is I and you”</p>

							<p>
								The organization functions under the thriving service of its volunteers from various countries and has illumined the lives of several million people.We wish to
								serve humanity to the maximum and with that we wish to create a holistic world free of disease and stress
							</p>

							<p>Welcome home to the family of fellowship, unity and camaraderie within whose walls lie all qualities of togetherness.</p>

							<p>
								We from I and You Being Together Foundation stand firm in reaching you where you presently are. Let us together walk hand in hand towards Progress and Well-being.
							</p>

							<h3 className="special-title fs-2">- Sangachadwam</h3>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default about;
export const Head = () => (
	<Seo
		title="About Sri Prasad"
		description="Sri Prasad, one of the eminent new age master of Spiritual Yogic Science, imparting knowledge through Yogic Science in the name of Eshwari sadhana. His vision to create a disease-free, stress-free and as a whole a holistic society, has brought millions together in India and overseas."
	/>
);
