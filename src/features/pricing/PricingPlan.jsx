import { LowerContainer } from "./LowerContainer";
import RadioInput from "./RadioInput";
import UpperContainer from "./UpperContainer";
import PropTypes from "prop-types";

export function PricingPlan({ id, name, pricing, active }) {
  return (
    <label
      htmlFor={id}
      className="group bg-slate-700 rounded-xl text-white  
                  has-[:checked]:bg-violet-700 peer cursor-pointer"
    >
      <RadioInput id={id} name={name} active={active} />
      <UpperContainer pricing={pricing} />
      <div className="border-t border-slate-700" />
      <LowerContainer pricing={pricing} />
    </label>
  );
}

PricingPlan.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired,
  pricing: PropTypes.any.isRequired,
  active: PropTypes.any.isRequired,
};
