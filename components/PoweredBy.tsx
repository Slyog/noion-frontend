'use client';

import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function PoweredBy() {
  return (
    <div className="mt-2">
      <Badge variant="outline" className="bg-night2/40 border-gold/40 text-gold font-medium">
        Powered by{" "}
        <Link href="https://solaredgecloud.noion.app" target="_blank" className="ml-1 underline hover:text-ivory">
          SolarEdgeCloud
        </Link>
      </Badge>
    </div>
  );
}
