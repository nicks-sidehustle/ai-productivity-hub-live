export interface AITool {
  slug: string;
  name: string;
  tagline: string;
  category: string[];
  rating: number;
  pricing: { plan: string; price: string; period: string }[];
  affiliateUrl: string;
  features: string[];
  pros: string[];
  cons: string[];
  bestFor: string[];
  logoUrl: string;
  reviewDate: string;
  verdict: string;
}

export const categories = [
  { name: 'Writing', slug: 'writing', icon: '✍️' },
  { name: 'Coding', slug: 'coding', icon: '💻' },
  { name: 'Design', slug: 'design', icon: '🎨' },
  { name: 'Automation', slug: 'automation', icon: '⚡' },
  { name: 'Research', slug: 'research', icon: '🔍' },
  { name: 'Marketing', slug: 'marketing', icon: '📈' },
];

export const tools: AITool[] = [
  {
    slug: 'chatgpt-plus',
    name: 'ChatGPT Plus',
    tagline: 'The most popular AI assistant for writing, analysis, and creative work.',
    category: ['writing', 'research', 'marketing'],
    rating: 4.7,
    pricing: [
      { plan: 'Free', price: '$0', period: 'month' },
      { plan: 'Plus', price: '$20', period: 'month' },
      { plan: 'Pro', price: '$200', period: 'month' },
    ],
    affiliateUrl: 'https://oneclickai.io/go/chatgpt',
    features: [
      'GPT-4o and GPT-4.5 access',
      'DALL-E image generation',
      'Advanced Data Analysis',
      'Custom GPTs marketplace',
      'Web browsing & plugins',
      'File upload & analysis',
      'Voice conversations',
      'Memory across chats',
    ],
    pros: [
      'Most versatile AI assistant available',
      'Excellent at writing, coding, and analysis',
      'Massive ecosystem of custom GPTs',
      'Regular model updates and improvements',
      'Strong multimodal capabilities',
    ],
    cons: [
      'Usage caps on advanced models',
      'Can produce confident but incorrect answers',
      'Pro plan is expensive at $200/month',
      'Occasional downtime during peak hours',
    ],
    bestFor: ['Content creators', 'Marketers', 'Researchers', 'General business use'],
    logoUrl: '/logos/chatgpt.svg',
    reviewDate: '2026-01-15',
    verdict: 'ChatGPT Plus remains the gold standard for general-purpose AI assistance. At $20/month, it delivers exceptional value for professionals who need a versatile AI tool for writing, analysis, and creative work.',
  },
  {
    slug: 'claude-pro',
    name: 'Claude Pro',
    tagline: 'Anthropic\'s thoughtful AI assistant, known for nuanced analysis and long-form writing.',
    category: ['writing', 'research', 'coding'],
    rating: 4.8,
    pricing: [
      { plan: 'Free', price: '$0', period: 'month' },
      { plan: 'Pro', price: '$20', period: 'month' },
      { plan: 'Max', price: '$100', period: 'month' },
    ],
    affiliateUrl: 'https://oneclickai.io/go/claude',
    features: [
      'Claude 3.5 Sonnet & Claude 4 Opus',
      '200K token context window',
      'Advanced reasoning and analysis',
      'Artifacts for code and documents',
      'Projects for organized workflows',
      'File and image analysis',
      'Extended thinking mode',
      'Computer use capabilities',
    ],
    pros: [
      'Superior long-form writing quality',
      'Massive 200K context window',
      'More nuanced and thoughtful responses',
      'Excellent at following complex instructions',
      'Strong coding capabilities',
    ],
    cons: [
      'Smaller plugin/integration ecosystem',
      'Usage limits on Pro plan can be restrictive',
      'No native image generation',
      'Fewer third-party integrations',
    ],
    bestFor: ['Writers', 'Analysts', 'Developers', 'Researchers'],
    logoUrl: '/logos/claude.svg',
    reviewDate: '2026-01-20',
    verdict: 'Claude Pro is the thinking person\'s AI assistant. Its exceptional context window and nuanced writing make it ideal for professionals who need depth over breadth. The best choice for long-form content and complex analysis.',
  },
  {
    slug: 'notion-ai',
    name: 'Notion AI',
    tagline: 'AI-powered workspace that combines notes, docs, and project management.',
    category: ['writing', 'automation'],
    rating: 4.5,
    pricing: [
      { plan: 'Free', price: '$0', period: 'month' },
      { plan: 'Plus', price: '$10', period: 'month' },
      { plan: 'Business', price: '$20', period: 'month' },
    ],
    affiliateUrl: 'https://oneclickai.io/go/notion',
    features: [
      'AI writing assistant in-context',
      'AI-powered search across workspace',
      'Autofill database properties',
      'Meeting notes summarization',
      'Translation in 10+ languages',
      'Custom AI workflows',
      'Connected workspace intelligence',
      'AI agents for task automation',
    ],
    pros: [
      'AI integrated directly into your workspace',
      'Excellent for team collaboration',
      'AI included in all paid plans',
      'Reduces context switching between tools',
      'Powerful database and project management',
    ],
    cons: [
      'AI quality depends on workspace context',
      'Can feel overwhelming for simple needs',
      'Per-user pricing adds up for teams',
      'Learning curve for advanced features',
    ],
    bestFor: ['Team leads', 'Project managers', 'Knowledge workers', 'Small teams'],
    logoUrl: '/logos/notion.svg',
    reviewDate: '2026-01-18',
    verdict: 'Notion AI transforms your workspace into an intelligent assistant. If you already use Notion, adding AI is a no-brainer. The integrated experience beats using standalone AI tools alongside a separate project management system.',
  },
  {
    slug: 'github-copilot',
    name: 'GitHub Copilot',
    tagline: 'AI pair programmer that helps you write code faster with contextual suggestions.',
    category: ['coding'],
    rating: 4.6,
    pricing: [
      { plan: 'Free', price: '$0', period: 'month' },
      { plan: 'Pro', price: '$10', period: 'month' },
      { plan: 'Pro+', price: '$39', period: 'month' },
    ],
    affiliateUrl: 'https://oneclickai.io/go/copilot',
    features: [
      'Real-time code suggestions',
      'Multi-line code completion',
      'Chat-based coding assistance',
      'Pull request summaries',
      'Documentation generation',
      'Test generation',
      'Multi-model support (GPT-4o, Claude)',
      'IDE integration (VS Code, JetBrains, Neovim)',
    ],
    pros: [
      'Dramatically speeds up coding',
      'Excellent IDE integration',
      'Understands project context',
      'Free tier available for individual developers',
      'Supports all major programming languages',
    ],
    cons: [
      'Can suggest insecure code patterns',
      'Sometimes generates incorrect logic',
      'Enterprise features require expensive plans',
      'Occasional latency in suggestions',
    ],
    bestFor: ['Software developers', 'Freelance programmers', 'Dev teams', 'Students'],
    logoUrl: '/logos/copilot.svg',
    reviewDate: '2026-01-12',
    verdict: 'GitHub Copilot is essential for any developer serious about productivity. The free tier is generous enough for hobbyists, while Pro delivers serious ROI for professional developers — easily saving 1-2 hours per day.',
  },
  {
    slug: 'midjourney',
    name: 'Midjourney',
    tagline: 'The leading AI image generator, known for stunning artistic quality.',
    category: ['design', 'marketing'],
    rating: 4.7,
    pricing: [
      { plan: 'Basic', price: '$10', period: 'month' },
      { plan: 'Standard', price: '$30', period: 'month' },
      { plan: 'Pro', price: '$60', period: 'month' },
    ],
    affiliateUrl: 'https://oneclickai.io/go/midjourney',
    features: [
      'Photorealistic image generation',
      'Artistic style rendering',
      'Image upscaling and variations',
      'Pan, zoom, and editing tools',
      'Style references and consistency',
      'Web-based editor',
      'Describe-to-prompt feature',
      'Batch generation',
    ],
    pros: [
      'Best-in-class image quality',
      'Unique artistic aesthetic',
      'Active community for inspiration',
      'Constantly improving model versions',
      'Commercial usage rights on paid plans',
    ],
    cons: [
      'No free trial available',
      'Learning curve for prompt engineering',
      'Limited editing compared to Photoshop',
      'Standard plan needed for commercial use',
    ],
    bestFor: ['Designers', 'Marketing teams', 'Content creators', 'Social media managers'],
    logoUrl: '/logos/midjourney.svg',
    reviewDate: '2026-01-10',
    verdict: 'Midjourney produces the most visually stunning AI-generated images available. The Standard plan at $30/month is the sweet spot — offering enough generation credits and commercial rights for most professionals.',
  },
  {
    slug: 'perplexity-pro',
    name: 'Perplexity Pro',
    tagline: 'AI-powered research engine that provides cited, accurate answers from the web.',
    category: ['research'],
    rating: 4.5,
    pricing: [
      { plan: 'Free', price: '$0', period: 'month' },
      { plan: 'Pro', price: '$20', period: 'month' },
    ],
    affiliateUrl: 'https://oneclickai.io/go/perplexity',
    features: [
      'Real-time web search with citations',
      'Multiple AI model access',
      'File upload and analysis',
      'Collections for organized research',
      'API access for developers',
      'Focus modes (Academic, Writing, etc.)',
      'Unlimited Pro searches',
      'Image generation with search',
    ],
    pros: [
      'Always cites sources for verification',
      'Real-time information access',
      'Excellent for research workflows',
      'Clean, distraction-free interface',
      'Multiple model options',
    ],
    cons: [
      'Free tier limited to 5 Pro searches/day',
      'Less creative than ChatGPT or Claude',
      'Not ideal for long-form writing',
      'Occasional source quality issues',
    ],
    bestFor: ['Researchers', 'Journalists', 'Students', 'Market analysts'],
    logoUrl: '/logos/perplexity.svg',
    reviewDate: '2026-01-08',
    verdict: 'Perplexity Pro is the best AI research tool available. If you need accurate, cited information quickly, nothing else comes close. The $20/month is worth it for anyone who does regular research.',
  },
  {
    slug: 'grammarly',
    name: 'Grammarly',
    tagline: 'AI writing assistant for grammar, clarity, tone, and style improvements.',
    category: ['writing', 'marketing'],
    rating: 4.4,
    pricing: [
      { plan: 'Free', price: '$0', period: 'month' },
      { plan: 'Pro', price: '$12', period: 'month' },
      { plan: 'Enterprise', price: 'Custom', period: 'month' },
    ],
    affiliateUrl: 'https://oneclickai.io/go/grammarly',
    features: [
      'Grammar and spelling correction',
      'Tone detection and adjustment',
      'Full-sentence rewrites',
      'AI text generation',
      'Plagiarism detection',
      'Brand tone profiles',
      'Works across apps and browsers',
      'Strategic writing suggestions',
    ],
    pros: [
      'Works everywhere you write',
      'Excellent grammar and style corrections',
      'Professional tone guidance',
      'Easy to set up and use',
      'Strong privacy controls',
    ],
    cons: [
      'AI generation not as powerful as ChatGPT',
      'Can be overly conservative with suggestions',
      'Premium features require paid plan',
      'Occasional false positives on technical writing',
    ],
    bestFor: ['Business writers', 'Email professionals', 'Non-native English speakers', 'Students'],
    logoUrl: '/logos/grammarly.svg',
    reviewDate: '2026-01-05',
    verdict: 'Grammarly remains the best AI writing assistant for everyday professional communication. At $12/month, it pays for itself by catching embarrassing errors and improving the clarity of your writing across every platform.',
  },
  {
    slug: 'zapier',
    name: 'Zapier',
    tagline: 'No-code automation platform that connects your apps and automates workflows.',
    category: ['automation'],
    rating: 4.5,
    pricing: [
      { plan: 'Free', price: '$0', period: 'month' },
      { plan: 'Professional', price: '$29.99', period: 'month' },
      { plan: 'Team', price: '$103.50', period: 'month' },
    ],
    affiliateUrl: 'https://oneclickai.io/go/zapier',
    features: [
      '7,000+ app integrations',
      'AI-powered workflow builder',
      'Multi-step Zaps',
      'Conditional logic and paths',
      'Scheduled automations',
      'Webhooks and API connections',
      'AI chatbots and agents',
      'Data transformation tools',
    ],
    pros: [
      'Largest integration library available',
      'No coding required',
      'AI helps build automations',
      'Reliable and well-documented',
      'Excellent customer support',
    ],
    cons: [
      'Can get expensive with high task volumes',
      'Complex automations have learning curve',
      'Free tier very limited (100 tasks/month)',
      'Some integrations lack depth',
    ],
    bestFor: ['Small business owners', 'Operations managers', 'Marketing teams', 'Solopreneurs'],
    logoUrl: '/logos/zapier.svg',
    reviewDate: '2026-01-03',
    verdict: 'Zapier is the glue that holds modern business workflows together. If you are spending time on repetitive tasks between apps, Zapier will likely pay for itself within the first week of use.',
  },
];

export function getToolBySlug(slug: string): AITool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): AITool[] {
  return tools.filter((t) => t.category.includes(category));
}

export function getFeaturedTools(): AITool[] {
  return tools.slice(0, 6);
}
