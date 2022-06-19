import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const ProductCard = ({ name, brand, price, image, onStock, id }) => {
  return (
    <>
      <div className="lg:w-1/4 p-4 w-1/2">
        <Link
          to={`/single-product/${id}`}
          className="block relative h-48 rounded overflow-hidden"
        >
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image}
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {brand}
          </h3>
          <Link to={`/single-product/${id}`}>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {name}
            </h2>
          </Link>
          <p className="mt-1">Rs {price} /-</p>

          {parseInt(onStock) <= 0 ? (
            <p className="text-red-700 mb-2 mt-3 md:ml-4">Out of Stock</p>
          ) : (
            <div>
              <input type="text" name="product_id" hidden />
              <button
                type="submit"
                className="p-2 pl-3 mt-2 pr-3 bg-transparent border-2 border-indigo-500 text-indigo-500 text-sm rounded-lg hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300"
              >
                Add To Cart
              </button>
            </div>
          )}

          <form action="/product/add-favourite" method="post">
            <input type="text" name="product_id" hidden />
            <button
              type="submit"
              className="p-2 mt-5 pl-3 pr-3 bg-transparent border-2 border-red-500 text-red-500 text-sm rounded-lg hover:bg-red-500 hover:text-gray-100 focus:border-4 focus:border-red-300"
            >
              Favourite <i className="fa-solid fa-heart"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
