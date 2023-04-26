import React from "react";
import Logo from "../pictures/logo.jpg";

const Navbar = () => {
	return (
		<div className="navigation">
			<div className="container">
				<div className="dFlex">
					<img src={Logo} height="50px" alt="logo" />
					<ul>
						<li>o nas</li>
						<li>oferta</li>
						<li>kontakt</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
