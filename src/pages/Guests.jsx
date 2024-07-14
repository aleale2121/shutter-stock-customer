import NavBar from "../components/NavBar";
import MediaCard from "../components/MediaCard";
import Hero from "../features/guests/Hero";
import SearchForm from "../features/guests/SearchForm";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import HorizontalTagsList from "../components/HorizontalTagsList";
const tags = [
  "trailer",
  "official video",
  "music video",
  "documentary",
  "interview",
  "vlog",
  "short film",
  "animated",
  "live",
  "tutorial",
  "review",
  "demo",
  "highlights",
  "behind the scenes",
  "comedy",
  "action",
  "drama",
  "thriller",
  "animation",
  "family",
  "sports",
  "funny",
  "reaction",
  "meme",
  "animation",
  "cute",
  "happy",
  "sad",
  "angry",
  "excited",
  "fail",
  "win",
  "art",
  "animals",
  "nature",
  "sports",
  "movies",
  "tv",
  "dancing",
  "gaming",
  "portrait",
  "landscape",
  "nature",
  "cityscape",
  "architecture",
  "macro",
  "abstract",
  "minimalism",
  "vintage",
  "food",
  "travel",
  "fashion",
  "sports",
  "animals",
  "objects",
  "textures",
  "patterns",
  "backgrounds",
];

const data = [
  {
    id: 1,
    mediaSrc: "assets/images/image1.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 2,
    mediaSrc: "assets/images/one.mp4", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "video",
  },
  {
    id: 3,
    mediaSrc: "assets/images/two.mp4", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "video",
  },
  {
    id: 4,
    mediaSrc: "assets/images/image4.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 5,
    mediaSrc: "assets/images/image5.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 6,
    mediaSrc: "assets/images/image6.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 7,
    mediaSrc: "assets/images/image3.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 8,
    mediaSrc: "assets/images/image4.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 9,
    mediaSrc: "assets/images/image5.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 10,
    mediaSrc: "assets/images/image6.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 11,
    mediaSrc: "assets/images/image5.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
  },
  {
    id: 12,
    mediaSrc: "assets/images/image6.jpg", // Update the path here
    name: "Abstract Painting",
    description: "245 likes - 35 Shares",
    type: "image",
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
        <div className="container max-w-6xl mx-auto p-6 space-y-6">
          <SearchForm />
          <HorizontalTagsList tags={tags} />
          <div className="grid gap-2 md:grid-cols-3">
            {data.map((item) => (
              <MediaCard
                key={item.id}
                name={item.name}
                description={item.description}
                mediaSrc={item.mediaSrc}
                type={item.type}
              />
            ))}
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </>
  );
}
