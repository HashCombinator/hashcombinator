export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-black to-gray-900 text-white flex items-center justify-center pt-20 px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">Crypto-Powered Startup Incubator</h1>
        <p className="text-lg mb-8">We help founders build MVPs, launch tokens, and gain real traction through memecoin ecosystems.</p>
        <a href="/apply" className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">Apply Now</a>
      </div>
    </section>
  );
}
