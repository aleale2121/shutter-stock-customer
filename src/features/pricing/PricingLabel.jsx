import { LowerContainer } from "./LowerContainer";
import RadioInput from "./RadioInput";
import UpperContainer from "./UpperContainer";
import PropTypes from "prop-types";

export function PricingLabel({ pricing }) {
  return (
    <label
      htmlFor="radio_1"
      className="group bg-slate-700 rounded-xl text-white  
                  has-[:checked]:bg-violet-700 peer cursor-pointer"
    >
      <RadioInput />
      <UpperContainer
        name={pricing?.name}
        price={pricing.price}
        quantity={pricing.quantity}
      />
      <div className="border-t border-slate-700" />
      <LowerContainer />
    </label>
  );
}

PricingLabel.propTypes = {
  pricing: PropTypes.any,
};
