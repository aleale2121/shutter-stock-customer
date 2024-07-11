import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact from "../features/contact/Contact";

export default function Contacts() {
  return (
    <>
      <NavBar />
      <section id="contactus" className="py-12 bg-white">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
