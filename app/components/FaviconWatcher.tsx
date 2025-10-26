"use client";
import { useFaviconStatus } from "@/app/hooks/useFaviconStatus";

export default function FaviconWatcher() {
  useFaviconStatus();
  return null;
}
