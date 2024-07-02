import PurchaseButton from "./PurchaseButton";
import PropTypes from "prop-types";

export default function UpperContainer({ name, quantity, price }) {
  return (
    <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
      <div className="text-center uppercase">{name}</div>
      <h2 className="mt-10 font-serif text-5xl text-center">{quantity}</h2>
      <h3 className="mt-2 text-center">${price}/Month</h3>
      <div className="flex justify-center">
        <PurchaseButton />
      </div>
    </div>
  );
}

UpperContainer.propTypes = {
  name: PropTypes.any,
  quantity: PropTypes.any,
  price: PropTypes.any,
};
