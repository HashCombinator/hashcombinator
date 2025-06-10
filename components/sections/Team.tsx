export default function Team() {
  const members = [
    { name: 'Alice', title: 'Founder' },
    { name: 'Bob', title: 'CTO' },
  ];
  return (
    <section className="py-20 px-4 md:px-8" id="team">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-orange">Meet the Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
        {members.map((m) => (
          <div key={m.name} className="text-center">
            <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full mb-2" />
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-sm text-gray-400">{m.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
