import { useState } from "react";

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  return (
    <div className="bg-gray-50 flex flex-grow justify-center" style={{ width: "60rem",height:"30rem" }}>
      {/* <div className="bg-white w-full flex flex-col lg:flex-row"> */}
        
        <div className="md:w-1/4 bg-white flex flex-col justify-center items-center px-6 py-6 sm:py-10">
          <div className="max-w-lg w-full">
            <div className="mb-5 flex flex-col gap-4">
              <button
                className={`py-2 px-4 rounded-lg ${paymentMethod === "creditCard" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                onClick={() => setPaymentMethod("creditCard")}
              >
                Credit Card
              </button>
              <button
                className={`py-2 px-4 rounded-lg ${paymentMethod === "paypal" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                onClick={() => setPaymentMethod("paypal")}
              >
                PayPal
              </button>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col">
          <div className="max-w-lg w-full m-auto px-6 py-6 sm:py-10">
            {paymentMethod === "creditCard" && (
              <>
                <div className="mb-5">
                  <label
                    htmlFor="input-number"
                    className="block text-sm font-bold mb-2"
                  >
                    Card number
                  </label>
                  <input
                    type="text"
                    id="input-number"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-300 shadow-sm"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                  <div className="mb-5">
                    <label
                      htmlFor="input-exp"
                      className="block text-sm font-bold mb-2"
                    >
                      Expiration
                    </label>
                    <input
                      type="text"
                      id="input-exp"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-300 shadow-sm"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="input-cvc"
                      className="block text-sm font-bold mb-2"
                    >
                      CVC
                    </label>
                    <input
                      type="text"
                      id="input-cvc"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-300 shadow-sm"
                      placeholder="CVC"
                    />
                  </div>
                </div>
               
                <div className="mb-5">
                  <label
                    htmlFor="input-name"
                    className="block text-sm font-bold mb-2"
                  >
                    Cardholder name
                  </label>
                  <input
                    type="text"
                    id="input-name"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-300 shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="input-country"
                    className="block text-sm font-bold mb-2"
                  >
                    Billing address
                  </label>
                  <input
                    type="text"
                    id="input-zip"
                    className="py-3 px-4 block w-full border-gray-200 rounded-b-lg border-t-0 text-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-300 shadow-sm"
                    placeholder="Zip Code"
                  />
                </div>
                <div className="font-bold mb-5 text-xs text-gray-400">
                  By providing your card information, you allow Company to charge your card for future payments in accordance with their terms.
                </div>
              </>
            )}

            {paymentMethod === "paypal" && (
              <div className="font-bold mb-5 text-center text-gray-700">
                You will be redirected to PayPal to complete your payment.
              </div>
            )}
          </div>
        </div>

        <div className="md:w-1/4  bg-gray-100 flex flex-col justify-center items-center px-6 py-6 sm:py-10">
          <div className="max-w-lg w-full">
            <div className="flex justify-between mb-5">
              <h3 className="text-lg lg:text-2xl font-bold">Monthly subscription</h3>
              <div className="text-lg lg:text-xl font-medium">$9.99</div>
            </div>
            <div className="mt-2 text-gray-500 font-bold text-sm mb-5">
              $9.99 billed every month
            </div>
            <div className="mb-5">
              <div className="flex justify-between py-1 text-gray-700 font-medium">
                <div>Subtotal</div>
                <div>$9.99</div>
              </div>
              <div className="flex justify-between py-1 text-gray-700 font-medium">
                <div>Total</div>
                <div>$9.99</div>
              </div>
            </div>
            <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
            >
              Pay $9.99
            </button>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
