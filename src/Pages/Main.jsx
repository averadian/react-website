// Page Imports
import Home from './Home/Home';
// Component Imports
import Header from './../Components/Header/Header';
// Package Imports
import { useLocation, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const Main = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="app">
        <Header />
        {pathname === "/" && <Home />}
        {pathname !== "/" && <Outlet />}
      </div>
    </motion.div>
    
  );
}

export default Main;