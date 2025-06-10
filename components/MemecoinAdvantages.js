import { motion } from 'framer-motion';

export default function MemecoinAdvantages() {
  const advantages = [
    'Instant liquidity & community buy-in',
    'Funding without traditional VCs',
    'Narrative virality and meme culture',
  ];
  return (
    <section className="py-20 bg-gray-950 text-center" id="memecoins">
      <h2 className="text-4xl font-semibold mb-10">Memecoin Advantages</h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {advantages.map((adv, i) => (
          <motion.div
            key={i}
            className="p-6 bg-gray-800 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {adv}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
