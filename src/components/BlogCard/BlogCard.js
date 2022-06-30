import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={blog.image["url"]}
            alt="blog cover"
          />

          <div className="p-4">
            <h2 className="tracking-widest text-xs title-font font-bold text-green-400 mb-1 uppercase ">
              By Admin
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {blog.title}
            </h1>
            <div className="flex items-center flex-wrap ">
              <Link
                to={`/single-blog/${blog._id}`}
                className="text-green-800  md:mb-2 lg:mb-0"
              >
                <p className="inline-flex items-center">
                  Read Blog
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </p>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <i className="w-4 h-4 mr-1 fa-solid fa-eye"></i>
                {blog.blogView}
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <i className="w-4 h-4 mr-1 fa-solid fa-comment"></i>
                {blog.commentCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
