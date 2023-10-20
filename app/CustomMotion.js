"use client";
import { motion } from "framer-motion";

export default function CustomMotionWrapper({
  id = "",
  className = "",
  key = "",
  children,
}) {
  return (
    <motion.div
      id={id}
      className={className}
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
