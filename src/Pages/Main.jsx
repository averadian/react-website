// Page Imports
import Home from './Home/Home';
// Component Imports
import Header from './../Components/Header/Header';
// Package Imports
import { useLocation, Outlet } from "react-router-dom";

const Main = (props) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="app">
      <Header OverlayUp={props.OverlayUp} AccentColor={props.AccentColor} />
      {pathname === "/" && <Home AccentColor={props.AccentColor} />}
      {pathname !== "/" && <Outlet />}
    </div>
  );
}

export default Main;