import React from 'react';
import Navigation from '../components/Navigation';
import TermsSection from '../components/TermsSection';
import Footer from '@/components/Footer';
import { FileText, AlertTriangle, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const TermsConditions: React.FC = () => {
  const { t } = useTranslation();

  const title     = t('terms.title');
  const intro     = t('terms.intro');
  const notice    = t('terms.notice');
  const sec       = t('terms.sections', { returnObjects: true }) as any;
  const contact   = t('terms.contact', { returnObjects: true }) as { heading: string; text: string };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <Navigation />
      <div className="h-24 md:h-28"></div>

      <main className="flex-1 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <div className="flex items-center mb-8">
            <FileText className="h-10 w-10 text-purple-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400">
              {title}
            </h1>
          </div>

          {/* Intro Box */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 mb-10 shadow-lg border border-white/10">
            <p className="text-gray-300 leading-relaxed">{intro}</p>
            <div className="flex items-center mt-4 text-yellow-400">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <p className="text-sm">{notice}</p>
            </div>
          </div>

          {/* Sections */}
          <TermsSection
            title={sec.general.title}
            content={
              <ul className="list-inside space-y-3 text-gray-300">
                {sec.general.items.map((item: string, i: number) => (
                  <li key={i} className="flex">
                    <Check className="h-5 w-5 text-green-500 mt-1 ml-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            }
          />

          <TermsSection
            title={sec.events.title}
            content={<p className="text-gray-300">{sec.events.text}</p>}
          />

          <TermsSection
            title={sec.discipline.title}
            content={
              <div>
                <p className="text-gray-300">{sec.discipline.text}</p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
                  {sec.discipline.items.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            }
          />

          <TermsSection
            title={sec.ip.title}
            content={<p className="text-gray-300">{sec.ip.text}</p>}
          />

          <TermsSection
            title={sec.changes.title}
            content={<p className="text-gray-300">{sec.changes.text}</p>}
          />

          {/* Contact Box */}
          <div className="mt-12 p-6 rounded-lg bg-white/5 backdrop-blur-md shadow border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-purple-300">
              {contact.heading}
            </h3>
            <p className="text-gray-300">{contact.text}</p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
