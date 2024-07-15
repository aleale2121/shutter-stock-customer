import Wrapper from "./Wrapper";
import ListTile from "./NotificationTile";

const Notifications = [
  {
    id: 1,
    title: "Tomas@gmail.com approved Invitation",
    description: "Tomas have successfully approved the invitation.",
    type: "invitation-accepted",
  },
  {
    id: 2,
    title: "Subscription Activated",
    description: "Tomas have successfully approved the invitation.",
    type: "subscription-activated",
  },
  {
    id: 3,
    title: "Subscription Cancelled",
    description: "Your subscription has been cancelled.",
    type: "subscription-cancelled",
  },
];

export default function NotificationList() {
  return (
    <Wrapper width="4xl">
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 max-w-lg md:max-w-4xl mx-auto mt-6">
        <h1 className="text-2xl font-semibold px-3">Notifications</h1>
        <ul className="overflow-hidden space-y-4 p-4">
          {Notifications.map((notification) => ListTile(notification))}
        </ul>
      </div>
    </Wrapper>
  );
}
