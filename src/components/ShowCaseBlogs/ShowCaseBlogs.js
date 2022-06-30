import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";
import Spinner from "../Spinner/Spinner";

const ShowCaseBlogs = ({ title }) => {
  const [showBlogs, setShowBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/api/blog/get-showcase-blogs")
      .then((res) => {
        setShowBlogs(res.data.blogs);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading && <Spinner />}
      <section className="py-4 bg-gray-100">
        <div className="container mx-auto">
          <div>
            <h1 className="text-2xl font-black text-gray-900 px-6 md:px-12">
              {title}
            </h1>
          </div>
          <div className="flex flex-wrap px-6">
            {showBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row-reverse flex-wrap m-auto">
            <Link
              to="/all-blogs"
              className="p-2 pl-5 pr-5 mt-3 bg-transparent border-2 border-green-500 text-green-500 text-lg rounded-lg hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300"
            >
              See More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCaseBlogs;
