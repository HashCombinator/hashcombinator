import { motion } from 'framer-motion';

const advantages = [
  'Kickstart liquidity with community-driven funding',
  'Build belief and ownership through memes',
  'Turn early adopters into an ecosystem of evangelists'
];

export default function AdvantagesSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-accent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Memecoin Advantages
        </motion.h2>
        <ul className="space-y-4 list-disc list-inside">
          {advantages.map((a, i) => (
            <motion.li
              key={i}
              className="text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {a}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
