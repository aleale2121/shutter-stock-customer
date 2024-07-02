import PropTypes from "prop-types";
import bookMarkIcon from "/assets/images/bookmark.svg";

export default function MediaCard({ mediaSrc, name, description }) {
  return (
    <div className="relative group w-72">
      <img src={mediaSrc} alt="" className="w-full h-auto"  />
      <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
        <div className="flex justify-between w-full">
          <div className="font-normal">
            <p className="text-sm">{name}</p>
            <p className="text-xs">{description}</p>
          </div>
          <div className="flex items-center">
            <img src={bookMarkIcon} alt="bookmark" />
          </div>
        </div>
      </div>
    </div>
  );
}

MediaCard.propTypes = {
  mediaSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
