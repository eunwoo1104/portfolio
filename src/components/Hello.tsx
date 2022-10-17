import React from "react";
import { motion } from "framer-motion";

export const Hello: React.FC = () => (
  <div className="flex flex-col h-screen justify-center items-center space-y-1.5 snap-center">
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-row text-6xl text-white font-extrabold space-x-2"
    >
      <h1>Hello, World!</h1>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -30, 45, 0] }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h1>👋</h1>
      </motion.div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-3xl text-white font-light"
    >
      <p>학생 개발자 최은우 입니다.</p>
    </motion.div>
  </div>
);
