export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  twitter?: string;
  linkedin?: string;
}

export const authors: Record<string, Author> = {
  'oneclickai-team': {
    id: 'oneclickai-team',
    name: 'OneClickAI Team',
    role: 'Editorial Team',
    bio: 'We test AI tools so you don\'t have to waste money. Our team has collectively evaluated 200+ AI products, focusing on real-world ROI for marketers, creators, and small business owners.',
    avatar: '/authors/team-avatar.png',
    twitter: 'oneclickai_io',
  },
  'nick-lessing': {
    id: 'nick-lessing',
    name: 'Nick Lessing',
    role: 'Founder & Lead Analyst',
    bio: 'Analytics professional turned AI tools enthusiast. I\'ve spent 10+ years helping businesses make data-driven decisions, and now I apply that same rigor to evaluating AI productivity tools.',
    avatar: '/authors/nick-avatar.png',
    twitter: 'nicklessing',
    linkedin: 'nicklessing',
  },
};

export function getAuthorByName(name: string): Author | undefined {
  // Map display names to author IDs
  const nameMap: Record<string, string> = {
    'OneClickAI Team': 'oneclickai-team',
    'Nick Lessing': 'nick-lessing',
  };
  const id = nameMap[name];
  return id ? authors[id] : undefined;
}
