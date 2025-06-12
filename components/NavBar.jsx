export default function NavBar() {
  return (
    <nav className="bg-dark text-white py-4 px-8 flex justify-between items-center backdrop-blur-md bg-opacity-80 fixed top-0 w-full z-50">
      <div className="text-2xl font-bold text-white">HashCombinator</div>
      <div className="space-x-6">
        {['Home','Our Launches','Docs','Apply'].map(link => (
          <a key={link} href={`/${link.toLowerCase().replace(/ /g, '')}`} className="hover:text-primary transition-all duration-300">
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}