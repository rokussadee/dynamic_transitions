import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar.tsx";
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
      </div>
   </div>
 )
}

export default Navbar;
