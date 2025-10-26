"use client";

import { useEffect } from "react";

export function useFaviconStatus(url = process.env.NEXT_PUBLIC_HEALTH_URL || "/api/health", intervalMs = 20000) {
  useEffect(() => {
    let timer: any;

    const setFavicon = (href: string) => {
      const head = document.head;
      let el = head.querySelector<HTMLLinkElement>(
        "link[data-favicon-watcher='true']"
      );
      if (!el) {
        el = document.createElement("link");
        el.rel = "icon";
        el.type = "image/x-icon";
        el.setAttribute("data-favicon-watcher", "true");
        head.appendChild(el);
      }
      el.href = href;
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
