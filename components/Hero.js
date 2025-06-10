import { motion } from 'framer-motion';

export default function Hero({ onApply }) {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 overflow-hidden">
      <motion.img
        src="/hero-bg.svg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Crypto-Powered Startup Incubator
      </motion.h1>
      <motion.button
        onClick={onApply}
        className="relative z-10 bg-neon text-base font-medium px-8 py-3 rounded-full hover:bg-orange transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Apply Now
      </motion.button>
    </section>
  );
}
