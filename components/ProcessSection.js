import { motion } from 'framer-motion';

export default function ProcessSection() {
  const steps = [
    { title: 'Curate Scalable Startups', desc: 'We select founders with real AI, strong teams, and Web3 potential.' },
    { title: 'Build MVPs', desc: 'Design, frontend, and smart contracts to launch fast.' },
    { title: 'Launch Memecoins', desc: 'Fuel adoption, funding, and community via tokens.' },
    { title: 'Drive Narrative', desc: 'Dominate CT & Telegram with lore and culture.' },
  ];
  return (
    <section className="py-20 text-center" id="process">
      <h2 className="text-4xl font-semibold mb-10">Our 4-Phase Process</h2>
      <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="p-6 bg-gray-800 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
            <p className="text-sm text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
