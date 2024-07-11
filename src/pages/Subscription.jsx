import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SubscriptionDetail from "../features/profile/SubscriptionDetail";

export default function Subscription() {
  return (
    <>
      <NavBar />
      <section id="subscription">
        <SubscriptionDetail />
      </section>
      <Footer />
    </>
  );
}
