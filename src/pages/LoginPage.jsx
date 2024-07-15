import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Login from "../features/auth/Login";

export default function LoginPage() {
  return (
    <>
      <NavBar />
      <section id="login-section">
        <Login />
      </section>
      <Footer />
    </>
  );
}
