'use client';

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, PenTool, Network } from "lucide-react";

const cards = [
  {
    title: "Express",
    body: "Write or speak a thought. noion structures each expression as a relational node.",
    icon: (
      <div className="flex items-center gap-2">
        <PenTool className="h-5 w-5 text-gold" />
        <Mic className="h-5 w-5 text-gold/80" />
      </div>
    ),
  },
  {
    title: "Relate",
    body: "noion embeds your input and links it with memories and concepts across your graph.",
    icon: <Network className="h-6 w-6 text-gold" />,
  },
  {
    title: "Reflect",
    body: "Navigate clusters, surface patterns, and see the meanings that emerge between your thoughts.",
    icon: <Network className="h-6 w-6 text-gold/80" />,
  },
];

const containerVariants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
};

export default function HowGrid() {
  return (
    <motion.div className="grid gap-6 md:grid-cols-3" variants={containerVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
      {cards.map((card) => (
        <motion.div key={card.title} variants={cardVariants} transition={{ duration: 0.45, ease: "easeOut" }}>
          <Card className="bg-night2/40 border-night2 text-ivory hover:-translate-y-1 hover:border-gold/40 transition">
            <CardHeader className="flex flex-row items-center gap-3">
              {card.icon}
              <CardTitle className="text-gold text-xl">{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-ivory/85">{card.body}</CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

