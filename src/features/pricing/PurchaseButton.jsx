import Modal from "../../components/Modal";
import PaymentForm from "./PaymentForm";

export default function PurchaseButton() {
  return (
    <Modal>
      <Modal.Open opens="payment-form">
        <button
          href="#"
          className="inline-block px-10 py-3 my-6 
                              text-center border border-violet-600 rounded-lg duration-200 
                              hover:bg-violet-800 hover:border-violet-800
                              group-has-[:checked]:bg-violet-600"
        >
          Purchase
        </button>
      </Modal.Open>

      <Modal.Window name="payment-form">
        <PaymentForm />
      </Modal.Window>
    </Modal>
  );
}
