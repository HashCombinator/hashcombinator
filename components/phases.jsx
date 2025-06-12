export default function Phases() {
  const phases = [
    { title: 'Curate Scalable Startups', desc: 'Select high-leverage founders with strong product' },
    { title: 'Build MVPs', desc: 'Develop initial product, manage design & smart contracts' },
    { title: 'Launch Memecoins', desc: 'Kickstart liquidity and community-powered growth' },
    { title: 'Drive Distribution', desc: 'Own the narrative across Web3-native channels' },
  ];

  return (
    <section className="bg-dark py-20 text-white">
      <h2 className="text-center text-3xl font-bold mb-12">Four Phases of HashCombinator</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {phases.map((p, i) => (
          <div key={i} className="bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-primary">{p.title}</h3>
            <p className="text-gray-300">{p.desc}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
}