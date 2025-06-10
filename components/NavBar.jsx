import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NavBar() {
  return (
    <motion.header
      className="fixed w-full bg-dark bg-opacity-50 backdrop-blur-sm z-50 flex justify-between items-center px-8 py-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="logo" width={32} height={32} />
        <span className="text-primary text-xl font-bold">HashCombinator</span>
      </div>
      <nav className="space-x-6 text-white">
        {['Home','About','Launches','Docs','Apply'].map(link => (
          <a href={link==='Home'?'/':`/${link.toLowerCase()}`} className="hover:text-primary transition-shadow" key={link}>{link}</a>
        ))}
      </nav>
    </motion.header>
  );
} 