import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navigation() {
  const { currentUser, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = currentUser
    ? [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/resume', label: 'Resume Builder' },
        { path: '/cover-letter', label: 'Cover Letter' },
      ]
    : [
        { path: '/login', label: 'Login' },
        { path: '/signup', label: 'Sign Up' },
      ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand */}
          <div className="flex">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 flex items-center"
            >
              <Link
                to="/"
                className="text-xl font-bold text-white hover:shadow-[0_0_15px_white] transition-all duration-300"
              >
                Resume Builder
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    to={item.path}
                    className={`${
                      isActive(item.path)
                        ? 'border-white text-white'
                        : 'border-transparent text-gray-400 hover:text-white'
                    } inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 transition-all duration-200`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Logout (Desktop) */}
          {currentUser && (
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="ml-8 px-4 py-2 border border-white rounded-md text-sm font-medium text-white bg-black hover:bg-white hover:text-black hover:shadow-[0_0_15px_white] transition-all duration-300"
              >
                Logout
              </motion.button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={`sm:hidden overflow-hidden bg-black`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <motion.div key={item.path} whileTap={{ scale: 0.98 }}>
              <Link
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${
                  isActive(item.path)
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium transition-all duration-200`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          {currentUser && (
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-200"
            >
              Logout
            </motion.button>
          )}
        </div>
      </motion.div>
    </nav>
  );
}
