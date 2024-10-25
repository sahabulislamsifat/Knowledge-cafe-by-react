import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_image,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-20">
      <img
        className="mx-auto w-96 lg:w-full"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex px-5 my-5 items-center justify-between">
        <div className="flex">
          <img
            className="w-10 lg:w-16 rounded-full"
            src={author_image}
            alt=""
          />
          <div className="ml-6">
            <h3 className="lg:text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="text-red-500 text-xl ml-2"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <div className="px-5">
        <h2 className="text-2xl lg:text-4xl mb-1">{title}</h2>
        <p>
          {hashtags.map((hash, idx) => (
            <span key={idx}>
              <a href="">#{hash}</a>
            </span>
          ))}
        </p>
        <button
          onClick={() => handleMarkAsRead(reading_time)}
          className="text-purple-500 underline font-semibold"
        >
          Mark As Read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
