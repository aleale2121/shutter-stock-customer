import Wrapper from "./Wrapper";

export default function SubscriptionDetail() {
  return (
    <Wrapper>
      <>
        <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">
                Subscription Details
              </h2>
            </div>
            <div className="px-2 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
              Active
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-600">User</p>
            <p className="text-base text-gray-800">Alice</p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-600">Email</p>
            <p className="text-base text-gray-800">example1@example.com</p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-600">Group</p>
            <p className="text-base text-gray-800">Individual</p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-600">Pricing Plan</p>
            <p className="text-base text-gray-800">Basic</p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-600">
              Subscription Start Date
            </p>
            <p className="text-base text-gray-800">2024-01-01</p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-600">
              Subscription End Date
            </p>
            <p className="text-base text-gray-800">2024-12-31</p>
          </div>
        </div>
      </>
    </Wrapper>
  );
}
