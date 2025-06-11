import { motion } from 'framer-motion';
const cards = [
  { title: 'MVP Development', text: 'From idea to prototype with hands-on technical guidance.' },
  { title: 'Token Launch', text: 'Leverage our community to bootstrap funding and liquidity.' },
  { title: 'Market Validation', text: 'Test product-market fit with real crypto-native users.' }
];
export default function CardSection() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {cards.map((c,i)=>(
          <motion.div key={i} className="bg-gray-900 p-6 rounded-xl shadow-lg"
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ delay: i*0.2 }}>
            <h3 className="text-2xl font-bold text-accent mb-2">{c.title}</h3>
            <p className="text-gray-300">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}