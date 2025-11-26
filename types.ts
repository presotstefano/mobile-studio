export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  features?: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}
