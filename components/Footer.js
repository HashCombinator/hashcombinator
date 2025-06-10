export default function Footer() {
  return (
    <footer className="bg-gray-900 bg-opacity-60 backdrop-blur-md p-8 text-center mt-20">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://twitter.com" aria-label="Twitter" className="hover:text-neon">Twitter</a>
        <a href="https://discord.com" aria-label="Discord" className="hover:text-neon">Discord</a>
        <a href="https://youtube.com" aria-label="YouTube" className="hover:text-neon">YouTube</a>
        <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-neon">LinkedIn</a>
      </div>
      <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} HashCombinator. All rights reserved.</p>
    </footer>
  );
}
