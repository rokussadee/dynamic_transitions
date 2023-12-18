import {motion} from "framer-motion";
import "./links.scss";
import { Link } from "react-router-dom";

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
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => { 
  const items = ["Brutal Death", "Tech Death", "Black", "Prog", "Gore"]
  return ( 
    <motion.ul className="links" variants={variants}>
    {items.map((item) => (
      <motion.li
        key={item}
        variants={itemVariants}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.95}}
      >
      <Link to={`/${item}`} key={item}>
      {item.split(" ").map((word,index,array) => (
        <p key={index}>
        {word}
        </p>
      ))}
      </Link>
      </motion.li>
    ))}
    </motion.ul>
    )
};

export default Links;
