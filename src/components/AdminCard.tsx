import React from 'react';
import { Shield, Award, Star, Code, Users, Crown } from 'lucide-react';

interface AdminCardProps {
  name: string;
  role: string;
  description: string;
  imageUrl?: string;
}

const getRoleIcon = (role: string) => {
  switch (role.toLowerCase()) {
    case 'owner & ceo':
      return <Crown className="h-5 w-5 animate-pulse text-primary" />;
    case 'founder & ceo':
      return <Crown className="h-5 w-5 animate-bounce text-primary" />;
    case 'lead developer':
      return <Code className="h-5 w-5 animate-spin text-primary" />;
    case 'community manager':
      return <Users className="h-5 w-5 animate-pulse text-primary" />;
    default:
      return <Star className="h-5 w-5 animate-spin text-primary" />;
  }
};

const getRoleBadgeColor = (role: string) => {
  return 'bg-gradient-to-r from-primary/30 to-accent/30 text-primary border border-primary/40 shadow-[0_0_8px_2px_#5a6cff55]';
};

const AdminCard: React.FC<AdminCardProps> = ({ name, role, description, imageUrl }) => {
  return (
    <div
      className="relative rounded-3xl shadow-xl p-7 bg-gradient-to-br from-[#23242a] via-[#181a1f] to-[#23242a] border border-[#3b82f6]/30 group overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_32px_4px_#3b82f6aa]"
    >
      {/* لمعة خفيفة أعلى البطاقة */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-2/3 h-2 rounded-b-full bg-gradient-to-r from-[#3b82f6]/40 via-white/10 to-[#5a6cff]/40 opacity-60 blur-sm z-10" />
      {/* متدرج متحرك حول الصورة */}
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-tr from-[#3b82f6] via-[#5a6cff] to-[#23242a] p-[3px] shadow-[0_0_24px_4px_#3b82f6bb] animate-gradient-spin group-hover:shadow-[0_0_32px_8px_#5a6cffcc] transition-all duration-300">
        <div className="w-full h-full rounded-full bg-background-dark flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110" 
            />
          ) : (
            <div className="text-3xl font-extrabold bg-gradient-to-r from-[#3b82f6] to-[#5a6cff] text-transparent bg-clip-text">
              {name.charAt(0)}
            </div>
          )}
        </div>
      </div>
      <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-1 drop-shadow-lg bg-gradient-to-r from-[#3b82f6] to-[#5a6cff] text-transparent bg-clip-text">
        {name}
      </h3>
      <div className={`flex items-center justify-center gap-1 px-3 py-1 rounded-full mt-1 mb-3 bg-gradient-to-r from-[#23242a]/30 to-[#181a1f]/30 border border-[#3b82f6]/40 shadow-[0_0_8px_2px_#3b82f655] transition-all duration-300`}> 
        {getRoleIcon(role)}
        <span className="ml-1 font-bold uppercase tracking-wide text-sm bg-gradient-to-r from-[#3b82f6] to-[#5a6cff] text-transparent bg-clip-text">{role}</span>
      </div>
      <p className="text-gray-100 text-center leading-relaxed font-medium">{description}</p>
      {/* Glow effect */}
      <div className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-60 transition-all duration-300 blur-2xl bg-gradient-to-r from-[#3b82f6]/30 via-[#5a6cff]/20 to-[#23242a]/30 z-0" />
    </div>
  );
};

export default AdminCard;

// tailwind animation
// in tailwind.config.js add:
// extend: { keyframes: { 'gradient-spin': { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '100% 50%' } } }, animation: { 'gradient-spin': 'gradient-spin 3s linear infinite' } }
