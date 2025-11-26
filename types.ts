import React from 'react';

export interface NavItemType {
  id: string;
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface StoryItemType {
  id: string;
  username: string;
  avatarUrl: string;
  hasViewed: boolean;
}