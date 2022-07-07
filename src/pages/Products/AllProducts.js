import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from "../../components/Spinner/Spinner";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import SearchBar from "../../components/SearchBar/SearchBar";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [productCount, setProductCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const pages = new Array(totalPages).fill(0).map((v, i) => i);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/api/product/all-products?page=${pageNumber}`)
      .then((res) => {
        setProducts(res.data.products);
        setTotalPages(res.data.totalPages);
        setPageNumber(res.data.page);
        setProductCount(res.data.productsCount);
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
      <SearchBar
        router="product"
        SearchedBar="Search result for Medicial Products"
      />

      <section className="text-gray-600">
        <div className="container px-3 py-3 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-bold title-font mb-2 text-gray-900">
                All Medicical Stuffs
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            {/* <ProductCard /> */}
            {products.map((product) => (
              <ProductCard
                key={product._id}
                name={product.name}
                brand={product.brand}
                price={product.price}
                onStock={product.onStock}
                image={product.image["url"]}
                id={product._id}
              />
            ))}

            {/* <ProductCard /> */}
          </div>
        </div>
      </section>

      {products.length <= 0 && (
        <div className="mt-20 h-screen">
          <div className="bg-white p-6 md:mx-auto ">
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Nothing is on product!
              </h3>
              <p className="text-gray-600 my-2">Let admin to add product.</p>
              <div className="py-10 text-center"></div>
            </div>
          </div>
        </div>
      )}

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
              <span className="font-medium">{productCount}</span> results
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

export default AllProducts;
