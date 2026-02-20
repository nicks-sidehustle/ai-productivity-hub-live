// Blog content utilities for filesystem-based content
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const blogDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  featured: boolean;
  content?: string;
  htmlContent?: string;
}

// Date parsing utility
function parseDate(dateStr: string): Date {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date(0) : d;
}

// Check if running on server
function isServer() {
  return typeof window === 'undefined';
}

// Fallback blog posts for client-side compatibility
const fallbackBlogPosts: BlogPost[] = [
  {
    slug: 'ai-integration-chaos-solution-2026',
    title: 'The $50 Billion AI Integration Problem: Why Your AI Tools Don\'t Talk to Each Other (And How to Fix It)',
    excerpt: 'Your 23 AI tools are brilliant individually but a complete mess together. Here\'s how to fix the integration chaos before your competitors do.',
    category: 'Integration',
    author: 'OneClickAI Team',
    publishDate: '2026-02-19',
    readTime: '15 min read',
    featured: true,
  },
  {
    slug: 'ai-customer-service-2026-human-vs-bot',
    title: 'The Great Customer Service Flip: Why AI is Now Better Than Humans at Support (And When It Still Isn\'t)',
    excerpt: 'AI handled 47 support tickets while humans answered 3. Customer satisfaction was 23% higher for AI interactions. The service revolution is here.',
    category: 'Customer Service',
    author: 'OneClickAI Team',
    publishDate: '2026-02-19',
    readTime: '14 min read',
    featured: true,
  },
  {
    slug: 'ai-business-intelligence-revolution-2026',
    title: 'The AI Business Intelligence Revolution: 5 Tools That Turn Anyone Into a Data Analyst (February 2026)',
    excerpt: 'Business intelligence used to require data scientists and months of setup. These 5 AI tools turn spreadsheet warriors into data wizards instantly.',
    category: 'Business Intelligence',
    author: 'OneClickAI Team',
    publishDate: '2026-02-19',
    readTime: '13 min read',
    featured: true,
  }
];

// Server-side functions
export function getAllBlogPosts(): BlogPost[] {
  if (!isServer()) {
    return fallbackBlogPosts;
  }

  try {
    if (!fs.existsSync(blogDirectory)) {
      return fallbackBlogPosts;
    }
    
    const files = fs.readdirSync(blogDirectory).filter(f => f.endsWith('.md'));
    
    const posts = files.map(filename => {
      const slug = filename.replace(/\.md$/, '');
      const filePath = path.join(blogDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        title: data.title || slug,
        excerpt: data.excerpt || '',
        category: data.category || 'General',
        author: data.author || 'OneClickAI Team',
        publishDate: data.publishDate || data.date || '',
        readTime: data.readTime || '5 min read',
        featured: data.featured || false,
        content,
        htmlContent: marked(content) as string,
      };
    });
    
    // Sort by publish date, newest first
    posts.sort((a, b) => parseDate(b.publishDate).getTime() - parseDate(a.publishDate).getTime());
    
    return posts;
  } catch (error) {
    console.warn('Error loading blog posts from filesystem, using fallback:', error);
    return fallbackBlogPosts;
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  if (!isServer()) {
    return fallbackBlogPosts.find(p => p.slug === slug) || null;
  }

  try {
    const filePath = path.join(blogDirectory, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return fallbackBlogPosts.find(p => p.slug === slug) || null;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || '',
      category: data.category || 'General',
      author: data.author || 'OneClickAI Team',
      publishDate: data.publishDate || data.date || '',
      readTime: data.readTime || '5 min read',
      featured: data.featured || false,
      content,
      htmlContent: marked(content) as string,
    };
  } catch (error) {
    console.warn('Error loading blog post from filesystem:', error);
    return fallbackBlogPosts.find(p => p.slug === slug) || null;
  }
}

export function getFeaturedBlogPosts(count: number = 6): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter(post => post.featured).slice(0, count);
}

export function getLatestBlogPosts(count: number = 6): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.slice(0, count);
}

export function getAllBlogSlugs(): string[] {
  if (!isServer()) {
    return fallbackBlogPosts.map(p => p.slug);
  }

  try {
    if (!fs.existsSync(blogDirectory)) {
      return fallbackBlogPosts.map(p => p.slug);
    }
    
    return fs.readdirSync(blogDirectory)
      .filter(f => f.endsWith('.md'))
      .map(f => f.replace(/\.md$/, ''));
  } catch (error) {
    console.warn('Error getting blog slugs from filesystem:', error);
    return fallbackBlogPosts.map(p => p.slug);
  }
}