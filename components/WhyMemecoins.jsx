export default function WhyMemecoins() {
  const reasons = [
    { title: 'Community Buy-In', desc: 'Turn supporters into passionate evangelists' },
    { title: 'Solana-Based Tokens', desc: 'Use the fastest-growing crypto ecosystem' },
    { title: 'Virality & Liquidity', desc: 'Ignite network effects that fuel adoption and traction' },
  ];

  return (
    <section className="bg-white py-16 text-dark">
      <h2 className="text-center text-3xl font-bold mb-10">Why Memecoins Work</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {reasons.map((r, i) => (
          <div key={i} className="bg-gray-100 rounded-xl p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-2">{r.title}</h3>
            <p className="text-gray-700">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}