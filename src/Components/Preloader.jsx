import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-amber-400 text-center  text-5xl md:text-7xl font-bold tracking-widest"
            style={{
              fontFamily: "Aerospace", 
              letterSpacing: "4px",
            }}
          >
            B
            <motion.span
              initial={{ rotate: 0,  }}
              animate={{ rotate: 30 , }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }} 
              className="inline-block"
            >
              z
            </motion.span>
            Coder.
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
