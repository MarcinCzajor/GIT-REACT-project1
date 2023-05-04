import React from "react";
import OfferBox from "./OfferBoxTable";

const Offer = () => {
	const offerBoxTable = [
		{ name: "usługa 1", isNew: true },
		{ name: "usługa 2", isNew: false },
		{ name: "usługa 3", isNew: false },
		{ name: "usługa 4", isNew: false },
		{ name: "usługa 5", isNew: false },
		{ name: "usługa 6", isNew: false },
	];

	const offerBoxMap = offerBoxTable.map((box, index) => {
		return (
			<OfferBox key={index} isNew={box.isNew} name={box.name}></OfferBox>
		);
	});

	return (
		<div id="offer" className="offerBackground">
			<div className="container">
				<h3>Czym zajmuje się nasza fima?</h3>
				<div className="boxContainer">{offerBoxMap}</div>
			</div>
		</div>
	);
};

export default Offer;
