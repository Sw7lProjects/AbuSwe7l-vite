import React from "react";

const MainAdsSection: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-8 px-2">
      <div className="relative bg-gradient-to-br from-[#23242a] via-[#232a3b] to-[#377DFF] rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-10 p-4 md:p-8 max-w-4xl w-full overflow-hidden border border-[#377DFF]/40">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-right">
          <img
            src="https://files.kick.com/images/channel-links/2007781/image/130f8219-1f72-4af0-8790-f81b9a77db9a"
            alt="Tecsh Ad"
            className="w-full max-w-md rounded-2xl mb-4 md:mb-0 md:mr-6 shadow-lg border-2 border-[#377DFF]/30"
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-right">
          <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#3b82f6] to-[#5a6cff] text-transparent bg-clip-text mb-2 drop-shadow-lg">
            TECSH
          </h2>
          <p className="text-lg md:text-xl font-bold text-white mb-4">...and more</p>
          <p className="text-base md:text-lg text-white/90 font-medium mb-2">
            Tecsh provides you with high-quality, unique products that meet the needs of gamers and content creators — all at competitive prices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainAdsSection; 