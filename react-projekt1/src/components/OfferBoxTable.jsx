import React from "react";
import "./Offer";

const OfferBoxTable = ({ name, isNew }) => {
	const boxClass = isNew ? "gridItemNew gridItem" : "gridItem";

	return (
		<div className={boxClass}>
			<div>
				{name}
				{isNew && <p>NOWOŚĆ!</p>}
			</div>
		</div>
	);
};

export default OfferBoxTable;
