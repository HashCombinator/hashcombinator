import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
export default function Apply() {
  return (
    <>
      <NavBar />
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-4">Apply to HashCombinator</h2>
          <form action="https://formspree.io/f/YOUR_ID" method="POST" className="space-y-4">
            <input name="name" placeholder="Founder Name" required className="w-full p-3 border rounded" />
            <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 border rounded" />
            <textarea name="project" placeholder="Project Description" required className="w-full p-3 border rounded h-40"></textarea>
            <button type="submit" className="btn">Submit Application</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
} 