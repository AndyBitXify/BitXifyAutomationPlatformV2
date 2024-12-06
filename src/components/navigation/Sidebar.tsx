import { NavLink } from 'react-router-dom';
import { Home, FileCode, Settings } from 'lucide-react';

export function Sidebar() {
  const navItems = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/scripts', icon: FileCode, label: 'Scripts' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className="w-64 bg-white rounded-xl shadow-sm p-4">
      <div className="space-y-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}