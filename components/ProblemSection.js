import { motion } from 'framer-motion';

export default function ProblemSection() {
  const items = [
    'Web2 AI startups lack crypto expertise',
    'Traditional funding is slow and limited',
    'Communities are hard to bootstrap',
  ];
  return (
    <section className="py-20 text-center" id="problem">
      <h2 className="text-4xl font-semibold mb-10">Problem in Web2 AI</h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="p-6 bg-gray-800 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
