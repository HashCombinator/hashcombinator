import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
export default function Docs() {
  return (
    <>
      <NavBar />
      <section className="py-20 px-4 bg-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-4">Documentation</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Apply via Apply page</li>
            <li>Build MVP with our team</li>
            <li>Launch token & grow community</li>
          </ol>
        </div>
      </section>
      <Footer />
    </>
  );
} 