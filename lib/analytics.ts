"use client";

type Payload = Record<string, any>;

export function track(event: string, payload?: Payload) {
  if (typeof window === "undefined") return;
  // GA4
  // @ts-ignore
  if (window.gtag) {
    // @ts-ignore
    window.gtag("event", event, payload || {});
  }
  // Plausible
  // @ts-ignore
  if (window.plausible) {
    // @ts-ignore
    window.plausible(event, { props: payload || {} });
  }
}
