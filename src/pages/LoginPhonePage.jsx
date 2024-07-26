import Login from "../features/auth/Login";

export default function LoginPhonePage() {
  return (
    <section id="login-section" className="mt-16">
      <Login current="phone"/>
    </section>
  );
}
