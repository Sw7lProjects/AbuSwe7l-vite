export interface User {
  id: string;
  username: string;
  globalName?: string;
  avatar?: string;
  email?: string;
  phone?: string;
  verified: boolean;
  mfaEnabled: boolean;
  nsfwAllowed: boolean;
  mobile: boolean;
  desktop: boolean;
  bot: boolean;
  system: boolean;
  status?: 'online' | 'offline';
}

export interface ServerInfo {
  id: string;
  name: string;
  description: string;
  icon?: string;
  banner?: string;
  region: string;
  members: number;
  channels?: Array<{ type: 'text' | 'voice' }>;
  textChannelCount?: number;
  voiceChannelCount?: number;
  totalMessages?: number;
  messageCount?: number;
  createdAt: string;
  premiumTier: number;
  premiumSubscriberCount: number;
  features: string[];
}

export const users: User[] = [
  {
    id: "1",
    username: "john_doe",
    globalName: "John Doe",
    avatar: "123456789",
    email: "john@example.com",
    phone: "+1234567890",
    verified: true,
    mfaEnabled: true,
    nsfwAllowed: false,
    mobile: true,
    desktop: true,
    bot: false,
    system: false,
    status: 'online'
  },
  {
    id: "2",
    username: "jane_smith",
    globalName: "Jane Smith",
    avatar: "987654321",
    email: "jane@example.com",
    phone: "+0987654321",
    verified: true,
    mfaEnabled: false,
    nsfwAllowed: true,
    mobile: true,
    desktop: false,
    bot: false,
    system: false,
    status: 'offline'
  },
  {
    id: "3",
    username: "bot_assistant",
    globalName: "Bot Assistant",
    avatar: "bot123",
    email: "bot@example.com",
    verified: true,
    mfaEnabled: false,
    nsfwAllowed: false,
    mobile: false,
    desktop: true,
    bot: true,
    system: false,
    status: 'online'
  }
];

export const serverInfo: ServerInfo = {
  id: "123456789",
  name: "AbuSwe7l Gaming",
  description: "The ultimate gaming and streaming community",
  icon: "server_icon_123",
  banner: "server_banner_456",
  region: "US East",
  members: 1500,
  channels: [
    { type: "text" },
    { type: "text" },
    { type: "voice" },
    { type: "voice" }
  ],
  textChannelCount: 2,
  voiceChannelCount: 2,
  totalMessages: 25000,
  createdAt: "2023-01-01T00:00:00Z",
  premiumTier: 2,
  premiumSubscriberCount: 15,
}; 