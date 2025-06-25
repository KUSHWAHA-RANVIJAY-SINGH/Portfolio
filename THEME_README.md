# Dark/Light Theme System

This portfolio application now includes a comprehensive dark/light theme toggle system with the following features:

## Features

- **Theme Toggle**: Beautiful animated toggle button with sun/moon icons
- **LocalStorage Persistence**: Theme preference is saved and restored on page reload
- **System Preference Detection**: Automatically detects user's system theme preference
- **Smooth Transitions**: All theme changes include smooth CSS transitions
- **Responsive Design**: Works perfectly on both desktop and mobile devices
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## Components

### ThemeContext (`src/context/ThemeContext.jsx`)
- Manages theme state using React Context
- Handles localStorage persistence
- Detects system theme preference
- Provides `isDarkMode` state and `toggleTheme` function

### ThemeToggle (`src/components/ThemeToggle.jsx`)
- Animated toggle button component
- Uses react-icons for sun/moon icons
- Smooth sliding animation
- Accessible with proper ARIA labels

## Usage

### Using the Theme Hook
```jsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}
```

### CSS Classes
The system uses Tailwind CSS with dark mode support:

- `dark:bg-gray-900` - Dark background
- `dark:text-white` - Dark text
- `dark:border-gray-700` - Dark borders
- `theme-bg` - Utility class for theme-aware backgrounds
- `theme-text` - Utility class for theme-aware text
- `theme-card` - Utility class for theme-aware cards

## Implementation Details

1. **ThemeProvider**: Wraps the entire app in `App.jsx`
2. **Navbar Integration**: Theme toggle is integrated into both desktop and mobile navigation
3. **CSS Variables**: Toast notifications use CSS variables for theme-aware styling
4. **Tailwind Config**: Dark mode is enabled with 'class' strategy
5. **Smooth Transitions**: All elements transition smoothly between themes

## Browser Support

- Modern browsers with localStorage support
- CSS custom properties (CSS variables)
- Tailwind CSS dark mode classes

## Customization

To customize the theme colors, modify:
- `tailwind.config.js` for color palette
- `src/index.css` for custom CSS variables
- `ThemeToggle.jsx` for toggle button styling 