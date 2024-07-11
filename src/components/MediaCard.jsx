import PropTypes from "prop-types";
import bookMarkIcon from "/assets/images/bookmark.svg";
import MediaInfoCard from "./MediaInfoCard";
import Modal from "./Modal";

export default function MediaCard({ mediaSrc, name, description, type }) {
  return (
    <Modal>
      <Modal.Open opens="media">
        <div className="relative group w-72">
          {type === "image" ? (
            <img
              src={mediaSrc}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
              <video
                src={mediaSrc}
                // controls
                className="w-full h-full object-cover"
              />
          )}
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
      </Modal.Open>
      <Modal.Window name="media">
        <MediaInfoCard
          key={name}
          title={name}
          description={description}
          mediaSrc={mediaSrc}
          mediaType={type}
        />
      </Modal.Window>
    </Modal>
  );
}

MediaCard.propTypes = {
  mediaSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
