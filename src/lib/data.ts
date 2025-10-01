
import type { Project, Service, Trend, Testimonial } from './types';

export const services: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'We create stunning, user-centric websites that are both beautiful and functional, ensuring a seamless user experience across all devices.',
    longDescription: 'Our web design process focuses on creating a digital presence that truly represents your brand. We begin with a deep dive into your business goals and target audience. From wireframing and prototyping to the final polished design, we prioritize usability, accessibility, and visual appeal. We build responsive websites that look great on desktops, tablets, and smartphones, ensuring a consistent and engaging experience for every visitor.',
    pricingTiers: [
      { name: 'Basic', price: '£1,200', features: ['5-page Website', 'Responsive Design', 'Contact Form', 'Basic SEO'] },
      { name: 'Pro', price: '£2,500', features: ['10-page Website', 'Custom Design', 'CMS Integration', 'Advanced SEO'] },
      { name: 'Enterprise', price: 'Contact Us', features: ['Unlimited Pages', 'E-commerce', 'Custom Functionality', 'Dedicated Support'] },
    ]
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'From concept to launch, we build intuitive and powerful mobile applications for iOS and Android that engage users and drive growth.',
    longDescription: 'We specialize in native and cross-platform mobile app development. Our team guides you through the entire lifecycle, from initial strategy and market research to UI/UX design, development, testing, and App Store submission. We build scalable, secure, and high-performance applications that provide a rich user experience and help you achieve your business objectives.',
    pricingTiers: [
      { name: 'MVP', price: '£8,000', features: ['Web, iOS & Android', 'Core Features', 'UI/UX Design', 'App Store Submission'] },
      { name: 'Full-Featured', price: '£20,000', features: ['Web, iOS & Android', 'Advanced Features', 'Backend API', 'Analytics'] },
      { name: 'Enterprise', price: 'Contact Us', features: ['Custom Architecture', 'Third-party Integrations', 'Ongoing Maintenance', 'Dedicated Team'] },
    ]
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Boost your online visibility and drive organic traffic with our data-driven SEO strategies, tailored to your business goals.',
    longDescription: 'Our SEO services are designed to increase your rankings in search engine results. We conduct comprehensive keyword research, on-page optimization, technical SEO audits, and quality link building. We focus on sustainable, white-hat techniques to build your online authority and attract qualified leads. Our transparent reporting keeps you informed of your progress every step of the way.',
    pricingTiers: [
      { name: 'Audit', price: '£400', features: ['Comprehensive Site Audit', 'Keyword Research', 'Actionable Report'] },
      { name: 'Monthly', price: '£1,000/mo', features: ['On-Page & Off-Page SEO', 'Content Strategy', 'Monthly Reporting'] },
      { name: 'Local SEO', price: '£650/mo', features: ['Google Business Profile', 'Local Citations', 'Review Management'] },
    ]
  },
];

export const testimonials: Testimonial[] = [
  { name: 'Alice Johnson', company: 'Innovate Inc.', quote: 'Dorset Creative transformed our online presence. Their attention to detail and creative vision is unparalleled.' },
  { name: 'Bob Williams', company: 'Tech Solutions', quote: 'The mobile app they developed exceeded all our expectations. It\'s sleek, fast, and user-friendly.' },
  { name: 'Charlie Brown', company: 'Global Exports', quote: 'Our search engine rankings have skyrocketed since we started working with their SEO team. Highly recommended!' },
  { name: 'Diana Miller', company: 'Fresh Foods Co.', quote: 'A fantastic team to work with. They are responsive, professional, and delivered a beautiful website on time.' },
  { name: 'Ethan Davis', company: 'Startup Hub', quote: 'Their expertise in both design and development was a huge asset. They are a true partner.' },
];

