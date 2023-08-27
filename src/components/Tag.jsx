/* eslint-disable react/prop-types */
function Tag({ tagName }) {
  return (
    <div className="group relative my-1 mr-1 inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 ">
      <span className="relative rounded-full bg-articleBg px-2 text-textColor  transition-all duration-75 ease-in group-hover:bg-opacity-0 ">
        {tagName}
      </span>
    </div>
  );
}

export default Tag;
