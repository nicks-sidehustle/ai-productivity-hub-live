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
  {
    slug: 'jasper-vs-copy-ai',
    title: 'Jasper vs Copy.ai: Best AI Copywriting Tool in 2026',
    description: 'A complete comparison of the two leading AI copywriting platforms for marketers and content teams.',
    tool1Slug: 'jasper',
    tool2Slug: 'copy-ai',
    features: [
      { feature: 'Starting Price', tool1: '$49/month', tool2: '$49/month' },
      { feature: 'Free Trial', tool1: '7 days', tool2: 'Free tier available' },
      { feature: 'Word Limits', tool1: 'Unlimited (Creator+)', tool2: 'Unlimited (Starter+)' },
      { feature: 'Templates', tool1: '50+', tool2: '90+' },
      { feature: 'Brand Voice', tool1: 'Yes (excellent)', tool2: 'Yes (good)' },
      { feature: 'Long-form Content', tool1: 'Excellent', tool2: 'Good' },
      { feature: 'Short-form Copy', tool1: 'Very Good', tool2: 'Excellent' },
      { feature: 'SEO Integration', tool1: 'Surfer SEO built-in', tool2: 'Limited' },
      { feature: 'Team Features', tool1: 'Yes', tool2: 'Yes' },
      { feature: 'API Access', tool1: 'Yes', tool2: 'Yes' },
      { feature: 'Chrome Extension', tool1: 'Yes', tool2: 'Yes' },
      { feature: 'Art Generation', tool1: 'Yes', tool2: 'No' },
    ],
    bestFor: {
      tool1: [
        'Long-form blog content',
        'SEO-focused teams',
        'Agencies needing brand consistency',
        'Full marketing content workflows',
        'Teams already using Surfer SEO',
      ],
      tool2: [
        'Social media copy',
        'Email marketing',
        'Quick ad copy generation',
        'E-commerce product descriptions',
        'Teams needing lots of templates',
      ],
    },
    verdict: 'Jasper is the better choice for long-form content and teams serious about SEO (thanks to built-in Surfer integration). Copy.ai wins for short-form marketing copy with its massive template library. Both are $49/month at the entry level, so choose based on your content mix.',
  },
  {
    slug: 'notion-ai-vs-chatgpt',
    title: 'Notion AI vs ChatGPT: Which AI Workspace Wins?',
    description: 'Comparing embedded AI (Notion) vs standalone AI (ChatGPT) for productivity workflows.',
    tool1Slug: 'notion-ai',
    tool2Slug: 'chatgpt-plus',
    features: [
      { feature: 'Monthly Price', tool1: '$10-20/user', tool2: '$20/user' },
      { feature: 'AI Integration', tool1: 'Embedded in workspace', tool2: 'Standalone app' },
      { feature: 'Context Awareness', tool1: 'Your workspace data', tool2: 'Per-conversation' },
      { feature: 'Project Management', tool1: 'Built-in', tool2: 'None' },
      { feature: 'Database Features', tool1: 'Powerful', tool2: 'None' },
      { feature: 'Image Generation', tool1: 'No', tool2: 'Yes (DALL-E)' },
      { feature: 'Web Browsing', tool1: 'No', tool2: 'Yes' },
      { feature: 'File Analysis', tool1: 'Workspace docs', tool2: 'Any uploaded file' },
      { feature: 'Writing Quality', tool1: 'Good', tool2: 'Excellent' },
      { feature: 'Custom Workflows', tool1: 'Yes', tool2: 'GPTs' },
      { feature: 'Team Collaboration', tool1: 'Excellent', tool2: 'Limited' },
      { feature: 'Mobile App', tool1: 'Yes', tool2: 'Yes' },
    ],
    bestFor: {
      tool1: [
        'Teams already using Notion',
        'Project-based work',
        'Knowledge management',
        'Collaborative writing',
        'Reducing tool sprawl',
      ],
      tool2: [
        'General AI assistance',
        'One-off tasks and questions',
        'Image generation needs',
        'Research and browsing',
        'Individual productivity',
      ],
    },
    verdict: 'Different tools for different needs. Notion AI shines when your work lives in Notion — AI that knows your context. ChatGPT is more powerful for standalone tasks, research, and image generation. Many teams use both: Notion for collaborative work, ChatGPT for individual research.',
  },
  {
    slug: 'grammarly-vs-jasper',
    title: 'Grammarly vs Jasper: Editor vs Generator',
    description: 'Should you fix your writing (Grammarly) or generate it (Jasper)? A practical comparison.',
    tool1Slug: 'grammarly',
    tool2Slug: 'jasper',
    features: [
      { feature: 'Primary Purpose', tool1: 'Edit & improve writing', tool2: 'Generate new content' },
      { feature: 'Starting Price', tool1: '$12/month', tool2: '$49/month' },
      { feature: 'Grammar Checking', tool1: 'Best-in-class', tool2: 'Basic' },
      { feature: 'Content Generation', tool1: 'Limited', tool2: 'Extensive' },
      { feature: 'Tone Detection', tool1: 'Excellent', tool2: 'Good' },
      { feature: 'Brand Voice', tool1: 'Yes', tool2: 'Yes' },
      { feature: 'Plagiarism Check', tool1: 'Yes', tool2: 'No' },
      { feature: 'Browser Extension', tool1: 'Everywhere', tool2: 'Yes' },
      { feature: 'Works in Gmail/Docs', tool1: 'Yes', tool2: 'Limited' },
      { feature: 'Long-form Writing', tool1: 'Editing only', tool2: 'Generation' },
      { feature: 'SEO Features', tool1: 'No', tool2: 'Yes (Surfer)' },
      { feature: 'Team Features', tool1: 'Yes', tool2: 'Yes' },
    ],
    bestFor: {
      tool1: [
        'Writers who create their own content',
        'Non-native English speakers',
        'Email-heavy professionals',
        'Students and academics',
        'Anyone wanting to write better',
      ],
      tool2: [
        'Content marketers',
        'Blog and article production',
        'Marketing copy at scale',
        'Social media managers',
        'Teams needing to generate content fast',
      ],
    },
    verdict: 'These tools complement rather than compete. Grammarly makes your writing better; Jasper writes for you. Many content professionals use both — Jasper to generate drafts, Grammarly to polish them. At $12/month vs $49/month, Grammarly is also much more accessible.',
  },
  {
    slug: 'surfer-seo-vs-jasper',
    title: 'Surfer SEO vs Jasper: SEO Optimization vs Content Generation',
    description: 'The ultimate showdown for SEO content: optimization tool vs AI writer.',
    tool1Slug: 'surfer-seo',
    tool2Slug: 'jasper',
    features: [
      { feature: 'Primary Focus', tool1: 'SEO optimization', tool2: 'Content generation' },
      { feature: 'Starting Price', tool1: '$89/month', tool2: '$49/month' },
      { feature: 'AI Writing', tool1: 'Yes (with SEO)', tool2: 'Yes (extensive)' },
      { feature: 'SERP Analysis', tool1: 'Detailed', tool2: 'No' },
      { feature: 'Keyword Research', tool1: 'Yes', tool2: 'Limited' },
      { feature: 'Content Scoring', tool1: 'Real-time', tool2: 'No' },
      { feature: 'Audit Existing Content', tool1: 'Yes', tool2: 'No' },
      { feature: 'Template Library', tool1: 'Few', tool2: '50+' },
      { feature: 'Brand Voice', tool1: 'Limited', tool2: 'Excellent' },
      { feature: 'Marketing Copy', tool1: 'Limited', tool2: 'Extensive' },
      { feature: 'Integration', tool1: 'Google Docs, Jasper', tool2: 'Surfer, multiple' },
      { feature: 'Outline Builder', tool1: 'AI-powered', tool2: 'Yes' },
    ],
    bestFor: {
      tool1: [
        'SEO-first content strategy',
        'Ranking existing content',
        'Competitive analysis',
        'Content agencies',
        'Data-driven content teams',
      ],
      tool2: [
        'High-volume content production',
        'Marketing copy beyond SEO',
        'Brand-consistent messaging',
        'Social and email content',
        'Teams needing versatility',
      ],
    },
    verdict: 'Best together, not either/or. Surfer tells you what to write for rankings; Jasper writes it. The Surfer-Jasper integration is excellent — use Jasper for drafts with Surfer optimization scoring in real-time. If budget is tight, start with Surfer ($89) for SEO data, use free AI tools for writing.',
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
