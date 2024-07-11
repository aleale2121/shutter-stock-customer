import Header from "./Header";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="container w-1/2 bg-gray-50 shadow-sm flex flex-col items-center justify-center mx-auto px-3 py-6 rounded-xl">
      <Header />
      <ContactForm />
    </div>
  );
}
