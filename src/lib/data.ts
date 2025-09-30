
import type { Project, Service, BlogPost, TeamMember, Testimonial } from './types';

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

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-future-of-web-design-2024-trends',
    title: 'The Future of Web Design: 2024 Trends',
    author: 'Jane Doe',
    date: '2024-05-15',
    imageId: 'blog-post-1',
    excerpt: 'Explore the latest trends shaping the future of web design, from AI integration to immersive 3D experiences...',
    content: 'The web is in a constant state of evolution, and 2024 is no exception. This year, we\'re seeing a convergence of technology and creativity that is pushing the boundaries of what\'s possible online. Key trends include the rise of AI-driven design tools that assist with layout and content generation, the increasing popularity of bento grids for organizing information, and a move towards more dynamic, animated interfaces that captivate users. Another significant trend is the adoption of immersive 3D elements and WebGL, which create engaging and interactive experiences that were once the exclusive domain of video games. As designers, we must embrace these new tools and techniques to create websites that are not only visually stunning but also highly functional and user-friendly.'
  },
  {
    slug: 'react-vs-vue-which-framework-is-right-for-you',
    title: 'React vs. Vue: Which Framework is Right for You?',
    author: 'John Smith',
    date: '2024-04-22',
    imageId: 'blog-post-2',
    excerpt: 'A deep dive into the pros and cons of React and Vue to help you choose the best framework for your next project...',
    content: 'Choosing the right JavaScript framework is a critical decision for any web development project. React, backed by Facebook, boasts a massive ecosystem, a component-based architecture, and a "learn once, write anywhere" philosophy. Its virtual DOM provides excellent performance, and its popularity means a wealth of resources and community support. On the other hand, Vue, often described as a more progressive framework, is known for its gentle learning curve, excellent documentation, and elegant syntax. Its two-way data binding and flexible structure make it a favorite for developers who appreciate simplicity and performance. Ultimately, the choice depends on your team\'s expertise, project requirements, and long-term goals. Both are powerful tools capable of building modern, scalable web applications.'
  },
  {
    slug: 'mastering-seo-a-beginners-guide',
    title: 'Mastering SEO: A Beginner\'s Guide',
    author: 'Alex Johnson',
    date: '2024-03-10',
    imageId: 'blog-post-3',
    excerpt: 'Unlock the secrets of search engine optimization and learn how to drive organic traffic to your website...',
    content: 'Search Engine Optimization (SEO) is the art and science of getting pages to rank higher in search engines like Google. For beginners, it can seem daunting, but it boils down to a few core principles. First is on-page SEO, which involves optimizing your content and HTML source code. This includes using relevant keywords, writing compelling meta descriptions, and ensuring your site has a logical structure. Second is off-page SEO, which focuses on building authority through backlinks from other reputable websites. Finally, technical SEO ensures that search engines can crawl and index your site effectively. This involves optimizing site speed, ensuring mobile-friendliness, and using structured data. By focusing on these areas and consistently creating high-quality content, you can significantly improve your website\'s visibility and attract more organic traffic.'
  },
];

export const teamMembers: TeamMember[] = [
  { name: 'Jane Doe', role: 'Lead Designer', imageId: 'team-member-1', bio: 'With over a decade of experience, Jane is the creative force behind our most iconic designs. She has a passion for typography and minimalist aesthetics.' },
  { name: 'John Smith', role: 'Lead Developer', imageId: 'team-member-2', bio: 'John is a full-stack wizard who can turn any design into a high-performance application. He specializes in React and Node.js.' },
  { name: 'Alex Johnson', role: 'SEO Strategist', imageId: 'team-member-3', bio: 'Alex lives and breathes data. His analytical approach to SEO helps our clients dominate search rankings and drive organic growth.' },
  { name: 'Sarah Lee', role: 'Project Manager', imageId: 'team-member-4', bio: 'Sarah ensures every project runs smoothly from start to finish. Her organizational skills and clear communication are key to our success.' },
];

    