import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import {
  getProducts,
  singleProduct,
} from "../../redux/features/product/productSlice";
import moment from "moment";

const SingleProduct = () => {
  const dispatch = useDispatch();

  const productData = useSelector(getProducts);
  const product = productData.singleProductList;
  let imageLink = product.image;
  const productList = product.product;

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(singleProduct(id));
    }
  }, [id, dispatch]);

  return (
    <>
      {productData.isLoading && <Spinner />}
      {productList && (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-20 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={imageLink}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {productList.brand}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {productList.name}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    {moment(productList.createdAt).format("MMMM Do YYYY")}
                    <span className="text-gray-600 ml-3">2 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    {productList.category}
                  </span>
                </div>
                <p className="leading-relaxed">{productList.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    Rs {productList.price} /-
                  </span>
                  <div className="flex ml-auto py-2 px-6 focus:outline-none rounded"></div>
                  <div>
                    {/* <input
                    type="text"
                    value=" <%= single_product.id%>"
                    name="product_id"
                    hidden
                  /> */}
                    <button
                      type="submit"
                      className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-blue-700 hover:text-red-700"
                    >
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                  <div>
                    {/* <input type="text" value="" name="product_id" hidden /> */}
                    <button
                      type="submit"
                      className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-blue-700 hover:text-white"
                    >
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full mb-8 ml-10">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-bold  title-font mb-2 text-gray-900">
                Additional Details
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="container flex flex-wrap w-full mb-5 ml-10">
            <div className="w-full mb-6 lg:mb-0">
              <h3 className="sm:text-2xl text-3xl font-bold  mb-2 text-gray-900">
                Uses
              </h3>
              <div className="text-indigo-500 ml-5">{productList.uses}</div>
            </div>
            <div className="w-full mb-6 lg:mb-0">
              <h3 className="sm:text-2xl text-3xl font-bold  mb-2 text-gray-900">
                Side Effects
              </h3>
              <div className="text-indigo-500 ml-5">
                {productList.sideEffects}
              </div>
            </div>
            <div className="w-full mb-6 lg:mb-0">
              <h3 className="sm:text-2xl text-3xl font-bold  mb-2 text-gray-900">
                Dosages
              </h3>
              <div className="text-indigo-500 ml-5">{productList.dosages}</div>
            </div>
            <div className="w-full mb-6 lg:mb-0">
              <h3 className="sm:text-2xl text-3xl font-bold  mb-2 text-gray-900">
                Precautions & Warnings
              </h3>
              <div className="text-indigo-500 ml-5">
                {productList.precaution}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleProduct;
