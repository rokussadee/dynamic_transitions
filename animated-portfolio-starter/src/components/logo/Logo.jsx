import {motion} from "framer-motion";
import {useState, useEffect, useRef} from "react";
import "./logo.scss";

const Logo = () =>{

  const [paths, setPaths] = useState({
    logo: { d: "" },
    logo_3: { d: "" },
  });  

  const svgRef = useRef(null);

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

  useEffect(() => {
    const updateViewBox = () => {
      const boundingBox = svgRef.current.getBBox();
      const padding = 5; // Add padding if needed
      const newViewBox = `${boundingBox.x - padding} ${boundingBox.y - padding} ${boundingBox.width + padding * 2} ${boundingBox.height + padding * 2}`;
      svgRef.current.setAttribute("viewBox", newViewBox);
    };
    
    const initialSetDAttribute = () => {
      // Set the initial "d" attribute value
      svgRef.current.querySelector("path").setAttribute("d", paths.logo.d);
    };

    updateViewBox();
    
    initialSetDAttribute();
    
    // Update viewBox whenever paths change
    window.addEventListener("resize", updateViewBox);

    return () => {
      window.removeEventListener("resize", updateViewBox);
    };
  }, [paths]);

  const variants = {
    default: {
      d: paths.logo_3.d
    },
 
    hover: {
      d: paths.logo.d
    },
  };

  return (
    <div>
      <motion.div 
        className="logo-wrapper"
        whileHover="hover"
        initial="default"
        animate="default">
        <motion.svg 
          ref={svgRef}
          className="logo-svg" 
          xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            className="logo-path"
            variants={variants}
            strokeWidth=".1"
            fill="none"
            stroke="white"
            initial={{pathLength: 0}}
            whileInView={{pathLength:1}}
          >
          </motion.path>
          <motion.path
            className="blur-path"
            variants={variants}
            strokeWidth=".1"
            fill="none"
            stroke="red"
            initial={{pathLength: 0}}
            whileInView={{pathLength:1}}
          >
          </motion.path>
        </motion.svg>
      </motion.div>
    </div>
  )
};

export default Logo;
