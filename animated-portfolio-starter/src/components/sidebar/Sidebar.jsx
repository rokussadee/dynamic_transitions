import "./sidebar.scss";
import Links from "../links/Links";
import {useState, useEffect} from "react";
import {motion} from "framer-motion";

const variants = {
  open: {
    width: 200,
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    width: 100,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div 
      className="sidebar" 
      animate={open ? "open" : "closed"}
      whileHover="open"
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
    </motion.div>
  )
};

export default Sidebar;
