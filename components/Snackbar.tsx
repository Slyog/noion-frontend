"use client";

export default function Snackbar({ show, text }: { show: boolean; text: string }) {
  if (!show) return null;
  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ivory px-5 py-2 text-night shadow-soft">
      {text}
    </div>
  );
}
