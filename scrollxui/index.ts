'use client';

import { createElement, type CSSProperties, type ReactNode } from "react";

export { Button, buttonVariants } from "../components/ui/button";
export type { ButtonProps } from "../components/ui/button";

export { Badge } from "../components/ui/badge";
export { Input } from "../components/ui/input";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "../components/ui/table";

type ScrollxUIProviderProps = {
  theme?: {
    colors?: Record<string, string>;
    radii?: Record<string, string>;
    shadows?: Record<string, string>;
    typography?: Record<string, unknown>;
    [key: string]: unknown;
  };
  children: ReactNode;
};

export function ScrollxUIProvider({ theme, children }: ScrollxUIProviderProps) {
  const style: CSSProperties = {};

  if (theme?.colors) {
    for (const [token, value] of Object.entries(theme.colors)) {
      (style as Record<string, string>)[`--scrollx-${token}`] = value;
    }
  }

  return createElement(
    "div",
    { style: Object.keys(style).length ? style : undefined },
    children
  );
}
