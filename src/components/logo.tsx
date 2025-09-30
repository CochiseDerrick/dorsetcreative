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
        <path d="M16 8V24M16 24C19.3137 24 22 21.3137 22 18C22 14.6863 19.3137 12 16 12C12.6863 12 10 14.6863 10 18C10 21.3137 12.6863 24 16 24Z" stroke="hsl(var(--primary-foreground))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13 15L11 13" stroke="hsl(var(--primary-foreground))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19 15L21 13" stroke="hsl(var(--primary-foreground))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span className="text-xl font-bold">Dorset Creative</span>
    </div>
  );
};

export default Logo;
