import React, { useState } from "react";
import { Megaphone, X } from "lucide-react";
import MainAdsSection from "@/components/MainAdsSection";

const AdBox = ({
  title = "Ads",
  message = (
    <>
      Download the Jahez app and use code <span className="font-bold">AS7</span>
      <br />
      Enjoy cashback and discounts!
    </>
  ),
}) => {
  const [show, setShow] = useState(true);
  const [hideAnim, setHideAnim] = useState(false);

  // زر عائم لإظهار الكارد من جديد
  const [showButton, setShowButton] = useState(false);

  const handleClose = () => {
    setHideAnim(true);
    setTimeout(() => {
      setShow(false);
      setShowButton(true);
      setHideAnim(false);
    }, 350); // نفس مدة الأنيميشن
  };

  const handleShow = () => {
    setShow(true);
    setShowButton(false);
  };

  return (
    <>
      {show && (
        <div
          className={`fixed top-6 right-6 z-[9999] w-[340px] max-w-full rounded-2xl border border-[#5a6cff] bg-gradient-to-br from-[#23242a] via-[#181a1f] to-[#23242a] p-5 shadow-[0_0_24px_#5a6cff55] transition-transform duration-300 ${
            hideAnim ? "translate-x-[400px] opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-2/3 h-2 rounded-b-full bg-gradient-to-r from-[#3b82f6]/40 via-white/10 to-[#5a6cff]/40 opacity-60 blur-sm z-10" />
          <button
            onClick={handleClose}
            className="absolute top-2 left-2 text-gray-400 hover:text-red-400 transition-colors z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex flex-col items-center relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#5a6cff] tracking-wide">{title}</span>
              <Megaphone className="w-5 h-5 text-[#5a6cff]" />
            </div>
            <div className="w-2/3 border-t border-[#5a6cff] mb-3" />
            <div className="w-full rounded-lg px-4 py-3 text-center text-white font-semibold bg-gradient-to-r from-[#3b82f6] to-[#a78bfa] shadow">
              {message}
            </div>
          </div>
        </div>
      )}
      {showButton && (
        <button
          className="fixed bottom-6 right-6 z-[9999] bg-gradient-to-r from-[#3b82f6] to-[#5a6cff] text-white rounded-full shadow-lg p-3 hover:scale-110 transition-all"
          onClick={handleShow}
          aria-label="Show Ads"
        >
          <Megaphone className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default AdBox; 