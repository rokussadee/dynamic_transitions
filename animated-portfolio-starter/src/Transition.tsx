import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface TransitionProps {
  children: ReactNode;
}

const Transition: React.FC<TransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <motion.div
        key={location.pathname}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 0] }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className='slide-in bg-red trans'
      />
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.2 }}
>
  {children}
</motion.div>

      {/* <motion.div
        key={location.pathname}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className='slide-out'
      /> */}
    </>
  );
};

export default Transition;
