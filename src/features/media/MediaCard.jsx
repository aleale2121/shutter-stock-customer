import PropTypes from "prop-types";
import { FaBookmark, FaHeart, FaShare } from "react-icons/fa";
import MediaInfoCard from "./MediaInfoCard";
import Modal from "../../components/Modal";
import useMediaActions from "../../hooks/useMediaActions";

export default function MediaCard({
  mediaSrc,
  name,
  description,
  type,
  likes,
  shares,
}) {
  const { liked, bookmarked, toggleLike, toggleBookmark, share } =
    useMediaActions();
  return (
    <div className="relative group w-[22rem] h-[14rem]">
      <Modal>
        <Modal.Open opens="media">
          {type === "image" ? (
            <img
              src={mediaSrc}
              alt={name}
              className="w-full h-full object-cover overflow-auto"
            />
          ) : (
            <video
              src={mediaSrc}
              // controls
              autoPlay
              muted
              loop
              itemID={name}
              className="w-full h-full object-cover overflow-auto"
            />
          )}
        </Modal.Open>
        <Modal.Window name="media">
          <MediaInfoCard
            key={name}
            title={name}
            description={description}
            mediaSrc={mediaSrc}
            mediaType={type}
            liked={liked}
            bookmarked={bookmarked}
            toggleLike={toggleLike}
            toggleBookmark={toggleBookmark}
            share={share}
            likes={likes}
            shares={shares}
          />
        </Modal.Window>
      </Modal>

      <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-100 group-hover:opacity-100 bg-opacity-40">
        <div className="flex justify-between w-full">
          <div className="font-normal">
            <p className="text-sm">{name}</p>
            <p className="text-xs">{description}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaBookmark
              size={20}
              onClick={toggleBookmark}
              className={`${bookmarked ? "text-yellow-300" : "text-gray-300"}`}
            />
            <FaHeart
              size={20}
              onClick={toggleLike}
              className={`${liked ? "text-red-500" : "text-gray-300"}`}
            />
            <FaShare size={20} onClick={share} className="text-gray-300" />
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
  type: PropTypes.string.isRequired,
  likes: PropTypes.any.isRequired,
  shares: PropTypes.any.isRequired,
};
