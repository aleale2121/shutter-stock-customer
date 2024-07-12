import Tag from "../../components/Tag";
import Wrapper from "./Wrapper";
import Menus from "../../components/Menus";
import TeamMemberTableMenu from "./TeamMemberTableMenu";

export default function TeamMembers() {
  return (
    <Wrapper width="6xl">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <Menus>
          <table className="min-w-full bg-white">
            <thead className="bg-sky-950">
              <tr>
                <th className="w-6/25 py-4 px-3 text-left text-sm font-semibold text-white">
                  Full Name
                </th>
                <th className="w-6/25 py-4 px-3 text-left text-sm font-semibold text-white">
                  Email
                </th>
                <th className="w-6/25 py-4 px-3 text-left text-sm font-semibold text-white">
                  Used assets
                </th>
                <th className="w-6/25 py-4 px-3 text-left text-sm font-semibold text-white">
                  Status
                </th>
                <th className="w-1/25"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 text-md text-gray-700">Alice Smith</td>
                <td className="py-3 px-4 text-md text-gray-700">
                  alice@example.com
                </td>
                <td className="py-3 px-4 mx-auto text-md text-gray-700">25</td>
                <td className="py-3 px-4 ">
                  <Tag bgColor="bg-lime-600" textColor="text-stone-100">
                    Active
                  </Tag>
                </td>
                <td className="pr-2">
                  <TeamMemberTableMenu id="avghcsd" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 text-md text-gray-700">Johnson</td>
                <td className="py-3 px-4 text-md text-gray-700">
                  bob@example.com
                </td>
                <td className="py-3 px-4 text-md text-gray-700">13</td>
                <td className="py-3 px-4 ">
                  <Tag bgColor="bg-[#ef4444]" textColor="text-stone-100">
                    Inactive
                  </Tag>
                </td>
                <td className="pr-2">
                  <TeamMemberTableMenu id="avrhcsd" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 text-md text-gray-700">Carol White</td>
                <td className="py-3 px-4 text-md text-gray-700">
                  carol@example.com
                </td>
                <td className="py-3 px-4 text-md text-gray-700">47</td>
                <td className="py-3 px-4 ">
                  <Tag bgColor="bg-blue-800" textColor="text-stone-100">
                    Pending
                  </Tag>
                </td>
                <td className="pr-2">
                  <TeamMemberTableMenu id="avpohcsd" />
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-md text-gray-700">David Cam</td>
                <td className="py-3 px-4 text-md text-gray-700">
                  david@example.com
                </td>
                <td className="py-3 px-4 text-md text-gray-700">7</td>
                <td className="py-3 px-4 ">
                  <Tag bgColor="bg-lime-600" textColor="text-stone-100">
                    Active
                  </Tag>
                </td>
                <td className="pr-2">
                  <TeamMemberTableMenu id="avghcsd" />
                </td>
              </tr>
            </tbody>
          </table>
        </Menus>
      </div>
    </Wrapper>
  );
}
