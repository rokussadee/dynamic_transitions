import "./sidebar.scss";
import Links from "../links/Links";
import {useState, useEffect} from "react";
import {motion} from "framer-motion";

const variants = {
  open: {
    width: 250,
    transition: {
      type: "tween",
      stiffness: 20,
    },
  },
  closed: {
    width: 100,
    transition: {
      type: "tween",
      velocity:50
    },
  },
};

const gradientVariants = {
  open: {
    left: 150,
    transition: {
      type: "tween",
      stiffness: 20,
    },
  },
  closed: {
    left: 1,
    transition: {
      ease: "backOut",
      type: "tween",
      delay: .5,
      velocity:50
    },
  }
}

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
      <motion.div className="gradient-wrapper"
        variants={gradientVariants}
      ></motion.div>
    </motion.div>
  )
};

export default Sidebar;
