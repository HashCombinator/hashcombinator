import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
export default function Launches() {
  return (
    <>
      <NavBar />
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-4">Our Launches</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card"><h3>NeuroScan AI</h3><p>Skin cancer detection...</p></div>
            <div className="card"><h3>GameFi Royale</h3><p>Play-to-earn crypto game...</p></div>
            <div className="card"><h3>Finhack Wallet</h3><p>Crypto investment app...</p></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
} 