import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import './Layout.scss';

const Layout = () => {
  return (
    <>
        <div className="base-layout">
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default Layout