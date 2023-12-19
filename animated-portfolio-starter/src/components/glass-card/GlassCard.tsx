import "./glass-card.scss";
import Links from "../links/Links.tsx";
import {motion, AnimatePresence, useDragControls, useMotionValue} from "framer-motion";

const GlassCard = ({pathProperties, genre}: {pathProperties: PathProperties, genre:string}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

   const controls = useDragControls();


  return (
    <motion.div className="glassmorph" drag dragControls={controls} >
      <AnimatePresence>
        <Links/>
      </AnimatePresence>
    </motion.div>
  )
}

export default GlassCard;
