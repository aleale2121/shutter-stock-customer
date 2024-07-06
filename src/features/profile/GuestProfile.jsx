import UpdateProfileForm from "./UpdateProfileForm";

export default function GuestProfile() {
  const guest = {
    fullName: "Test",
    email: "test@gmail.com",
    nationalID: "NationalId",
  };

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest} />
    </div>
  );
}
