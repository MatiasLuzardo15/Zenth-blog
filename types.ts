import React from 'react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Full content for AI summarization
  author: string;
  date: string;
  imageUrl?: string;
  category: string;
  readTime?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}