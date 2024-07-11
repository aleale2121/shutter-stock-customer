import Wrapper from "./Wrapper";

export default function NotificationList() {
  return (
    <Wrapper>
      <div className="max-w-lg mx-auto mt-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex items-center px-6 py-4 border-b border-gray-200">
            <div className="w-10 h-10 bg-green-100 text-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-semibold text-gray-800">
                User approved Invitation
              </p>
              <p className="text-sm text-gray-600">
                You have successfully approved the invitation.
              </p>
            </div>
          </div>

          <div className="flex items-center px-6 py-4 border-b border-gray-200">
            <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7 12l-2-2"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-semibold text-gray-800">
                Subscription Activated
              </p>
              <p className="text-sm text-gray-600">
                Your subscription has been activated successfully.
              </p>
            </div>
          </div>

          <div className="flex items-center px-6 py-4">
            <div className="w-10 h-10 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-semibold text-gray-800">
                Subscription Cancelled
              </p>
              <p className="text-sm text-gray-600">
                Your subscription has been cancelled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
