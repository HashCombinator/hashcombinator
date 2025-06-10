import { motion } from 'framer-motion';

const launches = [
  { title: 'NeuroScan AI', description: 'Skin cancer detection app' },
  { title: 'GameFi Royale', description: 'Play-to-earn battle game' },
  { title: 'Finhack Wallet', description: 'Crypto investment tools' }
];

export default function LaunchShowcase() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-accent text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Launch Showcase
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {launches.map((l, i) => (
            <motion.div
              key={i}
              className="bg-dark p-6 rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">{l.title}</h3>
              <p className="text-gray-300">{l.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
