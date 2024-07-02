import { RightIcon } from "../../components/RightIcon";
import PropTypes from "prop-types";

export function LowerContainer({pricing}) {
  return (
    <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-center">
          <RightIcon />
          <span className="text-sm ml-1">{pricing.downloads} of downloads</span>
        </div>

        <div className="flex justify-center">
          <RightIcon />
          <span className="text-sm ml-1">Option to add members</span>
        </div>

        <div className="flex justify-center">
          <RightIcon />
          <span className="text-sm ml-1">Extra member benefits</span>
        </div>
      </div>
    </div>
  );
}

LowerContainer.propTypes = {
  pricing: PropTypes.any,
};
