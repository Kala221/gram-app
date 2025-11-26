import React from 'react';
import { NavItemType, StoryItemType } from './types';

// SVG Icons
export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

export const ProfileIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
  </svg>
);

export const VideosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
    />
  </svg>
);

export const PostIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

export const FollowingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.75c-.258 0-.505-.022-.741-.064A13.34 13.34 0 0 1 12 21.75c-2.835 0-5.455-1.04-7.41-2.793M14.25 7.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0ZM12 11.25c-2.001 0-3.75 1.12-4.713 2.733.37.116.757.22 1.155.32c.987.252 1.996.368 3.008.368s2.021-.116 3.008-.369a10.07 10.07 0 0 0 1.155-.32c-.963-1.613-2.713-2.733-4.713-2.733Z"
    />
  </svg>
);

export const NotificationsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.139 5.455 1.31m5.714 0a24.248 24.248 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
    />
  </svg>
);

export const MessagesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12.76c0 1.603 1.148 2.94 2.629 3.22a1.897 1.897 0 0 1 1.096 1.637v.36c0 .456.494.896 1.04 1.066 1.732.557 3.522.843 5.315.843s3.583-.286 5.315-.843c.546-.17.96-.61.96-1.065v-.36c0-.476.33-1.054.98-1.14 1.576-.226 2.76-1.6 2.76-3.143V7.5c0-2.071-1.699-3.75-3.75-3.75H8.25C6.179 3.75 4.5 5.429 4.5 7.5v.75c0 .762-.297 1.488-.845 2.035a2.991 2.991 0 0 0-2.655 2.195Z"
    />
  </svg>
);

export const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.617.764-3.821a.75.75 0 0 0-.154-.706 9.75 9.75 0 0 0-5.419 9.063C6.354 18.007 10.373 21.75 15.75 21.75c2.906 0 5.613-1.378 7.354-3.714a.75.75 0 0 0-1.079-.918Z"
    />
  </svg>
);

export const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12H5.25m-.386-6.364l1.591 1.591M12 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
    />
  </svg>
);

export const LogoutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0 3-3m0 0-3-3m3 3H2.25"
    />
  </svg>
);

export const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
    />
  </svg>
);

// Navigation Data
export const navItems: NavItemType[] = [
  { id: 'profile', label: 'Profile', icon: ProfileIcon },
  { id: 'videos', label: 'Videos', icon: VideosIcon },
  { id: 'post', label: 'Post', icon: PostIcon },
  { id: 'following', label: 'Following', icon: FollowingIcon },
  { id: 'notifications', label: 'Notifications', icon: NotificationsIcon },
  { id: 'messages', label: 'Messages', icon: MessagesIcon },
];

// Example Story Data
export const initialStories: StoryItemType[] = [
  { id: 's1', username: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=1', hasViewed: false },
  { id: 's2', username: 'Maria', avatarUrl: 'https://i.pravatar.cc/150?img=2', hasViewed: false },
  { id: 's3', username: 'John', avatarUrl: 'https://i.pravatar.cc/150?img=3', hasViewed: true },
  { id: 's4', username: 'Sophia', avatarUrl: 'https://i.pravatar.cc/150?img=4', hasViewed: false },
  { id: 's5', username: 'David', avatarUrl: 'https://i.pravatar.cc/150?img=5', hasViewed: false },
  { id: 's6', username: 'Emily', avatarUrl: 'https://i.pravatar.cc/150?img=6', hasViewed: true },
  { id: 's7', username: 'Daniel', avatarUrl: 'https://i.pravatar.cc/150?img=7', hasViewed: false },
  { id: 's8', username: 'Olivia', avatarUrl: 'https://i.pravatar.cc/150?img=8', hasViewed: false },
  { id: 's9', username: 'Michael', avatarUrl: 'https://i.pravatar.cc/150?img=9', hasViewed: false },
  { id: 's10', username: 'Ava', avatarUrl: 'https://i.pravatar.cc/150?img=10', hasViewed: true },
];