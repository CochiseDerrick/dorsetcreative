
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

export const trends: Trend[] = [];

export const teamMembers: TeamMember[] = [
  { name: 'Jane Doe', role: 'Lead Designer', imageId: 'team-member-1', bio: 'With over a decade of experience, Jane is the creative force behind our most iconic designs. She has a passion for typography and minimalist aesthetics.' },
  { name: 'John Smith', role: 'Lead Developer', imageId: 'team-member-2', bio: 'John is a full-stack wizard who can turn any design into a high-performance application. He specializes in React and Node.js.' },
  { name: 'Alex Johnson', role: 'SEO Strategist', imageId: 'team-member-3', bio: 'Alex lives and breathes data. His analytical approach to SEO helps our clients dominate search rankings and drive organic growth.' },
  { name: 'Sarah Lee', role: 'Project Manager', imageId: 'team-member-4', bio: 'Sarah ensures every project runs smoothly from start to finish. Her organizational skills and clear communication are key to our success.' },
];

    
