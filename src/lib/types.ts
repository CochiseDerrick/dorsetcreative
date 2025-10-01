
export type Service = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  pricingTiers: {
    name: string;
    price: string;
    features: string[];
  }[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
};

export type Testimonial = {
  name: string;
  company: string;
  quote: string;
};

export type Trend = {
  slug: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  imageHint: string;
  excerpt: string;
  content: string;
};
