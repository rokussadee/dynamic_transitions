import {motion} from "framer-motion";
import {useState, useEffect} from "react";

const Logo = () =>{

   const [paths, setPaths] = useState({
    logo: { d: "" },
    logo_2: { d: "" },
  });

  useEffect(() => {
    const fetchPaths = async () => {
      try {
        const response = await fetch("/svg_paths.json");
        const data = await response.json();
        setPaths(data);
      } catch (error) {
        console.error("Error fetching SVG paths:", error);
      }
    };

    fetchPaths();
  }, []);

  const variants = {
    default: {
      d: paths.logo.d
    },
 
    hover: {
      d: paths.logo_2.d
    },
  };

  return (
    <div>
          <motion.div 
        className="bg"
        whileHover="hover"
        initial="default"
        animate="default">
        <motion.svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            variants={variants}
            strokeWidth="1"
            fill="none"
            stroke="grey">
          </motion.path>
        </motion.svg>
      </motion.div>
    </div>
  )
};

export default Logo;
