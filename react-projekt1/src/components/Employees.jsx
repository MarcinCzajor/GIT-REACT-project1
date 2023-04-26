import React from "react";
import DeeDee from "../pictures/deedee.webp";
import Dexters_Lab from "../pictures/dexters_lab.jpg";

const Employees = () => {
	return (
		<div id="employees" className="spec">
			<div className="container">
				<h2>Nasi Specjaliści</h2>
				<div className="employeeContainer">
					<div className="employeePicture">
						<img src={Dexters_Lab} className="dex" alt="dexter" />
					</div>
					<div className="empText">
						<h4>Dexter HR</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Expedita temporibus provident ipsam nesciunt
							velit ut quia repudiandae cum, in repellat, est
							reprehenderit, beatae aut magni consequatur veniam
							adipisci dignissimos eius?
						</p>
					</div>
				</div>
				<div className="employeeContainer">
					<div className="employeePicture">
						<img src={DeeDee} className="deedee" alt="deedee" />
					</div>
					<div className="empText">
						<h4>Dee Dee PR</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Expedita temporibus provident ipsam nesciunt
							velit ut quia repudiandae cum, in repellat, est
							reprehenderit, beatae aut magni consequatur veniam
							adipisci dignissimos eius?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Employees;
