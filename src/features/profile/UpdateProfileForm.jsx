import PropTypes from "prop-types";
import { useState } from "react";
import SubmitButton from "./SubmitButton";

export default function UpdateProfileForm({ guest }) {
  const { fullName, email, nationalID } = guest;
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPending(true);

    // Simulate an async operation like form submission
    setTimeout(() => {
      setIsPending(false);
      alert('Profile updated successfully!');
    }, 2000);
  };

  return (
    <form
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton isPending={isPending} pendingLabel="Updating...">
          Update profile
        </SubmitButton>
      </div>
    </form>
  );
}

UpdateProfileForm.propTypes = {
  guest: PropTypes.any.isRequired,
};
