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
								<b>Sri M. Naveen Prasad</b> an Indian spiritual master, reverently referred to as "Sri" and “Guruji " founded I and You being together foundation in 2012, a Non-
								religious , Non- Profit, Volunteer-based NGO for providing moral and social support to people with his divine intuitive ability to resolve problems related life and
								diseases that fall under daivavyapashraya(the subtlest mode of treatment as specified in ayurevda), the NGO also engages in services Socially, Environmentally and
								for Girl Child Education.
							</p>
							<p className="mb-3">
								Sri Prasad, known popularly as the new age Masters of Spiritual Yogic Sri Vidhya, of his prominent works includes his teachings for imparting knowledge of Yogic
								Science in the name of Eshwari Kriya with a vision to create disease-free, stress-free and holistic life, his selfless action has brought millions together across
								India and overseas.
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

			<section className="education-section">
				<Container>
					<Row>
						<Col md={12}>
							<h2 className="display-6 text-black fw-bold mb-4">Early life and education</h2>
							<p>
								M. Naveen Prasad well known as Sri prasad, was born on 18 October 1974 in Bangalore, Karnataka, India, on the occasion of Ramadan and Navarathri, to a Kannada
								speaking Hindu family, he being the eldest of the three children, his Mother Smt R. Kanthamma was housewife and his father Sri Muniyappa was the Inspector of state
								excise, due to the nature of his father's job, the family moved frequently across south Karnataka.{" "}
							</p>
							<p>
								After his schooling at Government Primary school, TN Pura, Mysore - OLV Convent, Somwarpet - St' Anne's High school, Veerajpet, and Murnad Pre-University College,
								Madikeri, Coorg; he then discontinued from in final year of graduation (Bsc) from the University of Bangalore and secured a Diploma in Pharmacy.
							</p>

							<p className="mb-3">
								Having started his career as a medical store salesperson, he continued as medical representative and later resigned his job as an area sales manager in Sales and
								Marketing from a reputed pharmaceutical company.
							</p>
						</Col>
					</Row>
				</Container>
			</section>

			<section>
				<Container>
					<Row>
						<Col md={12}>
							<h2 className="display-6 text-black fw-bold mb-4">Story of His Birth</h2>
							<p>
								For want of child the couple with their family set out to a pilgrimage to Dharmasthala, Mangalore located in the midst of a thick rain forest, a popular place where
								scores of devotees flock to get a glimpse of lord Shiva, before entering the temple the couple take a dip in the holy Netravathi river, after taking a dip the
								couple come across cashew nut trees and of them one such tree houses a big cashew apple hung on to a topmost branch and the woman urges to eat, the husband tries
								all he could and so does his old father, after a while an old Natha Sadhu passes on the same route while witnessing the event he walks close the lady and says you
								are going to blessed with a fruit(prasada) and soon after he walks past the trees and disappears the cashew fruit comes crashing down, the lady reveres it as a
								blessing and eats the fruit and they all finish their visit to the temple and return to their house after which a boy will be born of the couple and so the boys dad
								names him Prasada.
							</p>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="childhood-section">
				<Container>
					<Row>
						<Col md={12}>
							<h2 className="display-6 text-black fw-bold mb-4">His childhood</h2>

							<p>
								His first lesson in spirituality came from his father at the age of 5, who was a practitioner of BKS Iyengar Yoga who had then introduced him to Hatha yoga, having
								quested a long way he was actively involved in civil community services throughout his adolescence such as Scouts, NCC and has staged various Street plays to
								protest and bring awareness to the general public.
							</p>
							<p>
								Having born to a Hindu family he would perform religious practices with his mother, being brought up in an Islamic neighborhood he had learnt and practiced Islamic
								teachings, gaining insight into the knowledge of Quran, his involvement in Christianity came from his schooling in a Christian institution where he would attend
								Church gatherings to gain knowledge from Bible. His mother was an orthodoxly religious person while his father a practical man who mostly believed in social service
								than performing rituals. Being born a Hindu and having experienced diverse religions he had learnt to selflessly serve humanity from his father and found the inner
								meaning and purpose behind the religious rituals from his mother.{" "}
							</p>
							<p>
								On one such occasion during his summer holidays after he had completed his 10th grade examination he gets a call from his NCC and Painting master who instructs him
								to head to Kaveri Ashram while he was living in Veerajpet, Coorg that he go a paint a logo of Sri Ramakrishna Mutt in the ashram's podium and after he finishes the
								ashram chief greets him and asks him to come back to the same place on a particular date and they have planned to honor him with a gift, he arrives back at the
								ashram on the said date to witness scores of people in the ashram and soon after a program takes start and the young boy Sri Prasad will be called on to the stage
								and will be presented a Bhagavat Gita book, after the program the chief of ashram a Swamiji of highest rank speaks of a discourse from chapter 4 of Bhagavat Gita,
								there he speaks of what a god is like, he says at every interval in time he will be born again and again, even Lord Krishna is one such avatar and as per Bhagavat
								Gita Krishna himself says that he will born back as Kalki which is another avatar of the Lord Vishnu, he further quotes how Krishna tells Arjuna that he has
								propounded the Gita to Brahma, Surya, Manu, Ikshvaku and so on, then Arjuna ask Krishna how could you do so when they were in existence several 100s and 1000s of
								years ago, for which Lord Krishna replies that though I am born now, I remember all of my previous births and that is not possible with you Arjuna. The chief of the
								ashram interprets this as, this universal consciousness is born as Rama, Krishna, Jesus, Moses, Ibrahim, Guru Nanak and even Mahatma Gandhi, now after listening to
								this Sri Prasad had gained real gift of his life, it was a grand opening to his quest for truth, which otherwise he was convinced that Jesus is true messenger of
								god who is the son of the Lord as per his Christian learnings, another message had put him in great dilemma which is from Islamic teachings that there is no other
								that befits a god other than allah and more so when he came home to see several pictures of deities in the puja house. He started learning from the Gita and in BG
								he comes across Prasthana Triya which says how a spiritual aspirant must know 3 scriptures, they are 10 Upanishads, Bhagavat Gita and Brahmasutra, after reading
								these carefully he comes to know of what is Parabrahma, Jeeva-Jagat and Brahma and about what the scriptures are actually trying to tell, so later he comes to a
								conclusion that Bible and Quran are nothing but smritis as compared to several in our Hindu culture and these books are nothing but constitutions of the past and
								the people spreading it are spreading the thoughts which are so limited as compared to our Santhana Dharma.
							</p>
							<p>
								From here on and with the previous practice of yoga and other yogic related practices Sri Prasad quested a long way seeking from several yogis and siddhas and the
								fruit of which was to be borne later.
							</p>
						</Col>
					</Row>
				</Container>
			</section>

			<section>
				<Container>
					<h2 className="display-5 text-black fw-bold mb-4 mt-5">Founding of an Organization</h2>
					<p>
						Sri Prasad established an organization in 2012 and named it “I and You Being Together Foundation”, a non -profit making, non-religious and volunteer organization that
						aims in bringing stress-free, disease-free, violence-free and self-realization in individuals to form a holistic society, also dealing with several service activities
						on Social, Environmental and spiritual aspects. In the year 2014, he resigned his job and engaged himself in service activities. I and You Being Together foundation has
						its main office in Bangalore-Karnataka, India and has established its branches in several states of India and overseas.
					</p>
					<p>The organization functions under the thriving service of its volunteers from India and various countries has illumined the lives of several million people.</p>
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
