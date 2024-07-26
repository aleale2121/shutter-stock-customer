import Login from "../features/auth/Login";

export default function LoginEmailPage() {
  return (
    <section id="login-section" className="mt-16">
      <Login current="email" />
    </section>
  );
}
