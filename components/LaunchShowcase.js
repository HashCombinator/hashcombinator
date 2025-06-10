import { motion } from 'framer-motion';

export default function LaunchShowcase() {
  const partners = [
    { name: 'ExampleDAO', logo: '/logo.svg' },
    { name: 'AIDefi', logo: '/logo.svg' },
    { name: 'Web3Analytics', logo: '/logo.svg' },
  ];
  return (
    <section className="py-20 text-center" id="launches">
      <h2 className="text-4xl font-semibold mb-10">Launch Showcase</h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
        {partners.map((p, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <img src={p.logo} alt={p.name} className="w-20 h-20 mb-2" />
            <span>{p.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
