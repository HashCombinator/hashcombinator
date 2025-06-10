import { motion } from 'framer-motion';

const steps = [
  'Curate scalable startups',
  'Build MVPs fast',
  'Launch memecoins strategically',
  'Drive narrative & distribution'
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our 4-Phase Process
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-900 rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="text-accent text-3xl font-bold mb-2">{i + 1}</div>
              <p className="text-gray-300">{s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
