import Header from "./Header";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto px-3 ">
      <Header />
      <ContactForm />
    </div>
  );
}
