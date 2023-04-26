//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Employees from "./components/Employees";
import Offer from "./components/Offer";
import Foot from "./components/Foot";

function App() {
	return (
		<>
			<div className="navbar">
				<Navbar />
			</div>
			<div>
				<Main />
				<Employees />
				<Offer />
				<Foot />
			</div>
		</>
	);
}

export default App;
