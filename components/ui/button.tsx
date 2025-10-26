"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-night disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-background shadow-glow hover:bg-primary-hover animate-[pulse_3s_ease-in-out_infinite]",
        outline:
          "border border-border/70 bg-transparent text-primary hover:text-accent-dim hover:border-accent-dim",
        ghost:
          "text-primary hover:text-accent-dim hover:bg-border/40 bg-transparent",
        link: "text-primary underline-offset-4 hover:text-accent-dim",
        noion:
          "rounded-xl border border-gold/60 bg-night2/70 text-gold shadow hover:border-gold hover:text-night hover:bg-gold/90",
        noionSolid:
          "rounded-xl bg-gold text-night shadow-md hover:bg-gold/90 focus-visible:ring-gold/40",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 rounded-full px-5 text-xs",
        lg: "h-12 rounded-full px-8 text-base",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
