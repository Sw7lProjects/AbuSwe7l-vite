import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCheck = () => {
    if (!loading && !success) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          navigate("/");
        }, 800);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#23242a] to-[#181a1f]">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-24 mb-4 text-center drop-shadow-lg">Welcome to AbuSwe7l</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 text-center max-w-xl">
          AbuSwe7l is your exclusive destination for gaming, streaming, and community fun. Join us for daily streams, tournaments, and a vibrant community experience!
        </p>
        <div className="flex items-center border border-[#3b82f6] rounded shadow bg-[#23242a] px-8 py-6 mb-8 cursor-pointer select-none" onClick={handleCheck}>
          <input
            type="checkbox"
            className="w-6 h-6 mr-3 accent-[#3b82f6] bg-background-dark border-[#3b82f6] cursor-pointer"
            id="verify"
            checked={success}
            disabled={loading || success}
            readOnly
          />
          <label htmlFor="verify" className="text-white font-medium cursor-pointer text-base select-none flex items-center">
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                جارِ التحقق...
              </>
            ) : success ? (
              <>
                <svg className="h-6 w-6 text-green-400 mr-2" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                تم التحقق!
              </>
            ) : (
              "I am not a robot"
            )}
          </label>
        </div>
      </div>
      <footer className="absolute bottom-4 left-0 right-0 w-full text-center text-xs text-gray-500">
        &copy; AbuSwe7l {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Welcome; 