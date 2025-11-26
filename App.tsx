import React, { useState, useEffect } from 'react';
import { NavItemType, StoryItemType } from './types';
import {
  SearchIcon,
  MoonIcon,
  SunIcon,
  LogoutIcon,
  ArrowRightIcon,
  navItems,
  initialStories,
} from './constants';

// StoryItem Component
interface StoryItemProps {
  story: StoryItemType;
  onStoryClick: (id: string) => void;
  isSidebarCollapsed: boolean;
}

const StoryItem: React.FC<StoryItemProps> = ({ story, onStoryClick, isSidebarCollapsed }) => {
  const borderColor = story.hasViewed ? 'border-story-border-viewed' : 'border-story-border-unviewed';
  const borderWidth = story.hasViewed ? 'border-2' : 'border-3'; // Thicker border for unviewed

  return (
    <button
      onClick={() => onStoryClick(story.id)}
      className="flex flex-col items-center p-2 group focus:outline-none"
      aria-label={`View story from ${story.username}`}
    >
      <div
        className={`relative w-16 h-16 rounded-full flex items-center justify-center p-[2px] transition-all duration-300
        ${borderColor} ${borderWidth} group-hover:scale-105 group-active:scale-95`}
        style={{
          backgroundImage: story.hasViewed
            ? 'none'
            : 'linear-gradient(45deg, #a78bfa, #8b5cf6)',
        }}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-dark-blue-primary">
          <img src={story.avatarUrl} alt={story.username} className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
      <span className={`mt-1 text-xs whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px] transition-opacity duration-300
        ${isSidebarCollapsed ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}
      >
        {story.username}
      </span>
    </button>
  );
};

// Main App Component
const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Initialize dark mode from localStorage or system preference
    if (localStorage.theme === 'dark') {
      return true;
    }
    if (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    return false;
  });
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [activeNavItem, setActiveNavItem] = useState<string>('profile');
  const [stories, setStories] = useState<StoryItemType[]>(initialStories);

  useEffect(() => {
    // Apply dark mode class to HTML element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleStoryClick = (id: string) => {
    setStories((prevStories) =>
      prevStories.map((s) => (s.id === id ? { ...s, hasViewed: true } : s))
    );
    // In a real app, this would navigate to the story viewer
    console.log(`Viewing story ${id}`);
  };

  return (
    <div className="flex h-screen bg-dark-blue-primary text-light-blue-text">
      {/* Sidebar */}
      <aside
        className={`relative flex flex-col bg-dark-blue-secondary transition-all duration-300 ease-in-out
          ${isSidebarCollapsed ? 'w-20 items-center' : 'w-64 px-4'} py-6 shadow-lg z-20`}
      >
        {/* Logo */}
        <div
          className={`flex items-center mb-10 transition-all duration-300 ${
            isSidebarCollapsed ? 'justify-center' : 'pl-2'
          }`}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-lg flex items-center justify-center mr-2 shadow-custom-light">
            <span className="text-white text-2xl font-bold font-serif">Σ</span>
          </div>
          {!isSidebarCollapsed && <h1 className="text-2xl font-bold">Gram</h1>}
        </div>

        {/* Search Bar */}
        <div
          className={`relative mb-8 transition-all duration-300 ${
            isSidebarCollapsed ? 'w-10 h-10 overflow-hidden' : 'w-full'
          }`}
        >
          <div
            className={`flex items-center bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full py-2 px-3 shadow-sm
            ${isSidebarCollapsed ? 'justify-center w-10 h-10' : 'w-full'}`}
          >
            <SearchIcon className="text-gray-500 dark:text-gray-400 mr-2" />
            {!isSidebarCollapsed && (
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow bg-transparent outline-none text-sm placeholder-gray-400 dark:placeholder-gray-500"
                aria-label="Search"
              />
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-grow">
          <ul>
            {navItems.map((item: NavItemType) => (
              <li key={item.id} className="mb-2">
                <button
                  onClick={() => setActiveNavItem(item.id)}
                  className={`flex items-center w-full py-2 px-3 rounded-lg text-left transition-colors duration-200
                    ${
                      activeNavItem === item.id
                        ? 'bg-blue-600/50 text-white shadow-md'
                        : 'hover:bg-blue-600/20'
                    }`}
                  aria-current={activeNavItem === item.id ? 'page' : undefined}
                >
                  <item.icon className="mr-3 flex-shrink-0" />
                  {!isSidebarCollapsed && (
                    <span className="text-lg font-medium">{item.label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Dark Mode Toggle */}
        <div
          className={`flex items-center justify-between mt-auto py-3 px-3 transition-all duration-300 ${
            isSidebarCollapsed ? 'justify-center' : ''
          }`}
        >
          <div className="flex items-center">
            {isDarkMode ? (
              <MoonIcon className="mr-3 flex-shrink-0" />
            ) : (
              <SunIcon className="mr-3 flex-shrink-0" />
            )}
            {!isSidebarCollapsed && (
              <span className="text-lg font-medium">Dark mode</span>
            )}
          </div>
          {!isSidebarCollapsed && (
            <label htmlFor="dark-mode-toggle" className="relative inline-flex items-center cursor-pointer ml-4">
              <input
                type="checkbox"
                id="dark-mode-toggle"
                className="sr-only peer"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                aria-label="Toggle dark mode"
              />
              <div
                className="w-11 h-6 bg-light-toggle-bg peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-dark-toggle-bg peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                role="switch"
                aria-checked={isDarkMode}
              ></div>
            </label>
          )}
        </div>

        {/* Logout */}
        <div className={`py-3 px-3 transition-all duration-300 ${isSidebarCollapsed ? 'justify-center' : ''}`}>
          <button
            onClick={() => console.log('Logout clicked')} // Placeholder for logout logic
            className={`flex items-center w-full py-2 px-3 rounded-lg text-left transition-colors duration-200 hover:bg-red-600/30`}
            aria-label="Logout"
          >
            <LogoutIcon className="mr-3 flex-shrink-0" />
            {!isSidebarCollapsed && <span className="text-lg font-medium">Logout</span>}
          </button>
        </div>

        {/* Collapse Button */}
        <button
          onClick={toggleSidebar}
          className="absolute right-[-1.25rem] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-light-blue-text dark:bg-gray-800 text-dark-blue-secondary dark:text-light-blue-text flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 z-30"
          aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <ArrowRightIcon className={`transition-transform duration-300 ${isSidebarCollapsed ? '' : 'rotate-180'}`} />
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 overflow-auto relative">
        <h2 className="text-3xl font-bold mb-6 sr-only">Main Content</h2>

        {/* Stories Section */}
        <section className="mb-8 p-4 bg-dark-blue-secondary rounded-lg shadow-md max-w-full">
          <h3 className="text-xl font-semibold mb-4">Stories</h3>
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {stories.map((story) => (
              <StoryItem
                key={story.id}
                story={story}
                onStoryClick={handleStoryClick}
                isSidebarCollapsed={false} // Stories are not affected by sidebar collapse in the main content area
              />
            ))}
          </div>
        </section>

        {/* Placeholder for other content */}
        <div className="p-8 text-center text-light-blue-text/70 mt-10">
          <p className="text-xl">Welcome to Gram! Explore videos, posts, and more.</p>
          <p className="text-sm mt-2">More content coming soon...</p>
        </div>
      </main>
    </div>
  );
};

export default App;