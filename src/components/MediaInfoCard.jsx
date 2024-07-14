import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";


const MediaInfoCard = ({ mediaType, mediaSrc, title, description }) => {
  return (
    <div
      className="mx-auto bg-white  rounded-lg overflow-hidden flex"
      style={{ width: "60rem" }}
    >
      <div className="w-2/3 relative">
        {mediaType === "image" ? (
          <img
            src={mediaSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={mediaSrc}
            controls
            className="w-full h-full object-cover"
          ></video>
        )}
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
          <FaBookmark className="text-gray-600" />
        </div>
      </div>

      <div className="w-1/3 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="mt-4 text-gray-600">{description}</p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600">Size: 3MB</p>
          <p className="text-sm text-gray-600">Width: 500</p>
          <p className="text-sm text-gray-600">Height: 300</p>
        </div>
        <div>
          <a
            href="#"
            download
            className="mt-6 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

MediaInfoCard.propTypes = {
  mediaType: PropTypes.any,
  mediaSrc: PropTypes.any,
  title: PropTypes.any,
  description: PropTypes.any,
};

export default MediaInfoCard;
