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
            <div className="container">
                <Drawer isOpen={isDrawerOpen} openDrawer={openDrawer}/>
                <Outlet />
            </div>
            <Header handleDrawer={openDrawer} />
        </div>
    </>
  )
}

export default Layout
