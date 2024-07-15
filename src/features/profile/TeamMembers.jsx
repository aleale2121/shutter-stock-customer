import Tag from "../../components/Tag";
import Wrapper from "./Wrapper";
import Menus from "../../components/Menus";
import TeamMemberTableMenu from "./TeamMemberTableMenu";
import SettingButton from "./SettingButton";
import { HiOutlineMinus } from "react-icons/hi2";

export default function TeamMembers() {
  return (
    <Wrapper width="4xl">
      <div className="bg-white border border-gray-200 shadow-md border-lg rounded-xl p-8 max-w-lg md:max-w-4xl mx-auto mt-6">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold ">Team Members</h1>
          <SettingButton>Invite</SettingButton>
        </div>
        <Menus>
          <table className="w-full bg-gray-50 p-4 rounded-lg overflow-hidden">
            <thead className="bg-sky-950">
              <tr>
                <th className="py-4 px-4 text-left text-sm font-semibold text-white">
                  Full Name
                </th>
                <th className="py-4 px-3 text-left text-sm font-semibold text-white">
                  Email
                </th>
                <th className="py-4 px-3 text-left text-sm font-semibold text-white">
                  Downloads
                </th>
                <th className="py-4 px-3 text-left text-sm font-semibold text-white">
                  Status
                </th>
                <th className="pr-2"></th>
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
                  <Tag bgColor="bg-green-200" textColor="text-green-900">
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
                <td className="py-3 px-4 text-md text-gray-700">
                  <HiOutlineMinus />
                </td>
                <td className="py-3 px-4 ">
                  <Tag bgColor="bg-red-300" textColor="text-red-900">
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
                <td className="py-3 px-4 text-md text-gray-700">
                  {" "}
                  <HiOutlineMinus />
                </td>
                <td className="py-3 px-4 ">
                  <Tag bgColor="bg-blue-300" textColor="text-blue-900">
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
                  <Tag bgColor="bg-green-200" textColor="text-green-800">
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
