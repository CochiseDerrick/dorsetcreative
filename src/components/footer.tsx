import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from './logo';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Crafting Digital Excellence for the Modern Web.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-sm hover:text-primary">Services</Link></li>
              <li><Link href="/portfolio" className="text-sm hover:text-primary">Portfolio</Link></li>
              <li><Link href="/trends" className="text-sm hover:text-primary">Trends</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#web-design" className="text-sm hover:text-primary">Web Design</Link></li>
              <li><Link href="/services#app-dev" className="text-sm hover:text-primary">App Development</Link></li>
              <li><Link href="/services#seo" className="text-sm hover:text-primary">SEO Optimization</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dorset Creative Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
