// Page Imports
import Home from './Home/Home';
// Component Imports
import Header from './../Components/Header/Header';
// Package Imports
import { useLocation, Outlet } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="app">
      <Header />
      {pathname === "/" && <Home />}
      {pathname !== "/" && <Outlet />}
    </div>
  );
}

export default Main;