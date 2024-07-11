import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TeamMembersTable from "../features/profile/TeamMembers";

export default function Members() {
  return (
    <>
      <NavBar />
      <section id="members">
        <TeamMembersTable />
      </section>
      <Footer />
    </>
  );
}
