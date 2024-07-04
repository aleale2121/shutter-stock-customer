import PurchaseButton from "./PurchaseButton";
import PropTypes from "prop-types";

export default function UpperContainer({ pricing }) {
  return (
    <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
      <div className="text-center uppercase text-xl">{pricing.name}</div>
      <h2 className="mt-10 font-serif text-xl text-center">
        {pricing.items} FILES
      </h2>
      <h3 className="mt-2 text-center text-sm">
        ${pricing.price}/{pricing.duration}
      </h3>
      <div className="flex justify-center">
        <PurchaseButton />
      </div>
    </div>
  );
}

UpperContainer.propTypes = {
  pricing: PropTypes.object.isRequired,
};