export const trends: Trend[] = [
  {
    slug: 'asymmetrical-layouts-in-web-design',
    title: 'The Rise of Asymmetrical Layouts in Web Design',
    author: 'Elena Vance',
    date: '2024-07-28T10:00:00.000Z',
    imageUrl: 'https://images.unsplash.com/photo-1723223440648-dc41fb3d9a7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxkZXNpZ24lMjB0cmVuZHN8ZW58MHx8fHwxNzU5MjYwOTMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'design trends',
    excerpt: 'Move over, grids! Asymmetrical layouts are bringing a new level of dynamism and visual interest to web design. Discover how breaking the balance can create a more engaging user experience.',
    content: 'For years, web design has been dominated by symmetrical, grid-based layouts. They are balanced, organized, and easy to navigate. However, a new trend is emerging that challenges this norm: asymmetry. Asymmetrical layouts create tension and dynamism by intentionally avoiding a perfect mirror image. This can guide the user\'s eye across the page in a more deliberate way, highlighting key content and creating a more memorable visual journey. When used effectively, asymmetry can make a design feel more modern, energetic, and unique, setting it apart from more traditional, predictable websites. It allows for more creative freedom in placing elements like text, images, and calls-to-action, leading to innovative and engaging user experiences.'
  },
  {
    slug: 'broken-grid-and-overlapping-elements',
    title: 'Breaking the Grid: A Look at Overlapping Elements',
    author: 'Marcus Finch',
    date: '2024-07-25T14:30:00.000Z',
    imageUrl: 'https://images.unsplash.com/photo-1753998943413-8cba1b923c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjb2RlJTIwZWRpdG9yfGVufDB8fHx8fDE3NTkxNTgxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'code editor',
    excerpt: 'Designers are pushing boundaries by breaking free from rigid grid structures and using overlapping elements to add depth and a sense of tangibility to their websites.',
    content: 'The "broken grid" layout is a design approach that starts with a traditional grid and then intentionally deviates from it. This often involves layering and overlapping elements, such as images extending beyond their container or text blocks sitting on top of photos. This technique adds a sense of depth and a tactile quality to the design, making it feel more like a physical collage. Overlapping elements can create a strong visual hierarchy, drawing attention to important information and establishing a relationship between different pieces of content. While it can be more challenging to implement responsively, the result is often a sophisticated and visually rich website that captures user attention.'
  },
  {
    slug: 'interactive-and-animated-interfaces',
    title: 'Beyond Static: The Power of Interactive and Animated Interfaces',
    author: 'Liam Chen',
    date: '2024-07-22T09:00:00.000Z',
    imageUrl: 'https://images.unsplash.com/photo-1738687221127-fe4d606cfcd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c2VvJTIwYW5hbHl0aWNzfGVufDB8fHx8fDE3NTkyNTMxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'seo analytics',
    excerpt: 'From subtle micro-interactions to full-blown animations, interactive elements are transforming websites from static pages into dynamic experiences that delight and engage users.',
    content: 'Interactivity is no longer just a bonus feature; it\'s becoming a core component of modern web design. Micro-interactions, such as button hover effects or animated form inputs, provide immediate feedback and make an interface feel more responsive and intuitive. Larger-scale animations and page transitions can guide users through a narrative, tell a story, and create a "wow" factor. These dynamic elements, when used thoughtfully, improve usability by providing cues and context. They can also significantly enhance brand personality, making a website more enjoyable and memorable. The key is to ensure animations are purposeful and enhance the user experience, rather than distracting from it.'
  },
  {
    slug: 'minimalism-and-white-space',
    title: 'Minimalism and White Space: The Art of Less is More in Layouts',
    author: 'Elena Vance',
    date: '2024-07-20T11:00:00.000Z',
    imageUrl: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtaW5pbWFsaXN0JTIwZGVza3xlbnwwfHx8fDE3MjE4MTQwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'minimalist desk',
    excerpt: 'Discover how strategic use of white space and minimalist principles can lead to cleaner, more focused, and elegant app and website layouts that improve user comprehension.',
    content: 'Minimalism in web and app design is not just about removing elements; it\'s a deliberate strategy to prioritize content and functionality. By embracing white space (or negative space), designers can reduce clutter, improve legibility, and create a calming, focused user experience. A minimalist layout guides the user\'s attention directly to the most important content and actions, such as a call-to-action button or a key piece of information. This approach leads to designs that are not only aesthetically pleasing and timeless but also perform better by making interfaces more intuitive and easier to navigate. The "less is more" philosophy is a powerful tool for creating elegant and user-friendly digital products.'
  },
  {
    slug: 'dark-mode-ui-layouts',
    title: 'Dark Mode: A New Standard in UI Layout Design',
    author: 'Marcus Finch',
    date: '2024-07-18T16:00:00.000Z',
    imageUrl: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxkYXJrJTIwbW9kZSUyMFVJdGVufDB8fHx8MTcyMTgxNDExNHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'dark mode UI',
    excerpt: 'Dark mode has moved from a niche feature to a user expectation. We explore the layout considerations for designing effective, readable, and visually stunning dark UIs.',
    content: 'Dark mode is more than just an inverted color scheme; it requires a different approach to layout and visual hierarchy. In a dark UI, contrast, typography, and depth play crucial roles. Designers must carefully manage light and shadow to create separation between elements and guide the user. Because bright colors can cause eye strain against a dark background, a more subdued and limited color palette is often more effective. Spacing and layout become even more critical to prevent a design from feeling crowded. When done right, a dark mode layout can reduce eye strain in low-light conditions, save battery life on OLED screens, and provide a sleek, modern aesthetic that many users now prefer.'
  },
  {
    slug: 'single-page-vs-multi-page-layouts',
    title: 'SPA vs. Multi-Page: Choosing the Right Application Layout',
    author: 'Liam Chen',
    date: '2024-07-15T08:00:00.000Z',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbnxlbnwwfHx8fDE3MjE4MTQxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'web application',
    excerpt: 'The architecture of your application layout—Single-Page Application (SPA) or Multi-Page Application (MPA)—has a huge impact on user experience. Which one is right for your project?',
    content: 'Choosing between a Single-Page Application (SPA) and a Multi-Page Application (MPA) is a fundamental layout decision. SPAs load a single HTML page and dynamically update content, offering a fast, fluid, app-like experience. They are great for complex applications with a lot of user interaction, like dashboards or social networks. MPAs, the traditional web model, reload the entire page with each new request. This approach is often better for SEO and is well-suited for content-heavy sites like e-commerce stores or blogs where each page needs to be indexable. The choice depends on the project\'s goals: a rich, interactive experience might favor an SPA, while a broad, content-focused site might be better as an MPA.'
  }
];
