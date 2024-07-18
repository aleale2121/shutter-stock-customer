import PropTypes from "prop-types";
import { FaBookmark, FaHeart, FaShare, FaThumbsUp } from "react-icons/fa";
import { useState } from "react";
import DownloadDropdown from "./DownloadDropDown";

const MediaInfoCard = ({
  mediaType,
  mediaSrc,
  title,
  description,
  liked,
  bookmarked,
  toggleLike,
  toggleBookmark,
  share,
  likes,
  shares,
  meta,
}) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleCommentSubmit();
    }
  };

  return (
    <div className="container w-[80vw] md:w-[90vw] max-h-[90vh] mx-auto bg-white rounded-lg overflow-auto flex flex-col  md:pr-8 md:pb-8 ">
      {/* Video */}
      <div className="w-full flex flex-row">
        <div className="w-full md:w-2/3 relative">
          {mediaType === "image" ? (
            <img
              src={mediaSrc}
              alt={title}
              className="w-full max-h-[30rem] object-cover"
            />
          ) : (
            <video
              src={mediaSrc}
              controls
              autoPlay
              autoFocus
              className="w-full h-full object-cover"
            ></video>
          )}
          <div className="absolute bottom-16 text-white right-4 flex flex-row space-x-2">
            <DownloadDropdown type={mediaType} />
          </div>
          <div className="absolute top-2 right-2 flex flex-row space-x-2">
            <div
              className="bg-white p-2 rounded-full shadow cursor-pointer"
              onClick={toggleBookmark}
            >
              <FaBookmark
                className={`${
                  bookmarked ? "text-yellow-500" : "text-gray-600"
                }`}
              />
            </div>
            <div
              className="bg-white p-2 rounded-full shadow cursor-pointer"
              onClick={toggleLike}
            >
              <FaHeart
                className={`${liked ? "text-red-500" : "text-gray-600"}`}
              />
            </div>
            <div
              onClick={share}
              className="bg-white p-2 rounded-full shadow cursor-pointer"
            >
              <FaShare className="text-gray-600" />
            </div>
          </div>
        </div>
        <div className="w-1/3 hidden md:block">
          <div className="pl-4 pt-4">
            {mediaType === "image" ? (
              <div className="flex flex-col items-start">
                <div className="flex flex-row space-x-2">
                  <p>Dimensions:</p>
                  <p className="text-gray-400">{meta.dimensions}</p>
                </div>
                <div className="flex flex-row space-x-2">
                  <p>Format: </p>
                  <p className="text-gray-400">{meta.format}</p>
                </div>
                <div className="flex flex-row space-x-2">
                  <p>Size:</p> <p className="text-gray-400">{meta.size}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-start">
                <div className="flex flex-row space-x-2">
                  <p>Resolution:</p>
                  <p className="text-gray-400">{meta.resolution}</p>
                </div>
                <div className="flex flex-row space-x-2">
                  <p>Duration: </p>
                  <p className="text-gray-400">{meta.duration}</p>
                </div>
                <div className="flex flex-row space-x-2">
                  <p>Size:</p> <p className="text-gray-400">{meta.size}</p>
                </div>
                <div className="flex flex-row space-x-2">
                  <p>Format:</p> <p className="text-gray-400">{meta.format}</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col mt-4 px-4 ">
            <div className="w-full flex flex-row items-center">
              <input
                type="text"
                className="flex-1 border-2 border-gray-300 rounded-lg py-2 px-4"
                placeholder="Add a comment..."
                value={comment}
                onChange={handleCommentChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="mt-4  overflow-y-auto">
              <h3 className="text-lg font-semibold text-gray-800">Comments</h3>
              <ul className="mt-2 h-80">
                {comments.map((comment, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 p-2 rounded-lg mt-2 shadow"
                  >
                    {comment}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-4 px-3 flex flex-col justify-between md:flex-row">
        {/* Title Likes */}
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between w-full">
          <div className="text-left">
            <h2 className="text-xl font-semibold text-gray-800  mt-4 md:mt-0">
              {title}
            </h2>
          </div>
          {/* Likes */}
          <div className="flex flex-row  items-center justify-between space-x-2">
            <button
              onClick={toggleLike}
              className={`group flex flex-row items-center space-x-2
            bg-white text-blue-500 border-2 
            font-semibold py-2 px-2 rounded-lg shadow 
            ${
              liked
                ? "border-blue-500 hover:border-gray-500"
                : "border-gray-500 hover:border-blue-500"
            }`}
            >
              <FaThumbsUp
                size={liked ? 18 : 16}
                className={`${
                  liked
                    ? "text-blue-500 group-hover:text-gray-500"
                    : "text-gray-500 group-hover:text-blue-500"
                }`}
              />
              <p
                className={`${
                  liked
                    ? "text-blue-500 group-hover:text-gray-500"
                    : "text-gray-500 group-hover:text-blue-500"
                }`}
              >
                {likes}
              </p>
            </button>

            <button
              onClick={toggleBookmark}
              className={`group flex flex-row items-center space-x-2 
            bg-white text-blue-500 border-2 
            font-semibold py-2 px-2 rounded-lg shadow 
            ${
              bookmarked
                ? "border-yellow-600 hover:border-gray-500"
                : "border-gray-500 hover:border-yellow-600"
            }`}
            >
              <FaBookmark
                size={liked ? 16 : 14}
                className={`${
                  bookmarked
                    ? "text-yellow-600 group-hover:text-gray-500"
                    : "text-gray-500 group-hover:text-yellow-600"
                }`}
              />
              <p
                className={`${
                  bookmarked
                    ? "text-yellow-600 group-hover:text-gray-500"
                    : "text-gray-500 group-hover:text-yellow-600"
                }`}
              >
                Fav
              </p>
            </button>
            <a
              href={mediaSrc}
              className="flex flex-row items-center space-x-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600"
            >
              <FaShare />
              <p>{shares}</p>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full text-left mx-auto px-3">
        <p className="text-gray-600">{description}</p>
        <div className="w-full block md:hidden">
          <div className="flex flex-col mt-4 px-4 ">
            <div className="w-full flex flex-row items-center">
              <input
                type="text"
                className="flex-1 border-2 border-gray-300 rounded-lg py-2 px-4"
                placeholder="Add a comment..."
                value={comment}
                onChange={handleCommentChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="mt-4  overflow-y-auto">
              <h3 className="text-lg font-semibold text-gray-800">Comments</h3>
              <ul className="mt-2 h-80">
                {comments.map((comment, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 p-2 rounded-lg mt-2 shadow"
                  >
                    {comment}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MediaInfoCard.propTypes = {
  mediaType: PropTypes.string.isRequired,
  mediaSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  bookmarked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired,
  toggleBookmark: PropTypes.func.isRequired,
  share: PropTypes.func.isRequired,
  likes: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired,
  meta: PropTypes.object.isRequired,
};

export default MediaInfoCard;
