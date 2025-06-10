import { motion } from 'framer-motion';

export default function TeamSection() {
  return (
    <section className="py-20 bg-dark text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Team, Mission & Values
        </motion.h2>
        <p className="text-gray-300 mb-4">
          We are seasoned Web3 builders empowering high‑leverage founders to turn
          their ideas into thriving ecosystems.
        </p>
        <p className="text-gray-300">
          Transparency, community and relentless innovation guide every launch.
        </p>
      </div>
    </section>
  );
}
