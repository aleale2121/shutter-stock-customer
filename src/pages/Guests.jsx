import NavBar from "../components/NavBar";
import Hero from "../features/media/Hero";
import SearchForm from "../features/media/SearchForm";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import HorizontalTagsList from "../components/HorizontalTagsList";
import MediaList from "../features/media/MediaList";
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
          <MediaList />
        </div>
      </section>
      <CTA />
      <Footer />
    </>
  );
}
