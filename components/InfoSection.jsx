import { motion } from 'framer-motion';
export default function InfoSection() {
  return (
    <section className="bg-dark text-white py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <motion.h2 className="text-4xl font-bold text-center text-trust" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>What is HashCombinator?</motion.h2>

        <motion.p className="text-lg text-gray-300" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          HashCombinator is a crypto-native startup incubator built to help bold founders thrive in Web3. Unlike traditional accelerators, we provide more than advice—we deliver MVP builds, memecoin-powered community funding, and viral narratives that ignite adoption.
        </motion.p>

        <motion.div className="space-y-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <div>
            <h3 className="text-2xl font-semibold text-innovation">1. Curate Scalable Startups</h3>
            <p className="text-gray-400">We hand-select founders with real product ideas, strong teams, and the potential to scale in any market. No hype. Just high-leverage execution.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-innovation">2. Build MVPs</h3>
            <p className="text-gray-400">Our dev team helps founders ship working MVPs fast. From design to frontend to smart contracts—we make products real.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-innovation">3. Launch Memecoins</h3>
            <p className="text-gray-400">We use memecoins to bootstrap community, liquidity, and visibility. Not speculation—participation. Think Kickstarter for tokens.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-innovation">4. Dominate Distribution</h3>
            <p className="text-gray-400">We build Web3-native brands and viral stories, turning technical projects into cultural movements—ready for CT, Discord, and beyond.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
