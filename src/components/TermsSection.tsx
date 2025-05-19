import React from 'react';

interface TermsSectionProps {
  title: string;
  content: string | React.ReactNode;
}

const TermsSection: React.FC<TermsSectionProps> = ({ title, content }) => {
  return (
    <section className="my-8 py-10 px-6 md:px-10 bg-gradient-to-br from-[#23242a]/80 to-[#181a1f]/90 rounded-2xl shadow-lg border border-[#3b82f6]/40">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-[#3b82f6] border-b border-[#3b82f6]/30 pb-3 tracking-wide">
          {title}
        </h3>
        <div className="text-gray-200 space-y-4 rtl text-base md:text-lg">
          {typeof content === 'string' ? (
            <p>{content}</p>
          ) : (
            Array.isArray(content.props?.children) ? (
              <ul className="list-none space-y-3">
                {(content.props.children as React.ReactNode[]).map((li, i) => {
                  if (React.isValidElement(li)) {
                    return (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#3b82f6] text-lg mt-1">✓</span>
                        <span>{li.props.children}</span>
                      </li>
                    );
                  } else {
                    return (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#3b82f6] text-lg mt-1">✓</span>
                        <span>{li}</span>
                      </li>
                    );
                  }
                })}
              </ul>
            ) : content
          )}
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
