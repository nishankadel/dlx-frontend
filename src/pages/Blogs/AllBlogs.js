import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";

const AllBlogs = () => {
  return (
    <>
      <section className="py-4 bg-gray-100">
        <div className="container mx-auto">
          <div>
            <h1 className="text-2xl font-black text-gray-900 px-6 md:px-12">
              Blog/Consult From Admin Side
            </h1>
          </div>
          <div className="flex flex-wrap px-6">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBlogs;
