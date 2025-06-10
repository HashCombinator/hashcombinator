export default function Footer() {
  return (
    <footer className="py-10 px-4 md:px-8 bg-opacity-20 backdrop-blur-md bg-white/5 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://twitter.com" aria-label="Twitter" className="hover:text-neon">Twitter</a>
        <a href="https://discord.com" aria-label="Discord" className="hover:text-neon">Discord</a>
        <a href="https://youtube.com" aria-label="YouTube" className="hover:text-neon">YouTube</a>
        <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-neon">LinkedIn</a>
      </div>
      <p className="text-sm text-gray-400">© {new Date().getFullYear()} HashCombinator. All rights reserved.</p>
    </footer>
  );
}
