import PropTypes from "prop-types";

const HorizontalTagsList = ({ tags }) => {
  return (
    <div className="flex space-x-2 overflow-x-auto py-4 px-2 bg-gray-100 rounded-lg">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-600"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

HorizontalTagsList.propTypes = {
  tags: PropTypes.array,
};

export default HorizontalTagsList;
