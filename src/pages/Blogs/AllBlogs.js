import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import Spinner from "../../components/Spinner/Spinner";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [blogCount, setBlogCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const pages = new Array(totalPages).fill(0).map((v, i) => i);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/api/blog/all-blogs?page=${pageNumber}`)
      .then((res) => {
        setBlogs(res.data.blogs);
        setTotalPages(res.data.totalPages);
        setPageNumber(res.data.page);
        setBlogCount(res.data.blogsCount);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pageNumber]);
  return (
    <>
      {loading && <Spinner />}

      <section className="py-4 bg-gray-100">
        <div className="container mx-auto">
          <div>
            <h1 className="text-2xl font-black text-gray-900 px-6 md:px-12">
              Blog/Consult From Admin Side
            </h1>
          </div>
          <div className="flex flex-wrap px-6">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => {
              setPageNumber(Math.max(1, pageNumber - 1));
            }}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() => {
              setPageNumber(Math.min(totalPages, pageNumber + 1));
            }}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing Page of <span className="font-medium">{pageNumber}</span>{" "}
              to <span className="font-medium">{totalPages}</span> of{" "}
              <span className="font-medium">{blogCount}</span> results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={() => {
                  setPageNumber(Math.max(1, pageNumber - 1));
                }}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>

              {pages.map((pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => {
                    setPageNumber(pageIndex + 1);
                  }}
                  aria-current="page"
                  className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  {pageIndex + 1}
                </button>
              ))}

              <button
                onClick={() => {
                  setPageNumber(Math.min(totalPages, pageNumber + 1));
                }}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
