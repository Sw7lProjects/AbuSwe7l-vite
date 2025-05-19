import { useState } from 'react';
import { Link } from 'react-router-dom';
import { users as usersData, serverInfo } from '../lib/data';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const server = serverInfo as any;
  const filteredUsers = usersData.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.id.includes(searchTerm)
  );

  // Derived metrics for channels and messages
  const textChannelsCount = Array.isArray(server.channels)
    ? server.channels.filter((c: any) => c.type === 'text').length
    : server.textChannelCount || 0;
  const voiceChannelsCount = Array.isArray(server.channels)
    ? server.channels.filter((c: any) => c.type === 'voice').length
    : server.voiceChannelCount || 0;
  const totalMessages = server.totalMessages || server.messageCount || 0;
  const createdDate = new Date(server.createdAt).toLocaleDateString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-dark via-background-light to-background-dark text-white">
      <Navigation />
      <div className="h-20 md:h-28"></div>
      <main className="py-6 px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        {server.banner && (
          <div
            className="h-40 sm:h-48 md:h-64 bg-cover bg-center rounded-lg mb-6 sm:mb-8 shadow-lg border border-primary/20"
            style={{ 
              backgroundImage: `url(https://cdn.discordapp.com/banners/705247447605313547/2c7f552f4901f54be61093aaee8a6074.png?size=1024&format=webp&width=1536&height=0)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )}

        {/* Server Info Card */}
        <div className="max-w-4xl mx-auto card-primary mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center px-4 sm:px-6 py-4 bg-gradient-to-br from-background-light/90 to-background/90">
            {server.icon ? (
              <img
                src={`https://images-ext-1.discordapp.net/external/McCo7Nj2JSChxqGDO7DZ62ttup3VVosJid9-UaZ50kI/https/yt3.googleusercontent.com/6skf3aJYTrBh2Vz5MZ2qXaRvjUCxjkHtwZCTCTfSMZ95eSf7uPsDhdefIMGkyEHQeIPF474gIA%3Ds900-c-k-c0x00ffffff-no-rj?format=webp`}
                alt="Server Icon"
                className="w-16 h-16 rounded-full border-2 border-primary mb-4 sm:mb-0 sm:mr-4"
              />
            ) : (
              <div className="w-16 h-16 bg-gradient-to-br from-background-light to-background rounded-full mb-4 sm:mb-0 sm:mr-4 flex items-center justify-center">
                <span className="text-xl">🏷️</span>
              </div>
            )}
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{server.name}</h2>
              <p className="text-sm sm:text-base text-text-secondary">{server.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
            <InfoItem label="ID" value={server.id} />
            <InfoItem label="Region" value={server.region} />
            <InfoItem label="Members" value={server.members} />
            <InfoItem label="Text Channels" value={textChannelsCount} />
            <InfoItem label="Voice Channels" value={voiceChannelsCount} />
            <InfoItem label="Total Messages" value={totalMessages} />
            <InfoItem label="Created At" value={createdDate} />
            <InfoItem label="Boost Tier" value={server.premiumTier} />
            <InfoItem label="Premium Subs" value={server.premiumSubscriberCount} />
          </div>
        </div>

        {/* Search and Users Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <input
              type="text"
              placeholder="Search by username or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 sm:p-4 rounded-full bg-gradient-to-br from-background-light/90 to-background/90 text-white border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredUsers.length === 0 ? (
              <p className="text-center text-text-secondary col-span-full">No users found.</p>
            ) : (
              filteredUsers.map((user) => {
                const avatarUrl = user.avatar
                  ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
                  : 'https://via.placeholder.com/150';
                const isOnline = user.status === 'online';

                return (
                  <Link to={`/users/${user.id}`} key={user.id}>
                    <div className="card-primary hover:border-primary/50 transition-all duration-300 p-4 sm:p-6 flex flex-col items-center text-center bg-gradient-to-br from-background-light/90 to-background/90">
                      <img
                        src={avatarUrl}
                        alt="Avatar"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-primary mb-3 sm:mb-4"
                      />
                      <h4 className="text-base sm:text-lg font-semibold text-white">{user.globalName}</h4>
                      <p className="text-text-secondary text-xs sm:text-sm mb-2">@{user.username}</p>
                      <span
                        className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                          isOnline ? 'bg-gradient-to-br from-green-600 to-green-500 text-white' : 'bg-gradient-to-br from-red-600 to-red-500 text-white'
                        }`}
                      >
                        {isOnline ? 'Online' : 'Offline'}
                      </span>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Helper component
const InfoItem = ({ label, value }: { label: string; value: string | number }) => (
  <div className="bg-gradient-to-br from-background-light/90 to-background/90 rounded-lg p-3 sm:p-4 flex flex-col border border-primary/20">
    <span className="text-xs sm:text-sm text-text-secondary mb-1 capitalize">{label}</span>
    <span className="text-base sm:text-lg font-semibold text-white">{value}</span>
  </div>
);

export default Dashboard;
