"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const TopSheet = DialogPrimitive.Root;
const TopSheetTrigger = DialogPrimitive.Trigger;
const TopSheetPortal = DialogPrimitive.Portal;
const TopSheetClose = DialogPrimitive.Close;

const TopSheetOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-40 bg-night/80 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
TopSheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

const TopSheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <TopSheetPortal>
    <TopSheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-4xl translate-y-0 rounded-b-3xl border border-night2/60 bg-night2/95 p-8 text-ivory shadow-[0_24px_80px_rgba(0,0,0,0.6)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        className
      )}
      {...props}
    >
      {children}
      <TopSheetClose className="absolute right-6 top-6 rounded-full border border-white/10 p-2 text-ivory/70 transition hover:text-ivory">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </TopSheetClose>
    </DialogPrimitive.Content>
  </TopSheetPortal>
));
TopSheetContent.displayName = "TopSheetContent";

export { TopSheet, TopSheetTrigger, TopSheetContent };
