import { Outlet } from "react-router-dom";
import './Layout.scss';

const Layout = () => {
	return (
		<>
			<div className="base-layout">
				<div className="container">
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default Layout
