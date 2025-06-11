import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-dark text-center px-4">
      <div>
        <motion.h1 className="text-5xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Crypto-Powered Startup Incubator
        </motion.h1>
        <motion.p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          We help founders build MVPs, launch tokens, and gain real traction through memecoin ecosystems.
        </motion.p>
        <motion.a href="/apply" className="inline-block bg-primary text-dark px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
          whileHover={{ scale: 1.05 }}>
          Apply Now
        </motion.a>
      </div>
    </section>
  );
}