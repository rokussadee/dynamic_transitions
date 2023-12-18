import { motion} from "framer-motion";
import {useState, useEffect, useRef} from "react";
import "./logo.scss";

const svgVariants = {
  hidden: { 
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 1,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      duration: 1,
      ease: "easeInOut"
    }
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0 
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      pathLength: {  duration: 10, ease: "easeInOut" },
      opacity: {duration: 1 },
      when: "beforeChildren", 
    }
  },
  exit: {
    opacity: 0,
    pathLength: 0,
    transition: {
      pathLength: { duration: .5, ease: "easeInOut" },
      opacity: { duration: 1 },
    },
  },
}

const imgVariants = {
  hidden: {
    opacity: 0,
    filter: "contrast(0%) brightness(0) saturation(0) blur(20px)"
  },
  visible: {
    opacity: 0,
    filter: "contrast(100%) brightness(1) saturation(1) blur(5px)",
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    filter: "contrast(0%) brightness(0) saturation(0) blur(20px)",
    transition: {
      filter: { duration: .1, ease: "easeInOut" },
      opacity: { duration: 0.01 },
    }
 
  }
}

const Logo = ({pathProps}: {pathProps: PathProperties}) =>{
  const [svgRef, setSvgRef] = useState<SVGSVGElement | null>(null);
  useEffect(() => {
    const updateViewBox = () => {
      if(svgRef) {
        const boundingBox = svgRef.getBBox();
        const padding = 50; // Add padding if needed
        const newViewBox = `-${boundingBox.width / 2 + padding * 2} -${boundingBox.height/ 2 + padding * 2} ${boundingBox.width + padding * 2} ${boundingBox.height + padding * 2}`;
        svgRef.setAttribute("viewBox", newViewBox);
      }
    };
    
    const initialSetDAttribute = () => {
      if(svgRef) {
        svgRef.querySelector("path")?.setAttribute("d", pathProps.d);
      }
    };

    updateViewBox();
    
    initialSetDAttribute();
    
    window.addEventListener("resize", updateViewBox);

    return () => {
      window.removeEventListener("resize", updateViewBox);
    };
  }, [pathProps.d, svgRef]);

  return (
    <div
    key={`${pathProps.name}_logocomponent`}
    >
      <motion.div 
        className="logo-wrapper"
        initial="hidden"
        animate="visible"
        exit="exit"
        // variants={svgVariants}
        >
        <motion.svg 
          ref={(ref)=>setSvgRef(ref)}
          // variants={svgVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="logo-svg" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="turbulence">
              <feTurbulence type="turbulence" baseFrequency="0.15 0.14" numOctaves="3" result="NOISE"></feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="10"></feDisplacementMap>
              <feComponentTransfer>
                <feFuncR type="gamma" exponent="1.9" amplitude="1.9" offset="0" />
                <feFuncG type="gamma" exponent="1.9" amplitude="1.9" offset=".4" />
                <feFuncB type="gamma" exponent="2.9" amplitude="1.9" offset=".1"/>
              </feComponentTransfer>
            </filter>
            <filter id="blur">
              <feTurbulence type="turbulence" baseFrequency="0.3 0.5" numOctaves="10" result="NOISE@"></feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="NOISE@" scale="10"></feDisplacementMap>
              <feGaussianBlur stdDeviation="10" in="SourceGraphic" result="BLUR"></feGaussianBlur>
            </filter>
          </defs>
          <motion.path 
            className="logo-path"
            variants={pathVariants}
            animate="visible"
            initial="hidden"
            exit="exit"
            d={pathProps.d}
            strokeWidth=".15"
            fill="none"
            stroke="rgba(240, 60, 170, .9)"
          >
          </motion.path>
          <motion.path
            className="blur-path"
            variants={pathVariants}
            animate="visible"
            initial="hidden"
            exit="exit"
            d={pathProps.d}
            strokeWidth="1"
            fill="none"
            stroke="rgba(240, 30, 70, .4)"
          >
          </motion.path>
          <motion.path
            className="path-background"
            variants={pathVariants}
            animate="visible"
            initial="hidden"
            exit="exit"
            d={pathProps.d}
            strokeWidth="6"
            fill="none"
            stroke="rgba(170, 170, 30, .4)"
          >
          </motion.path>
        </motion.svg>
        <motion.img
          variants={imgVariants}
          animate="visible"
          initial="hidden"
          exit="exit"
          className="logo-image"
          src={pathProps.img}
        ></motion.img>
      </motion.div>
    </div>
  )
};

export default Logo;
