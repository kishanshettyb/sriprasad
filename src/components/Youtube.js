import React from "react";
import { Container } from "react-bootstrap";

const Youtube = () => {
	return (
		<section className="youtube-video-section">
			<Container>
				<iframe
					src="https://www.youtube.com/embed/TKdqtu1UN6M?si=AHA-D4mVmmpfeBG-&amp;controls=0"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</Container>
		</section>
	);
};

export default Youtube;
