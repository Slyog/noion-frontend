"use client";

import { useEffect } from "react";

export function useFaviconStatus(url = process.env.NEXT_PUBLIC_HEALTH_URL || "/api/health", intervalMs = 20000) {
  useEffect(() => {
    let timer: any;

    const setFavicon = (href: string) => {
      const head = document.head;
      [...head.querySelectorAll("link[rel*='icon']")].forEach((link) => head.removeChild(link));
      const el = document.createElement("link");
      el.rel = "icon";
      el.href = href;
      head.appendChild(el);
    };

    const check = async () => {
      try {
        const res = await fetch(url, { cache: "no-store" });
        setFavicon(res.ok ? "/favicons/favicon.ico" : "/favicons/favicon-offline.ico");
      } catch {
        setFavicon("/favicons/favicon-offline.ico");
      }
      timer = setTimeout(check, intervalMs);
    };

    check();
    return () => timer && clearTimeout(timer);
  }, [url, intervalMs]);
}
