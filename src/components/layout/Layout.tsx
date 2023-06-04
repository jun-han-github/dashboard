import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import './Layout.scss';
import { useState } from "react";
import Drawer from "../drawer/Drawer";

const Layout = () => {
  const [isDrawerOpen, setDrawer] = useState(false);

  const openDrawer = () => {
    setDrawer(!isDrawerOpen);
  }

  return (
    <>
        <div className="base-layout">
            <Drawer isOpen={isDrawerOpen} openDrawer={openDrawer}/>
            <div className="container">
                <Outlet />
            </div>
            {/* <Header handleDrawer={openDrawer} /> */}
        </div>
    </>
  )
}

export default Layout
