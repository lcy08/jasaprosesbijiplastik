import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Parallax({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]); // adjust range for effect

  return (
    <motion.div ref={ref} style={{ y }} className="">
      {children}
    </motion.div>
  );
}
export default Parallax;