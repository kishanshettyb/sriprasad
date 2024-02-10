import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const BasicCard = () => {
	return (
		<div className="basic-card">
			<StaticImage className="card-image" src="../images/hero/hero-1.png" alt="Card" />
			<div className="content">
				<h2>Eshwari Kriya</h2>
				<p>
					Most people say that their act was Crying and i hope most of us will agree with that but if you ask me, I would say it’s a big No, do you know why ? because the 1st
					immediate act which we perform was Breathing{" "}
				</p>
			</div>
		</div>
	);
};

export default BasicCard;
