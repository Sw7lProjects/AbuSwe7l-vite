import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e293b] to-[#23242a]">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background to-background-dark z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#60a5fa] to-[#1e40af] mb-6 tracking-tight drop-shadow-lg">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#60a5fa] to-[#1e40af]">
            AbuSwe7l
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow">
          Your ultimate destination for gaming entertainment and community interaction
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="https://discord.gg/vx4UczGd"
            className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-bold text-lg hover:shadow-[0_0_20px_#0066ff] transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
          
          <Link
            to="/terms-conditions"
            className="px-8 py-4 bg-background-light/20 text-white rounded-xl font-bold text-lg border-2 border-primary hover:bg-primary/20 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#23242a] to-transparent"></div>
    </div>
  );
};

export default Hero;