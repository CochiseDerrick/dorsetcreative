import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
       <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <rect width="32" height="32" rx="8" fill="currentColor"/>
        <path d="M10 10V22H16C20.4183 22 24 18.4183 24 14C24 9.58172 20.4183 6 16 6H10V10Z" fill="hsl(var(--primary-foreground))" fillOpacity="0.1"/>
        <path d="M10 10V22H16C20.4183 22 24 18.4183 24 14C24 9.58172 20.4183 6 16 6H10" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 10C21.0667 11.5 21.0667 12.5 22 14" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-xl font-bold">Dorset Creative</span>
    </div>
  );
};

export default Logo;
