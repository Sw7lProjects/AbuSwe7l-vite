import React from 'react';
import Navigation from '../components/Navigation';
import TermsSection from '../components/TermsSection';
import Footer from '@/components/Footer';
import { FileText, AlertTriangle, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsConditions: React.FC = () => {
  const terms = {
    title: "Terms & Conditions",
    intro: "This page outlines the terms and conditions for watching and participating in AbuSwe7l's channel and events. Please read carefully and follow these rules to ensure a positive experience for everyone.",
    notice: "Participating in the stream means you automatically agree to these terms.",
    sections: {
      general: {
        title: "General Conduct Rules",
        items: [
          "Respect all viewers, moderators, and the channel owner.",
          "Avoid offensive or inappropriate language in the chat.",
          "Do not share inappropriate content or unauthorized external links.",
          "Stay on topic according to the stream's content.",
          "Respect others' privacy and never ask for personal information."
        ]
      },
      events: {
        title: "Event & Contest Participation",
        text: "All followers are welcome to join contests and events as long as they meet the specific terms of each event. Prizes will only be awarded to those who follow the rules."
      },
      discipline: {
        title: "Disciplinary Actions",
        text: "Moderators may take action against users who violate the rules, including:",
        items: [
          "Verbal warnings via chat.",
          "Deletion of inappropriate messages.",
          "Temporary mute or suspension from chat.",
          "Permanent bans for repeated or serious violations."
        ]
      },
      ip: {
        title: "Intellectual Property Rights",
        text: "All content shared in the stream belongs to AbuSwe7l and may not be reused or distributed without permission."
      },
      changes: {
        title: "Changes to Terms",
        text: "AbuSwe7l reserves the right to update these terms at any time. Changes will be announced publicly and take effect immediately upon posting."
      }
    },
    contact: {
      heading: "Contact & Support",
      text: "If you have any questions or concerns about these terms, feel free to contact a moderator or reach out via social media."
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#23242a] to-[#181a1f] text-white">
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
            <FileText className="h-10 w-10 text-[#3b82f6] mr-3" />
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#3b82f6]">
              {terms.title}
            </h1>
          </div>

          {/* Intro Box */}
          <div className="mb-10 rounded-2xl bg-gradient-to-br from-[#3b82f6]/10 via-[#23242a]/80 to-[#181a1f]/80 border border-[#3b82f6]/40 shadow-lg backdrop-blur-md p-6">
            <p className="text-gray leading-relaxed font-medium">{terms.intro}</p>
            <div className="flex items-center mt-4 px-3 py-2 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 shadow">
              <AlertTriangle className="h-5 w-5 text-[#3b82f6] mr-2" />
              <p className="text-sm text-[#3b82f6] font-semibold">{terms.notice}</p>
            </div>
          </div>

          {/* Sections */}
          <TermsSection
            title={terms.sections.general.title}
            content={
              <ul className="list-inside space-y-4 text-gray-200" dir="rtl" style={{textAlign: 'right'}}>
                {terms.sections.general.items.map((item: string, i: number) => (
                  <li key={i} className="pr-1">{item}</li>
                ))}
              </ul>
            }
          />

          <TermsSection
            title={terms.sections.events.title}
            content={<p className="text-gray">{terms.sections.events.text}</p>}
          />

          <TermsSection
            title={terms.sections.discipline.title}
            content={
              <div className="text-gray-200" dir="ltr">
                <ul className="list-none space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#3b82f6] mt-1 mr-2 flex-shrink-0" />
                    <span>Moderators may take action against users who violate the rules, including:</span>
                  </li>
                  <li className="flex items-start ml-8">
                    <Check className="h-5 w-5 text-[#3b82f6] mt-1 mr-2 flex-shrink-0" />
                    <span>Verbal warnings via chat.</span>
                  </li>
                  <li className="flex items-start ml-8">
                  <Check className="h-5 w-5 text-[#3b82f6] mt-1 mr-2 flex-shrink-0" />
                    <span>Deletion of inappropriate messages.</span>
                    </li>
                  <li className="flex items-start ml-8">
                  <Check className="h-5 w-5 text-[#3b82f6] mt-1 mr-2 flex-shrink-0" />
                    <span>Temporary mute or suspension from chat.</span>
                    </li>
                  <li className="flex items-start ml-8">
                  <Check className="h-5 w-5 text-[#3b82f6] mt-1 mr-2 flex-shrink-0" />
                    <span>Permanent bans for repeated or serious violations.</span>
                    </li>
                </ul>
              </div>
            }
          />

          <TermsSection
            title={terms.sections.ip.title}
            content={<p className="text-gray">{terms.sections.ip.text}</p>}
          />

          <TermsSection
            title={terms.sections.changes.title}
            content={<p className="text-gray">{terms.sections.changes.text}</p>}
          />

          {/* Contact Box */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#3b82f6]/10 via-[#23242a]/80 to-[#181a1f]/80 border border-[#3b82f6]/40 shadow-lg backdrop-blur-md p-6">
            <h3 className="text-xl font-bold mb-4 text-[#3b82f6]">
              {terms.contact.heading}
            </h3>
            <p className="text-gray font-medium">{terms.contact.text}</p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
