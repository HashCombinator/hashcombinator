import { motion } from 'framer-motion';

export default function ProblemSection() {
  return (
    <section className="py-20 bg-dark text-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Web2 & AI Startups Struggle
        </motion.h2>
        <p className="text-gray-300">
          Traditional accelerators miss crypto-native distribution. Liquidity and
          community buy-in are difficult without Web3 tooling.
        </p>
      </div>
    </section>
  );
}
