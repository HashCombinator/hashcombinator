export default function LaunchShowcase() {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#111]" id="showcase">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-neon">
        Previous Partners
      </h2>
      <p className="max-w-2xl mb-4">
        Coming soon: showcases of startups that leveraged our memecoin model.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-40 bg-gray-800 rounded-lg" />
        <div className="h-40 bg-gray-800 rounded-lg" />
      </div>
    </section>
  );
}
