import {AnimatePresence} from "framer-motion";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar.tsx";
import Collection from "./components/collection/Collection.tsx";
import Transition from "./Transition";

const Navigation = () => {
 return (
  <AnimatePresence mode="wait">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/Brutal Death" element={<Transition><section><Collection genre="Brutal Death Metal"/></section></Transition>}/>
        <Route path="/Gore" element={<Transition><section><Collection genre="Goregrind / Gorenoise"/></section></Transition>}/>
        <Route path="/Black" element={<Transition><section><Collection genre="Black Metal"/></section></Transition>}/>
      </Routes>
    </Router>
  </AnimatePresence>
 ) 
}

export default Navigation;

