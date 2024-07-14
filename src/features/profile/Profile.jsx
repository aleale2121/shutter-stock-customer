import Wrapper from "./Wrapper";
import UpdatePassword from "./UpdatePassword";
import UpdateProfile from "./UpdateProfile";

export default function Profile() {
  return (
    <Wrapper width="4xl">
      <>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-semibold sm:text-xl">Public Profile</h1>
          <UpdateProfile />
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mt-8">
          <h1 className="text-2xl font-semibold sm:text-xl">Update password</h1>
          <UpdatePassword />
        </div>
      </>
    </Wrapper>
  );
}
