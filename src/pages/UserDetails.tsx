import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { users as usersData } from '../lib/data';

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
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <div className="text-center text-lg animate-pulse">⏳ Loading user data...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <div className="text-center p-6 bg-gray-800 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-red-400 mb-4">❌ User not found</h2>
          <Link to="/dashboard" className="text-blue-500 underline hover:text-blue-400 transition duration-200">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const avatarUrl = user.avatar
    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
    : 'https://via.placeholder.com/150';

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto bg-gray-800 p-10 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center text-indigo-400 mb-10">🧍‍♂️ User Details</h1>

        <div className="flex justify-center mb-10">
          <img
            src={avatarUrl}
            alt="User Avatar"
            className="w-36 h-36 rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <p><span className="font-semibold text-indigo-300">🆔 ID:</span> {user.id}</p>
          <p><span className="font-semibold text-indigo-300">👤 Username:</span> {user.username}</p>
          <p><span className="font-semibold text-indigo-300">🌍 Global Name:</span> {user.globalName || 'N/A'}</p>
          <p><span className="font-semibold text-indigo-300">📧 Email:</span> {user.email || 'N/A'}</p>
          <p><span className="font-semibold text-indigo-300">📱 Phone:</span> {user.phone || 'N/A'}</p>
          <p><span className="font-semibold text-indigo-300">🔐 Verified?</span> {user.verified ? '✅ Yes' : '❌ No'}</p>
          <p><span className="font-semibold text-indigo-300">🛡️ MFA Enabled?</span> {user.mfaEnabled ? '🔒 Yes' : '🔓 No'}</p>
          <p><span className="font-semibold text-indigo-300">🔞 NSFW Allowed?</span> {user.nsfwAllowed ? '✅ Yes' : '❌ No'}</p>
          <p><span className="font-semibold text-indigo-300">📳 Mobile User?</span> {user.mobile ? '📱 Yes' : '❌ No'}</p>
          <p><span className="font-semibold text-indigo-300">💻 Desktop User?</span> {user.desktop ? '🖥️ Yes' : '❌ No'}</p>
          <p><span className="font-semibold text-indigo-300">🤖 Bot?</span> {user.bot ? '✅ Yes' : '❌ No'}</p>
          <p><span className="font-semibold text-indigo-300">🧬 System User?</span> {user.system ? '✅ Yes' : '❌ No'}</p>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/dashboard"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition duration-300"
          >
            ⬅️ Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
