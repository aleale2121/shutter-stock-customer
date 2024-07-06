import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import GuestProfile from "../features/profile/GuestProfile";
// import ProfileComponent from "../features/profile/ProfileComponent";
import Settings from "../features/profile/Settings";

export default function Profile() {
  return (
    <>
      <NavBar />
      <section id="profile">
        <Settings />
      </section>
      <Footer />
    </>
  );
}
