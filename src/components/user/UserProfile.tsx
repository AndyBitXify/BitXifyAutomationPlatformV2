import React from 'react';
import { motion } from 'framer-motion';
import { User as UserIcon, LogOut } from 'lucide-react';
import { UserAvatar } from './UserAvatar';
import { UserInfo } from './UserInfo';
import type { User } from '../../types';

interface UserProfileProps {
  user: User;
  onLogout: () => void;
}

export function UserProfile({ user, onLogout }: UserProfileProps) {
  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-lg shadow-sm p-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <UserAvatar user={user} />
            <UserInfo user={user} />
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={onLogout}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-50"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}