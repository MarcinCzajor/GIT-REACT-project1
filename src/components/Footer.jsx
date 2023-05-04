import React from "react";
import facebook from "../pictures/facebook.svg";
import instagram from "../pictures/instagram.svg";

const Footer = () => {
	return (
		<div className="footerMain">
			<div className="footContainer">
				<div className="footer">
					<span>
						<p>Nazwa Firmy - wszelkie prawa zastrzeżone, 2023</p>
					</span>

					<div className="mediaLogo">
						<img src={facebook} alt="facebookLogo" />
						<img src={instagram} alt="instagramLogo" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
