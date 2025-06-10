const phases = [
  {
    title: 'Curate Scalable Startups',
    desc: 'We select AI teams with Web3 potential.',
  },
  {
    title: 'Build MVPs',
    desc: 'We design, code, and ship first versions fast.',
  },
  {
    title: 'Launch Memecoins Strategically',
    desc: 'Ignite communities and raise early capital.',
  },
  {
    title: 'Drive Narrative & Distribution',
    desc: 'Dominate CT and Web3 discourse with culture.',
  },
];

export default function Process() {
  return (
    <section className="py-20 px-4 md:px-8" id="process">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-orange">
        Our 4-Phase Process
      </h2>
      <ol className="space-y-6 max-w-2xl">
        {phases.map((p) => (
          <li key={p.title} className="border-l-4 border-neon pl-4">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p>{p.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
