import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-6 text-neon"
      >
        Crypto-Powered Startup Incubator
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-xl text-lg md:text-xl mb-8"
      >
        We turn AI startups into Web3 ecosystems with memecoin-driven traction.
      </motion.p>
      <motion.a
        href="#apply"
        whileHover={{ scale: 1.05 }}
        className="bg-neon text-base px-8 py-3 rounded-lg font-semibold text-black"
      >
        Apply Now
      </motion.a>
    </section>
  );
}
