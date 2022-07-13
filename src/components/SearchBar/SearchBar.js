import axios from "axios";
import React, { useEffect, useState } from "react";
import baseUrl from "../../baseUrl";
import BlogCard from "../BlogCard/BlogCard";
import ProductCard from "../ProductCard/ProductCard";

const SearchBar = ({ router, SearchedBar }) => {
  const [searchText, setSearchText] = useState("");
  const [searchedItems, setSearchedItems] = useState("");

  useEffect(() => {
    axios
      .post(`${baseUrl}/${router}/search`, { searchText })
      .then((res) => {
        setSearchedItems(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchText, router]);

  return (
    <>
      <div className="flex  flex-col items-center justify-center bg-white">
        <div className="md:w-[584px] mx-auto mt-7 flex w-[92%] items-center rounded-full border hover:shadow-md">
          <div className="pl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none"
          />
        </div>
      </div>
      {router === "product" && searchText && (
        <section className="text-gray-600">
          <div className="container px-3 py-3 mx-auto">
            <div className="flex flex-wrap w-full mb-8">
              <div className="w-full mb-6 lg:mb-0">
                <h1 className="sm:text-4xl text-5xl font-bold title-font mb-2 text-gray-900">
                  {SearchedBar}
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
            </div>

            <div className="flex flex-wrap -m-4">
              {/* <ProductCard /> */}
              {searchedItems.map((item) => (
                <ProductCard
                  key={item._id}
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                  onStock={item.onStock}
                  image={item.image["url"]}
                  id={item._id}
                />
              ))}

              {/* <ProductCard /> */}
            </div>
          </div>
        </section>
      )}
      {router === "blog" && searchText && (
        <section className="text-gray-600">
          <div className="container px-3 py-3 mx-auto">
            <div className="flex flex-wrap w-full mb-8">
              <div className="w-full mb-6 lg:mb-0">
                <h1 className="sm:text-4xl text-5xl font-bold title-font mb-2 text-gray-900">
                  {SearchedBar}
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
            </div>

            <div className="flex flex-wrap -m-4">
              {/* <ProductCard /> */}
              {searchedItems.map((item) => (
                <BlogCard key={item._id} blog={item} />
              ))}

              {/* <ProductCard /> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SearchBar;
