import { useState } from "react";
import { FaDownload } from "react-icons/fa";

const DownloadDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: "1080p (HD) - 1.5GB", value: "1080p" },
    { label: "720p (HD) - 800MB", value: "720p" },
    { label: "480p (SD) - 500MB", value: "480p" },
    { label: "360p - 300MB", value: "360p" },
  ];

  const handleDownload = () => {
    if (selectedOption) {
      alert(`Starting download for ${selectedOption.label}`);
    } else {
      alert("Please select a resolution option.");
    }
  };
  console.log(handleDownload);

  return (
    <div>
      <select
        id="download-dropdown"
        onChange={(e) =>
          setSelectedOption(
            options.find((option) => option.value === e.target.value)
          )
        }
        value="a"
        className="w-[10rem] appearance-none opacity-80 font-extrabold text-white text-opacity-90 bg-indigo-900 py-4 px-2 rounded-sm focus:outline-none"
      >
        <option value="a" className="hidden font-extrabold text-xl" disabled>
          Download
        </option>
        {options.map((option) => (
          <option 
            key={option.value}
            value={option.value}
            className="bg-transparent font-normal opacity-70"
          >
            {option.label}
          </option>
        ))}
      </select>
      <FaDownload className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-200" />
    </div>
  );
};

export default DownloadDropdown;
