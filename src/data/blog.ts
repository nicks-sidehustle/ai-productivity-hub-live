// Re-export filesystem functions for backwards compatibility
export {
  getAllBlogPosts,
  getBlogPostBySlug,
  getFeaturedBlogPosts,
  getLatestBlogPosts,
  getAllBlogSlugs,
  type BlogPost
} from '../lib/blog';

// For immediate synchronous access (client-side compatibility)
import { getAllBlogPosts } from '../lib/blog';
export const blogPosts = getAllBlogPosts();