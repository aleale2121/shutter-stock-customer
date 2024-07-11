import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NotificationList from "../features/profile/NotificationList";

export default function Notification() {
  return (
    <>
      <NavBar />
      <section id="profile">
        <NotificationList />
      </section>
      <Footer />
    </>
  );
}
