import ProfileNav from "../../components/ProfileNav";
import PropTypes from "prop-types";

export default function Wrapper({ children }) {
  return (
    <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      <ProfileNav />
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
};
