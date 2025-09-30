
import type { Project, Service, Trend, TeamMember, Testimonial } from './types';

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

export const projects: Project[] = [
  { id: '1', title: 'Zenith E-commerce', description: 'A cutting-edge online retail platform with a focus on user experience.', imageId: 'portfolio-1', tags: ['Web Design', 'React', 'E-commerce'] },
  { id: '2', title: 'Fintech Mobile App', description: 'A secure and intuitive mobile banking application for a new generation.', imageId: 'portfolio-2', tags: ['App Development', 'iOS', 'Android'] },
  { id: '3', title: 'Innovate SaaS', description: 'A comprehensive dashboard for a B2B software-as-a-service product.', imageId: 'portfolio-3', tags: ['Web Design', 'UI/UX', 'Dashboard'] },
  { id: '4', title: 'Globe Corp Website', description: 'A full redesign of a multinational corporation\'s online presence.', imageId: 'portfolio-4', tags: ['Web Design', 'Corporate', 'CMS'] },
  { id: '5', title: 'Connect Social', description: 'A new social media platform designed to connect local communities.', imageId: 'portfolio-5', tags: ['App Development', 'Web Design', 'Social Media'] },
  { id: '6', title: 'Voyage Booking', description: 'A streamlined booking system for a luxury travel agency.', imageId: 'portfolio-6', tags: ['Web Design', 'Booking System', 'API Integration'] },
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
    imageId: 'trend-post-1',
    excerpt: 'Move over, grids! Asymmetrical layouts are bringing a new level of dynamism and visual interest to web design. Discover how breaking the balance can create a more engaging user experience.',
    content: 'For years, web design has been dominated by symmetrical, grid-based layouts. They are balanced, organized, and easy to navigate. However, a new trend is emerging that challenges this norm: asymmetry. Asymmetrical layouts create tension and dynamism by intentionally avoiding a perfect mirror image. This can guide the user\'s eye across the page in a more deliberate way, highlighting key content and creating a more memorable visual journey. When used effectively, asymmetry can make a design feel more modern, energetic, and unique, setting it apart from more traditional, predictable websites. It allows for more creative freedom in placing elements like text, images, and calls-to-action, leading to innovative and engaging user experiences.'
  },
  {
    slug: 'broken-grid-and-overlapping-elements',
    title: 'Breaking the Grid: A Look at Overlapping Elements',
    author: 'Marcus Finch',
    date: '2024-07-25T14:30:00.000Z',
    imageId: 'trend-post-2',
    excerpt: 'Designers are pushing boundaries by breaking free from rigid grid structures and using overlapping elements to add depth and a sense of tangibility to their websites.',
    content: 'The "broken grid" layout is a design approach that starts with a traditional grid and then intentionally deviates from it. This often involves layering and overlapping elements, such as images extending beyond their container or text blocks sitting on top of photos. This technique adds a sense of depth and a tactile quality to the design, making it feel more like a physical collage. Overlapping elements can create a strong visual hierarchy, drawing attention to important information and establishing a relationship between different pieces of content. While it can be more challenging to implement responsively, the result is often a sophisticated and visually rich website that captures user attention.'
  },
  {
    slug: 'interactive-and-animated-interfaces',
    title: 'Beyond Static: The Power of Interactive and Animated Interfaces',
    author: 'Liam Chen',
    date: '2024-07-22T09:00:00.000Z',
    imageId: 'trend-post-3',
    excerpt: 'From subtle micro-interactions to full-blown animations, interactive elements are transforming websites from static pages into dynamic experiences that delight and engage users.',
    content: 'Interactivity is no longer just a bonus feature; it\'s becoming a core component of modern web design. Micro-interactions, such as button hover effects or animated form inputs, provide immediate feedback and make an interface feel more responsive and intuitive. Larger-scale animations and page transitions can guide users through a narrative, tell a story, and create a "wow" factor. These dynamic elements, when used thoughtfully, improve usability by providing cues and context. They can also significantly enhance brand personality, making a website more enjoyable and memorable. The key is to ensure animations are purposeful and enhance the user experience, rather than distracting from it.'
  },
  {
    slug: 'minimalism-and-white-space',
    title: 'Minimalism and White Space: The Art of Less is More in Layouts',
    author: 'Elena Vance',
    date: '2024-07-20T11:00:00.000Z',
    imageId: 'trend-post-4',
    excerpt: 'Discover how strategic use of white space and minimalist principles can lead to cleaner, more focused, and elegant app and website layouts that improve user comprehension.',
    content: 'Minimalism in web and app design is not just about removing elements; it\'s a deliberate strategy to prioritize content and functionality. By embracing white space (or negative space), designers can reduce clutter, improve legibility, and create a calming, focused user experience. A minimalist layout guides the user\'s attention directly to the most important content and actions, such as a call-to-action button or a key piece of information. This approach leads to designs that are not only aesthetically pleasing and timeless but also perform better by making interfaces more intuitive and easier to navigate. The "less is more" philosophy is a powerful tool for creating elegant and user-friendly digital products.'
  },
  {
    slug: 'dark-mode-ui-layouts',
    title: 'Dark Mode: A New Standard in UI Layout Design',
    author: 'Marcus Finch',
    date: '2024-07-18T16:00:00.000Z',
    imageId: 'trend-post-5',
    excerpt: 'Dark mode has moved from a niche feature to a user expectation. We explore the layout considerations for designing effective, readable, and visually stunning dark UIs.',
    content: 'Dark mode is more than just an inverted color scheme; it requires a different approach to layout and visual hierarchy. In a dark UI, contrast, typography, and depth play crucial roles. Designers must carefully manage light and shadow to create separation between elements and guide the user. Because bright colors can cause eye strain against a dark background, a more subdued and limited color palette is often more effective. Spacing and layout become even more critical to prevent a design from feeling crowded. When done right, a dark mode layout can reduce eye strain in low-light conditions, save battery life on OLED screens, and provide a sleek, modern aesthetic that many users now prefer.'
  },
  {
    slug: 'single-page-vs-multi-page-layouts',
    title: 'SPA vs. Multi-Page: Choosing the Right Application Layout',
    author: 'Liam Chen',
    date: '2024-07-15T08:00:00.000Z',
    imageId: 'trend-post-6',
    excerpt: 'The architecture of your application layout—Single-Page Application (SPA) or Multi-Page Application (MPA)—has a huge impact on user experience. Which one is right for your project?',
    content: 'Choosing between a Single-Page Application (SPA) and a Multi-Page Application (MPA) is a fundamental layout decision. SPAs load a single HTML page and dynamically update content, offering a fast, fluid, app-like experience. They are great for complex applications with a lot of user interaction, like dashboards or social networks. MPAs, the traditional web model, reload the entire page with each new request. This approach is often better for SEO and is well-suited for content-heavy sites like e-commerce stores or blogs where each page needs to be indexable. The choice depends on the project\'s goals: a rich, interactive experience might favor an SPA, while a broad, content-focused site might be better as an MPA.'
  }
];


export const teamMembers: TeamMember[] = [
  { name: 'Elena Vance', role: 'Creative Director', imageId: 'team-member-1', bio: 'With a keen eye for aesthetics and a decade of leadership, Elena guides our creative vision, ensuring every project is a masterpiece of design and strategy.' },
  { name: 'Marcus Finch', role: 'Technical Lead', imageId: 'team-member-2', bio: 'Marcus is a master of code and architecture. He leads our development team in building robust, scalable, and cutting-edge digital solutions.' },
  { name: 'Liam Chen', role: 'Head of Digital Strategy', imageId: 'team-member-3', bio: 'Liam combines data-driven insights with market expertise to craft SEO and content strategies that deliver measurable results and drive organic growth.' },
  { name: 'Isabelle Rossi', role: 'Lead Project Manager', imageId: 'team-member-4', bio: 'Isabelle is the organizational heart of our agency. She orchestrates every project with precision, ensuring we deliver on time, on budget, and beyond expectations.' },
];
