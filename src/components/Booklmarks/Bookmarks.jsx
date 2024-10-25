import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 ml-5 mt-3 pt-3 bg-gray-200">
      <div className="border m-5">
        <h1 className="text-purple-600 text-3xl text-center font-bold">Reading Time : {readingTime}</h1>
      </div>
      <h2 className="text-2xl text-center font-semibold ">
        BookMarked Blogs : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
