import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Signup from "../features/auth/Signup";

export default function SignupPage() {
  return (
    <>
      <NavBar />
      <section id="signup-section">
         <Signup />
      </section>
      <Footer />
    </>
  );
}
