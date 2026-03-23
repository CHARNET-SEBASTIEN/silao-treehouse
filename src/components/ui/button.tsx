import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_18px_40px_-24px_hsl(var(--primary)/0.95)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/85 shadow-[0_18px_40px_-24px_hsl(var(--secondary)/0.95)]",
        ghost: "hover:bg-accent/15 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "rounded-full bg-secondary text-secondary-foreground font-bold text-lg tracking-[0.02em] shadow-[0_22px_45px_-26px_hsl(var(--secondary)/0.98)] hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground",
        "hero-outline": "rounded-full border border-white/12 bg-white/5 text-foreground font-bold text-lg tracking-[0.02em] hover:border-primary/45 hover:bg-primary/12 hover:text-foreground",
        "hero-warm": "rounded-full bg-accent text-accent-foreground font-bold text-lg tracking-[0.02em] shadow-[0_22px_45px_-26px_hsl(var(--accent)/0.98)] hover:-translate-y-0.5 hover:brightness-95",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-full px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
