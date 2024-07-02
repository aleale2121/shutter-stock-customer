import NavBar from "../components/NavBar";
import MediaCard from "../components/MediaCard";
import Hero from "../features/guests/Hero";
import SearchForm from "../features/guests/SearchForm";
import CTA from "../components/guests/CTA";
import Footer from "../components/Footer";

const data = [
  {
    id: 1,
    mediaSrc: "assets/images/image1.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
  },
  {
    id: 2,
    mediaSrc: "assets/images/image2.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
  },
  {
    id: 3,
    mediaSrc: "assets/images/image3.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
  },
  {
    id: 4,
    mediaSrc: "assets/images/image4.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
  },
  {
    id: 5,
    mediaSrc: "assets/images/image5.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
  },
  {
    id: 6,
    mediaSrc: "assets/images/image6.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
  },
];

export default function Guests() {
  return (
    <>
      <NavBar />
      <section id="hero">
        <Hero />
      </section>

      <section id="media" className="relative bg-gray-100">
        <div className="container max-w-5xl mx-auto p-6 space-y-6">
          <SearchForm />
          <div className="grid gap-4 md:grid-cols-3">
            {data.map((item) => (
              <MediaCard
                key={item.id}
                name={item.name}
                description={item.description}
                mediaSrc={item.mediaSrc}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="cta" className="py-24 bg-darkViolet">
        <CTA />
      </section>
      <Footer />
    </>
  );
}
