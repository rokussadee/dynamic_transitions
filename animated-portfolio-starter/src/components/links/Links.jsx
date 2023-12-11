import {motion} from "framer-motion";
import "./links.scss";

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
    <motion.div className="links" variants={variants}>
    {items.map((item) => (
      <motion.a
        href={`#${item}`}
        key={item}
        variants={itemVariants}
        whileHover={{scale:1.1}}
        whileTap={{scale:0.95}}
      >
      {item.split(" ").map((word,index,array) => (
        <p>
        {word}
        </p>
      ))}
      </motion.a>
    ))}
    </motion.div>
    )
};

export default Links;
