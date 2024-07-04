import RightIcon from "../../components/RightIcon";
import PropTypes from "prop-types";

export function LowerContainer({ pricing }) {
  return (
    <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-center">
          <RightIcon />
          <span className="text-sm ml-1">
            Up to {pricing.items} file access
          </span>
        </div>
        <div className="flex justify-center">
          <RightIcon />
          <span className="text-sm ml-1">
            {" "}
            Up to {pricing.downloads}X downloads
          </span>
        </div>
        <div className="flex justify-center">
          <RightIcon />
          {pricing.users === 1 ? (
            <span className="text-sm ml-1">Only one user access</span>
          ) : (
            <span className="text-sm ml-1">Option to add {pricing.users} users</span>
          )}
        </div>
      </div>
    </div>
  );
}

LowerContainer.propTypes = {
  pricing: PropTypes.object.isRequired,
};
