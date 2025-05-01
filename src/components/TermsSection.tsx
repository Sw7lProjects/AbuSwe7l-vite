
import React from 'react';

interface TermsSectionProps {
  title: string;
  content: string | React.ReactNode;
}

const TermsSection: React.FC<TermsSectionProps> = ({ title, content }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 text-streamer-blue border-b border-streamer-blue/30 pb-2">
        {title}
      </h3>
      
      <div className="text-gray-300 space-y-3 rtl">
        {typeof content === 'string' ? (
          <p>{content}</p>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default TermsSection;
