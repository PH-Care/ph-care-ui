import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
	return (
		<div>
			{window.location.pathname != "/login" && <Navbar></Navbar>}
			<Outlet></Outlet>
			{window.location.pathname != "/login" && <Footer></Footer>}
		</div>
	);
};

export default Main;