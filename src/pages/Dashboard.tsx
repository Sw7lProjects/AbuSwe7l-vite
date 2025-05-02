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
    <div className="min-h-screen bg-gray-900 text-white py-10 px-6">
      <Navigation />
      <div className="h-20 md:h-28"></div>
      {/* Banner */}
      {server.banner && (
        <div
          className="h-64 bg-cover bg-center rounded-lg mb-8"
          style={{ backgroundImage: `url(https://cdn.discordapp.com/banners/${server.id}/${server.banner}.png)` }}
        />
      )}

      {/* Server Info Card */}
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-12">
        <div className="flex items-center px-6 py-4 bg-gray-700">
          {server.icon ? (
            <img
              src={`https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`}
              alt="Server Icon"
              className="w-16 h-16 rounded-full border-2 border-indigo-500 mr-4"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-600 rounded-full mr-4 flex items-center justify-center">
              <span className="text-xl">🏷️</span>
            </div>
          )}
          <div>
            <h2 className="text-3xl font-bold text-indigo-300">{server.name}</h2>
            <p className="text-gray-400">{server.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
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

        {Array.isArray(server.features) && (
          <div className="px-6 pb-6">
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">Features</h3>
            <div className="flex flex-wrap gap-2">
              {server.features.map((feat: string) => (
                <span
                  key={feat}
                  className="px-3 py-1 bg-indigo-600 bg-opacity-20 rounded-full text-sm text-indigo-200"
                >
                  {feat.replace(/_/g, ' ')}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Search and Users Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by username or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 rounded-full bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredUsers.length === 0 ? (
            <p className="text-center text-gray-400 col-span-full">No users found.</p>
          ) : (
            filteredUsers.map((user) => {
              const avatarUrl = user.avatar
                ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
                : 'https://via.placeholder.com/150';
              const isOnline = user.status === 'online';

              return (
                <Link to={`/users/${user.id}`} key={user.id}>
                  <div className="bg-gray-800 hover:bg-gray-700 transition p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
                    <img
                      src={avatarUrl}
                      alt="Avatar"
                      className="w-24 h-24 rounded-full border-4 border-indigo-500 mb-4"
                    />
                    <h4 className="text-lg font-semibold text-indigo-300">{user.globalName}</h4>
                    <p className="text-gray-400 text-sm mb-2">@{user.username}</p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        isOnline ? 'bg-green-600 text-green-100' : 'bg-red-600 text-red-100'
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
      <Footer />
    </div>
  );
};

// Helper component
const InfoItem = ({ label, value }: { label: string; value: string | number }) => (
  <div className="bg-gray-700 rounded-lg p-4 flex flex-col">
    <span className="text-sm text-gray-400 mb-1 capitalize">{label}</span>
    <span className="text-lg font-semibold text-white">{value}</span>
  </div>
);

export default Dashboard;
