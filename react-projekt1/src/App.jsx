import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Employees from "./components/Employees";
import Offer from "./components/Offer";
import Foot from "./components/Footer";

const App = () => {
	return (
		<>
			<Navbar />
			<Main />
			<Employees />
			<Offer />
			<Foot />
		</>
	);
}

export default App;
