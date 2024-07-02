import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact from "../features/contact/Contact";

export default function Contacts() {
  return (
    <>
      <NavBar />
      <section id="stats" className="py-24 bg-gray-100">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
