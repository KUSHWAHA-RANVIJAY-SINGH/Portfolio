import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center w-13 h-7 rounded-full
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400
        ${isDarkMode
          ? 'bg-slate-700'
          : 'bg-orange-100'
        }
      `}
      style={{
        width: '52px',
        height: '28px',
        transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        boxShadow: isDarkMode ? '0 0 8px #ff660044' : '0 0 0px transparent',
      }}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {/* Toggle Circle */}
      <div
        style={{
          position: 'absolute',
          left: isDarkMode ? 'calc(100% - 24px)' : '4px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'left 0.3s ease-in-out, background-color 0.3s ease-in-out',
          boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
        }}
      >
        {isDarkMode ? (
          <FiMoon style={{ width: '11px', height: '11px', color: '#fde047', transition: 'opacity 0.3s ease-in-out' }} />
        ) : (
          <FiSun style={{ width: '11px', height: '11px', color: '#f97316', transition: 'opacity 0.3s ease-in-out' }} />
        )}
      </div>

      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        <FiSun
          style={{
            width: '12px',
            height: '12px',
            color: '#f97316',
            opacity: isDarkMode ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
        <FiMoon
          style={{
            width: '12px',
            height: '12px',
            color: '#94a3b8',
            opacity: isDarkMode ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;