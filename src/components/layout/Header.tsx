import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Bell, Settings } from 'lucide-react';
import { UserProfile } from '../user/UserProfile';
import type { User } from '../../types';

interface HeaderProps {
  user: User;
  onLogout: () => void;
}

export function Header({ user, onLogout }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Terminal className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">BitXify</span>
            </motion.div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
            >
              <Bell className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
            >
              <Settings className="w-5 h-5" />
            </motion.button>
            <UserProfile user={user} onLogout={onLogout} />
          </div>
        </div>
      </div>
    </header>
  );
}