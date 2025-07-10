// components/ThemeSwitch.tsx
'use client';
import { useTheme } from '@/context/CustomContextProvider';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isDark}
        onChange={toggleTheme}
      />
      <div
        className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 
        dark:bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white 
        after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 
        after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
      ></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </label>
  );
}
