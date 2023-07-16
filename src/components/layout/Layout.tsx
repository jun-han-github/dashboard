import { Outlet } from "react-router-dom";
import './Layout.scss';
// import ActionBar from "../action-bar/ActionBar";

const Layout = () => {
	return (
		<div className="base-layout">
			<Outlet />
		</div>
	)
}

export default Layout
