import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#23242a] to-[#181a1f] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center"
      >
        <h1 className="text-8xl font-extrabold mb-6 select-none drop-shadow-lg bg-gradient-to-r from-[#3b82f6] to-[#5a6cff] text-transparent bg-clip-text">404</h1>
        <p className="text-2xl text-white mb-8 font-semibold">Oops! The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#3b82f6] to-[#5a6cff] text-white text-lg font-bold rounded-full shadow-lg hover:from-[#5a6cff] hover:to-[#3b82f6] transition-all duration-300"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
