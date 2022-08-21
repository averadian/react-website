// Page Imports
import Home from './Home/Home';
// Package Imports
import { useLocation, Outlet } from "react-router-dom";

const Main = (props) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="app">
      {pathname === "/" && <Home OverlayUp={props.OverlayUp} AccentColor={props.AccentColor} />}
      {pathname !== "/" && <Outlet />}
    </div>
  );
}

export default Main;