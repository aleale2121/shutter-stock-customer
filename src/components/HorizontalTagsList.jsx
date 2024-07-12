import PropTypes from "prop-types";
import { useState } from "react";

const HorizontalTagsList = ({ tags }) => {
  const [selectedTags, setSelectedTags] = useState(new Set());

  const handleTagClick = (tag) => {
    setSelectedTags((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tag)) {
        newSet.delete(tag);
      } else {
        newSet.add(tag);
      }
      return newSet;
    });
  };

  return (
    <div className="flex flex-row space-x-2 mx-auto items-center justify-start overflow-x-auto py-2 px-2 rounded-lg custom-scrollbar">
      {tags.map((tag, index) => (
        <span
          key={index}
          onClick={() => handleTagClick(tag)}
          className={`${
            selectedTags.has(tag)
              ? "bg-teal-600 text-white"
              : "bg-gray-300 text-gray-800 hover:bg-teal-500 hover:text-white"
          } px-3 py-1 rounded-full text-sm font-lg cursor-pointer whitespace-nowrap`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

HorizontalTagsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HorizontalTagsList;
