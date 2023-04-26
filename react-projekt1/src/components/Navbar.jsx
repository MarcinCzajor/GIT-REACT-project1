import React from "react";
import Logo from "../pictures/logo.jpg";

const Navbar = () => {
	return (
		<div className="navigation">
			<div className="container">
				<div className="dFlex">
					<img src={Logo} height="50px" alt="logo" />
					<ul>
						<li><a href="#employees">o nas</a></li>
						<li><a href="#offer">oferta</a></li>
						<li><a href="#employees" className="notAllowed">kontakt</a></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
