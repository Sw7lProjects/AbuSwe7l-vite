import React from 'react';
import Navigation from '../components/Navigation';
import AdminCard from '../components/AdminCard';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const admins = [
  {
    name: "Saad",
    role: "Owner & CEO",
    description: "Owner of AbuSwe7l Community. Passionate about Gaming, Streaming And Make Youtube Video.",
    imageUrl: "https://cdn.discordapp.com/avatars/1107071123738333224/c3cf04eac51014a32a55596138b38567.webp?size=32"
  },
  {
    name: "SA7 | MoaTaz",
    role: "Founder & CEO",
    description: "Founder of AbuSwe7l Community. Business manager & Marketing for Saad.",
    imageUrl: "https://cdn.discordapp.com/avatars/700903797228175391/857f8522e4ef5ac64465b9d48c4f9c63.webp?size=80"
  },
  {
    name: "!? 0xReLaX",
    role: "Lead Developer",
    description: "A Defensive Security And Software Engineering student deeply interested in backend & frontend development and solving problems.",
    imageUrl: "https://cdn.discordapp.com/avatars/1105670596525834250/c5aeff8b615ee91a97a9ae209753ce9c.webp?size=80"
  },
  {
    name: "iQMusa",
    role: "Community Manager",
    description: "Keeping our community awesome since 2020. Expert in community building.",
    imageUrl: "https://cdn.discordapp.com/avatars/778681849836208148/ab3067fc8fb33b45cafae477526bac67.webp?size=80"
  },
  {
    name: "1hzg",
    role: "Community Manager",
    description: "Keeping our community awesome since 2021. Expert in community building.",
    imageUrl: "https://cdn.discordapp.com/guilds/705247447605313547/users/920681692480548865/avatars/0ab424be2dc5ed59de776dcb06561422.webp?size=128"
  },
  {
    name: "Nelly",
    role: "Community Manager",
    description: "Keeping our community awesome since 2021. Expert in community building.",
    imageUrl: "https://cdn.discordapp.com/avatars/1253080384879595663/09f49e123dbb6d1ab527e13c30468d5f.webp?size=80"
  }
];

const bgShapes = null;

const AdminInfo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#23242a] to-[#181a1f] text-white">
      <Navigation />
      <div className="h-24 md:h-28" />
      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-60 -rotate-2" />
                <div className="relative bg-gradient-to-r from-primary to-accent rounded-xl p-8 shadow-2xl border border-primary/40">
                  <div className="flex items-center justify-center space-x-4">
                    <Shield className="h-12 w-12 text-white drop-shadow-lg" />
                    <h1 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-lg bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      Admin Team
                    </h1>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="bg-background-dark/70 backdrop-blur-xl rounded-2xl p-7 mb-10 shadow-[0_0_32px_4px_#5a6cff55] border border-primary/30">
            <h2 className="text-2xl font-extrabold text-primary mb-4 drop-shadow">About the Team</h2>
            <p className="text-gray">
              The admin team is the heart of the AbuSwe7l channel. They work day and night to ensure every viewer enjoys a safe and exciting experience. With a range of skills and expertise, the team keeps everything running smoothly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admins.map((admin, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <AdminCard 
                  name={admin.name}
                  role={admin.role}
                  description={admin.description}
                  imageUrl={admin.imageUrl}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-background-dark/70 backdrop-blur-xl rounded-2xl p-7 shadow-[0_0_32px_4px_#5a6cff55] border border-primary/30">
            <h2 className="text-2xl font-extrabold text-primary mb-4 drop-shadow">Contacting the Admins</h2>
            <p className="text-gray mb-4">
              Need to reach out? You can contact the team through the following:
            </p>
            <ul className="list-disc list-inside text-gray space-y-2">
              <li>Message moderators directly in the live stream chat</li>
              <li>Connect on the official Discord server</li>
              <li>Send a message through any of our social media platforms</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminInfo;

// tailwind animation
// in tailwind.config.js add:
// extend: { keyframes: { 'pulse-slow': { '0%, 100%': { opacity: 0.7 }, '50%': { opacity: 1 } } }, animation: { 'pulse-slow': 'pulse-slow 6s ease-in-out infinite' } }