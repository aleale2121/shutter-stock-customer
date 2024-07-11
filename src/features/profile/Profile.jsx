import Wrapper from "./Wrapper";
import UpdatePassword from "./UpdatePassword";
import UpdateProfile from "./UpdateProfile";

export default function Profile() {
  return (
    <Wrapper>
      <>
        <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
        <UpdateProfile />
        <h2 className="mt-8 text-2xl font-bold sm:text-xl">Update password</h2>
        <UpdatePassword />
      </>
    </Wrapper>
  );
}
