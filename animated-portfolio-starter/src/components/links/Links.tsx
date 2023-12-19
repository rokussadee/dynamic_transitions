import {motion, AnimatePresence} from "framer-motion";
import "./links.scss";
import { NavLink, NavLinkProps } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    class: "active",
    transition: {
      duration: .5
    }
  },
  closed: {
    class: "inactive"
  },
};

const Links = () => { 
  const items = ["Brutal Death", "Tech Death", "Black", "Prog", "Gore"]
  return ( 
    <motion.ul className="links" variants={variants}>
    {items.map((item) => (
      <motion.li
        key={item}
      >
      <AnimatePresence>
      <NavLink
        to={`/${item}`} 
        key={`${item}_link`}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <p key={item}>
        {item}
        </p>
      </NavLink>
      </AnimatePresence>
      </motion.li>
    ))}
    </motion.ul>
    )
};

export default Links;
