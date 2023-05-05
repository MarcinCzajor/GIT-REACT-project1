import React from "react";
import Logo from "../pictures/logo.jpg";

const Navbar = () => {
	return (
		<div className="navigation">
			<div className="container">
				<div className="navContainer">
					<img src={Logo} className="mainLogo" alt="logo" />
					<ul className="linkList">
						<li className="linkListItems">
							<a href="#employees" className="linkClass">
								o nas
							</a>
						</li>
						<li className="linkListItems">
							<a href="#offer" className="linkClass">
								oferta
							</a>
						</li>
						<li className="linkListItems">
							<a href="#employees" className="notAllowed">
								kontakt
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
