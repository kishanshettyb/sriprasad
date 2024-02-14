import React from "react";
import { Container } from "react-bootstrap";
import ApplyModal from "../components/ApplyModal";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { Seo } from "../components/Seo";

const eshwaridhyana = () => {
	return (
		<Layout>
			<section>
				<Container>
					<PageBanner title="Eshwari Dhyana" />

					<h2 className="display-2 fw-bolder text-start mb-2">Eshwari Dhyana</h2>
					<p>
						Eshwari dhyana is come from a good old Shaktha tradition, Eshwari Dhyana is described as a simple, natural, effortless Dhyana technique that doesn't involve much
						concentration. One uses a Powerful Energized Dhyana mantra as a vehicle to let the mind settle down naturally in its source .
					</p>

					<p className="mb-5">
						In this regard, the main goal of Eshwari Dhyana is to have one's thoughts in the present moment, the process involves transcending thought itself and experiencing a
						state of pure awareness in which one is aware but without an object of thought or feelings, a subjective experience during meditation are clearly reflected in the
						contrasting neurophysiologic states associated with each practice. Eshwari Dhyana has been found to activate the brain's default mode network, which is a natural
						resting state of the brain regular practice of Eshwari Dhyana can result in a state of cosmic consciousness, in which the experience of transcendence is always present
						in one's awareness, even during activity, with greater clarity and focus, One comes to experience one's self as universal and omnipresent. One's identity shifts from
						the individual to the cosmic. Eshwari Dhyana is a simple , effortless yet effective Shaktha method
					</p>
					<ApplyModal btnTitle="Register" variant="primary" size="lg" classes="px-5" />
				</Container>
			</section>
		</Layout>
	);
};

export default eshwaridhyana;
export const Head = () => (
	<Seo
		title="Eshwari Dhyana"
		description=" Eshwari dhyana is come from a good old Shaktha tradition, Eshwari Dhyana is described as a simple, natural, effortless Dhyana technique that doesn't involve much concentration. One uses a Powerful Energized Dhyana mantra as a vehicle to let the mind settle down naturally in its source."
	/>
);
