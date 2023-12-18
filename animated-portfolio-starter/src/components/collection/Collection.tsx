import Logo from "../logo/Logo.tsx";
import { motion } from "framer-motion-3d";
import { AnimatePresence } from "framer-motion";
import "./collection.scss";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";

const usePrevious = (state: number) => {
  const [tuple, setTuple] = useState([null, state]);
  if(tuple[1] !== state) {
    setTuple([tuple[1], state]);
  };
  return tuple[0];
}

const logoVariants = {
  enter: ({direction, width}: {direction: number, width: number}) => ({ x: direction * width }),
  center: {x: 0 },
  exit: ({direction, width}: {direction: number, width: number})  => ({ x: direction * width })
}

const Collection = ({genre}: {genre: string}) => {
  const [paths, setPaths] = useState<PathProperties[]>([]);
  const [pathProperties, setPathProperties]= useState<PathProperties | null>(null);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  let prevLogoIndex = usePrevious(currentLogoIndex) ?? 0;
  let [ref, { width }] = useMeasure();

  console.log(currentLogoIndex, prevLogoIndex)
  const direction = currentLogoIndex > prevLogoIndex ? 1 : -1;
console.log(direction)
  useEffect(() => {
    const fetchPaths = async () => {
      try {
        const response = await fetch(`/svg_paths_${genre.replace(/ /g,"_").replace(/\//g,"").toLowerCase()}.json`);
        const data = await response.json();
        setPaths(data);
        console.log(data)
        setPathProperties(data[0]);
      } catch (error) {
        console.error("Error fetching SVG paths:", error);
      }
    };
    fetchPaths();
  }, [genre]);
  
  useEffect(() => {
    const handlePathPropertiesChange = () => {
      setPathProperties(paths[currentLogoIndex]);
    }
    console.log(currentLogoIndex)
    handlePathPropertiesChange();
  }, [currentLogoIndex]);


  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      // Move to the previous logo
      setCurrentLogoIndex((currentLogoIndex - 1 + paths.length) % paths.length);
    } else if (event.key === "ArrowRight") {
      // Move to the next logo
      setCurrentLogoIndex((currentLogoIndex + 1) % paths.length);
    }
  };
  
  useEffect(() => {
    // Add event listener for arrow keys
    console.log(width);
    window.addEventListener("keydown", handleKeyDown);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentLogoIndex, paths]);
  
  const motionProps = {
    custom: { direction, width },
    key: currentLogoIndex,
    variants: logoVariants,
    initial: "enter",
    animate: "center",
    exit: "exit",
    transition: { duration: 1 },
  };
  
  return (
    <div 
      ref={ref}
      className="collection-container"
    >
      {(pathProperties && paths[currentLogoIndex]) && (
        <AnimatePresence 
        key={`${pathProperties.name}_animation`}
        custom={motionProps.custom}>
          <motion.div {...motionProps}
          >
            <Logo
                      key={`${pathProperties.name}_logo`}

              pathProps={pathProperties}
            />
          </motion.div>
          <motion.div className="glassmorph">
            <AnimatePresence>
              <motion.h1>
                {genre}
              </motion.h1>
              <motion.div>
                <motion.h2>
                  {pathProperties.name}
                </motion.h2>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
};

export default Collection;
