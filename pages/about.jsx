import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
export default function About() {
  return (
    <>
      <NavBar />
      <section className="py-20 px-4 bg-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-4">About HashCombinator</h2>
          <p className="text-lg text-gray-700 mb-6">We're the first crypto-native incubator, providing MVP building, token launch, and community traction for 5–10% equity.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div><h3 className="text-2xl font-semibold mb-2">Our Vision</h3><p className="text-gray-600">Empower founders...</p></div>
            <div><h3 className="text-2xl font-semibold mb-2">Our Values</h3><p className="text-gray-600">Transparency...</p></div>
            <div><h3 className="text-2xl font-semibold mb-2">Our Team</h3><p className="text-gray-600">Seasoned builders...</p></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
} 