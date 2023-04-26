import React from "react";

const Main = () => {
	return (
		<div className="mainPic">
			<div className="overlay">
				<div className="container">
					<div className="mainTextCont">
						<p className="textMain">
							Nasza firma oferuje najwyższej jakości produkty.{" "}
						</p>
						<p className="textMainSm">
							Nie wierz nam na słowo - sprawdź
						</p>
						<button className="button"><a href="#offer">oferta</a></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
