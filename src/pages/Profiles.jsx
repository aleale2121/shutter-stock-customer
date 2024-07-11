import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import GuestProfile from "../features/profile/GuestProfile";
// import ProfileComponent from "../features/profile/ProfileComponent";
import Profile from "../features/profile/Profile";

export default function Profiles() {
  return (
    <>
      <NavBar />
      <section id="profile">
        <Profile />
      </section>
      <Footer />
    </>
  );
}
