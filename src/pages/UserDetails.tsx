import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { users as usersData } from '../lib/data';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from data file
    const foundUser = usersData.find(u => u.id === id);
    setUser(foundUser || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#23242a] to-[#181a1f] flex flex-col">
        <Navigation />
        <div className="flex-1 flex justify-center items-center">
          <div className="text-center text-base sm:text-lg animate-pulse text-gradient">⏳ Loading user data...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#23242a] to-[#181a1f] flex flex-col">
        <Navigation />
        <div className="flex-1 flex justify-center items-center">
          <div className="text-center p-4 sm:p-6 card-primary">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gradient mb-4">❌ User not found</h2>
            <Link to="/dashboard" className="text-[#3b82f6] hover:text-[#60a5fa] transition duration-200">
              Back to Dashboard
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const avatarUrl = user.avatar
    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
    : 'https://via.placeholder.com/150';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#23242a] to-[#181a1f] flex flex-col">
      <Navigation />
      <div className="h-20 md:h-28"></div>
      <main className="flex-1 py-8 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto card-primary p-6 sm:p-10">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-center text-gradient mb-6 sm:mb-10">🧍‍♂️ User Details</h1>

          <div className="flex justify-center mb-6 sm:mb-10">
            <img
              src={avatarUrl}
              alt="User Avatar"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 border-[#3b82f6] shadow-lg hover:shadow-[#3b82f6]/20 transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-base sm:text-lg">
            <InfoItem label="🆔 ID" value={user.id} />
            <InfoItem label="👤 Username" value={user.username} />
            <InfoItem label="🌍 Global Name" value={user.globalName || 'N/A'} />
            <InfoItem label="📧 Email" value={user.email || 'N/A'} />
            <InfoItem label="📱 Phone" value={user.phone || 'N/A'} />
            <InfoItem label="🔐 Verified" value={user.verified ? '✅ Yes' : '❌ No'} />
            <InfoItem label="🛡️ MFA Enabled" value={user.mfaEnabled ? '🔒 Yes' : '🔓 No'} />
            <InfoItem label="🔞 NSFW Allowed" value={user.nsfwAllowed ? '✅ Yes' : '❌ No'} />
            <InfoItem label="📳 Mobile User" value={user.mobile ? '📱 Yes' : '❌ No'} />
            <InfoItem label="💻 Desktop User" value={user.desktop ? '🖥️ Yes' : '❌ No'} />
            <InfoItem label="🤖 Bot" value={user.bot ? '✅ Yes' : '❌ No'} />
            <InfoItem label="🧬 System User" value={user.system ? '✅ Yes' : '❌ No'} />
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Link
              to="/dashboard"
              className="modern-button inline-flex items-center text-sm sm:text-base"
            >
              ⬅️ Back to Dashboard
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string | number }) => (
  <div className="bg-gradient-to-br from-[#3b82f6]/10 to-[#5a6cff]/10 rounded-lg p-3 sm:p-4">
    <span className="font-semibold text-gradient text-sm sm:text-base">{label}:</span>
    <span className="ml-2 text-white text-sm sm:text-base">{value}</span>
  </div>
);

export default UserDetails;
