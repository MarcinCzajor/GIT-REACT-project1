import React from "react";
import OfferBox from "./OfferBox";

const Offer = () => {
	const offerBoxTable = [
		{ name: "usługa1", isNew: true },
		{ name: "usługa2", isNew: false },
		{ name: "usługa3", isNew: false },
		{ name: "usługa4", isNew: false },
		{ name: "usługa5", isNew: false },
		{ name: "usługa6", isNew: false },
	];
	const offerBoxMap = offerBoxTable.map((box, index) => {
		return (
			<OfferBox key={index} isNew={box.isNew} name={box.name}></OfferBox>
		);
	});
	return (
		<div className="offerBackground">
			<div className="container">
				<h3>Czym zajmuje się nasza fima?</h3>
				<div className="gridContainer">{offerBoxMap}</div>
			</div>
		</div>
	);
};

export default Offer;
