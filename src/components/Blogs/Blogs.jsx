import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setblogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl">Blogs : {blogs.length}</h1>
    </div>
  );
};

export default Blogs;
