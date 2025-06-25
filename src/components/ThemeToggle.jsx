import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center w-12 h-6 rounded-full transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        ${isDarkMode 
          ? 'bg-gray-700 focus:ring-gray-500' 
          : 'bg-gray-200 focus:ring-gray-400'
        }
      `}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {/* Toggle Circle */}
      <div
        className={`
          absolute left-1 w-4 h-4 rounded-full transition-all duration-300 ease-in-out
          flex items-center justify-center
          ${isDarkMode 
            ? 'translate-x-6 bg-gray-800' 
            : 'translate-x-0 bg-white'
          }
        `}
      >
        {isDarkMode ? (
          <FiMoon className="w-2.5 h-2.5 text-yellow-300" />
        ) : (
          <FiSun className="w-2.5 h-2.5 text-yellow-500" />
        )}
      </div>
      
      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        <FiSun className={`w-3 h-3 transition-opacity duration-300 ${
          isDarkMode ? 'opacity-0' : 'opacity-100'
        } text-yellow-500`} />
        <FiMoon className={`w-3 h-3 transition-opacity duration-300 ${
          isDarkMode ? 'opacity-100' : 'opacity-0'
        } text-gray-400`} />
      </div>
    </button>
  );
};

export default ThemeToggle; 