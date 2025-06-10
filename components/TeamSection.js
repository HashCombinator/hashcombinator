import { motion } from 'framer-motion';

export default function TeamSection() {
  const members = [
    { name: 'Satoshi Nakamoto', role: 'Founder', avatar: '/logo.svg' },
    { name: 'Jane Doe', role: 'Growth', avatar: '/logo.svg' },
    { name: 'John Smith', role: 'Engineering', avatar: '/logo.svg' },
  ];
  return (
    <section className="py-20 text-center" id="team">
      <h2 className="text-4xl font-semibold mb-10">Our Team</h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
        {members.map((m, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <img src={m.avatar} className="w-24 h-24 mb-2 rounded-full" alt={m.name} />
            <div className="font-semibold">{m.name}</div>
            <div className="text-sm text-gray-300">{m.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
