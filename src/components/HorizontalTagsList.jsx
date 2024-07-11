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
    <div className="flex flex-row space-x-2 mx-auto items-center justify-start overflow-x-auto py-2 px-2 bg-gray-100 rounded-lg custom-scrollbar">
      {tags.map((tag, index) => (
        <span
          key={index}
          onClick={() => handleTagClick(tag)}
          className={`${
            selectedTags.has(tag)
              ? "bg-indigo-900 text-white"
              : "bg-indigo-500 text-white hover:bg-indigo-700"
          } px-3 py-1 rounded-full text-sm font-medium cursor-pointer whitespace-nowrap`}
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
