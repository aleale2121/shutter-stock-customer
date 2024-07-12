import Wrapper from "./Wrapper";

export default function TeamMembers() {
  return (
    <Wrapper width="6xl">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full bg-white">
            <thead className="bg-[#505285]">
              <tr>
                <th className="w-1/4 py-4 px-4 text-left text-sm font-semibold text-white">
                  Full Name
                </th>
                <th className="w-1/4 py-4 px-4 text-left text-sm font-semibold text-white">
                  Email
                </th>
                <th className="w-1/4 py-4 px-4 text-left text-sm font-semibold text-white">
                  Status
                </th>
                <th className="w-1/4 py-4 px-5 text-left text-sm font-semibold text-white">
                  Used assets
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 text-md text-gray-700">Alice Smith</td>
                <td className="py-3 px-4 text-md text-gray-700">
                  alice@example.com
                </td>
                <td className="py-3 px-4 text-md text-green-600 font-bold">Active</td>
                <td className="py-3 px-4 text-md text-gray-700">25</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 text-md text-gray-700">Johnson</td>
                <td className="py-3 px-4 text-md text-gray-700">
                  bob@example.com
                </td>
                <td className="py-3 px-4 text-md text-red font-bold">Inactive</td>
                <td className="py-3 px-4 text-md text-gray-700">13</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 text-md text-gray-700">Carol White</td>
                <td className="py-3 px-4 text-md text-gray-700">
                  carol@example.com
                </td>
                <td className="py-3 px-4 text-md text-blue-600 font-bold">Pending</td>
                <td className="py-3 px-4 text-md text-gray-700">47</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-md text-gray-700">David Cam</td>
                <td className="py-3 px-4 text-md text-gray-700">
                  david@example.com
                </td>
                <td className="py-3 px-4 text-md text-green-600 font-bold">Active</td>
                <td className="py-3 px-4 text-md text-gray-700">7</td>
              </tr>
            </tbody>
          </table>
        </div>
    </Wrapper>
  );
}
