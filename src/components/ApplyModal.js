import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import JotformEmbed from "react-jotform-embed";

const ApplyModal = (props) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Button variant={props.variant} size={props.size} className={props.classes} onClick={handleShow}>
				{props.btnTitle}
			</Button>
			<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" centered show={show} onHide={handleClose}>
				<Modal.Body>
					<JotformEmbed src="https://form.jotform.com/240421983787062" />
				</Modal.Body>
				<Button variant="link" className="close-icon" onClick={handleClose}>
					<StaticImage src="../images/icons/close.svg" alt="" />
				</Button>
			</Modal>
		</>
	);
};

export default ApplyModal;
