export default function MemecoinAdvantages() {
  const items = [
    'Bootstraps liquidity quickly',
    'Creates viral community narratives',
    'Rewards early believers',
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#111]" id="advantages">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-neon">
        Why Memecoins?
      </h2>
      <ul className="space-y-2 max-w-xl list-disc list-inside">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </section>
  );
}
