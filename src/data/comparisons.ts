export interface Comparison {
  slug: string;
  title: string;
  description: string;
  tool1Slug: string;
  tool2Slug: string;
  features: { feature: string; tool1: string; tool2: string }[];
  bestFor: { tool1: string[]; tool2: string[] };
  verdict: string;
}

export const comparisons: Comparison[] = [
  {
    slug: 'chatgpt-vs-claude',
    title: 'ChatGPT vs Claude: Which AI Assistant is Best?',
    description: 'A detailed head-to-head comparison of ChatGPT Plus and Claude Pro — the two leading AI assistants for professionals.',
    tool1Slug: 'chatgpt-plus',
    tool2Slug: 'claude-pro',
    features: [
      { feature: 'Monthly Price', tool1: '$20/month', tool2: '$20/month' },
      { feature: 'Context Window', tool1: '128K tokens', tool2: '200K tokens' },
      { feature: 'Image Generation', tool1: 'Yes (DALL-E)', tool2: 'No' },
      { feature: 'Image Analysis', tool1: 'Yes', tool2: 'Yes' },
      { feature: 'Web Browsing', tool1: 'Yes', tool2: 'Limited' },
      { feature: 'Code Execution', tool1: 'Yes', tool2: 'Yes (Artifacts)' },
      { feature: 'File Upload', tool1: 'Yes', tool2: 'Yes' },
      { feature: 'Custom Assistants', tool1: 'GPTs Marketplace', tool2: 'Projects' },
      { feature: 'Writing Quality', tool1: 'Excellent', tool2: 'Superior' },
      { feature: 'Reasoning Depth', tool1: 'Very Good', tool2: 'Excellent' },
      { feature: 'Plugin Ecosystem', tool1: 'Large', tool2: 'Growing' },
      { feature: 'Voice Mode', tool1: 'Yes', tool2: 'No' },
      { feature: 'Mobile Apps', tool1: 'iOS & Android', tool2: 'iOS & Android' },
      { feature: 'API Available', tool1: 'Yes', tool2: 'Yes' },
    ],
    bestFor: {
      tool1: [
        'All-around productivity',
        'Image generation needs',
        'Plugin/integration heavy workflows',
        'Voice-based interaction',
        'Team collaboration',
      ],
      tool2: [
        'Long-form writing and editing',
        'Complex analysis and reasoning',
        'Large document processing',
        'Code review and development',
        'Detailed research projects',
      ],
    },
    verdict: 'Both tools cost $20/month and are excellent choices. Choose ChatGPT Plus if you need versatility, image generation, and a vast plugin ecosystem. Choose Claude Pro if you prioritize writing quality, longer context, and deeper analytical thinking. Many professionals keep both.',
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
