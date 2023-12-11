import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
    <Sidebar />
      <div className="wrapper">
       <span>
          Navbar
        </span>
        <div className="social">
          <a href="#">
            <img src="facebook.png"/></a>
        </div>

      </div>
   </div>
 )
}

export default Navbar;
