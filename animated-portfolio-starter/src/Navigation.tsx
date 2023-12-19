import {AnimatePresence} from "framer-motion";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes, useLocation} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar.tsx";
import Collection from "./components/collection/Collection.tsx";
import Transition from "./Transition";
import GlassCard from "./components/glass-card/GlassCard.tsx";
import { useParams } from "react-router-dom";

const Navigation = () => {
  return (
    <AnimatePresence mode="wait">
    <Router>
    <Routes>
          <Route
            path="/:genre/:logoIndex"
            element={
              <RouterContents />
            }
          />
        </Routes>
    </Router> 
  </AnimatePresence>
  )
}

const RouterContents = () => {
  const [pathProperties, setPathProperties]= useState<PathProperties | null>(null);
  const [paths, setPaths] = useState<PathProperties[]>([]);
  const [genre, setGenre] = useState<string>("Brutal Death Metal");
  const [logoIndex, setLogoIndex] = useState<number>(0);

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

  useEffect(() => {
    const {  genreParam,  logoIndexParam } = useParams();
    if (genreParam && logoIndexParam) {
      setGenre(genreParam)
      setLogoIndex(parseInt(logoIndexParam));
      fetchPaths();
    }
  }, []);

 return (
  <>
 <Transition><section><Collection genre={genre} initialLogoIndex={logoIndex}/></section></Transition>

    {pathProperties &&
      <GlassCard
      pathProperties={pathProperties}
      genre={genre}
      />
    }
    </>

 ) 
}

export default Navigation;

