export default function PurchaseButton() {
  return (
    <a
      href="#"
      className="inline-block px-10 py-3 my-6 
                              text-center border border-violet-600 rounded-lg duration-200 
                              hover:bg-violet-800 hover:border-violet-800
                              group-has-[:checked]:bg-violet-600"
    >
      Purchase
    </a>
  );
}
