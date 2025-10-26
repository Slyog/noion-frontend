'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Card = {
  title: string;
  body: string;
  icon?: ReactNode;
};

interface CardGridProps {
  cards: Card[];
  columns?: string;
}

const fadeRiseChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true },
};

export function CardGrid({ cards, columns = "md:grid-cols-3" }: CardGridProps) {
  return (
    <div className={`grid gap-6 ${columns}`}>
      {cards.map((card) => (
        <motion.article
          key={card.title}
          className="bg-night2/40 border border-night2 rounded-2xl p-6 transition hover:-translate-y-1 hover:border-gold/40"
          {...fadeRiseChild}
        >
          {card.icon && <div className="mb-4">{card.icon}</div>}
          <h3 className="text-xl font-semibold text-gold mb-2">{card.title}</h3>
          <p className="text-ivory/85 text-sm">{card.body}</p>
        </motion.article>
      ))}
    </div>
  );
}
