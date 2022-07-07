import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddToFavorite from "../AddToFavorite/AddToFavorite";
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
              <AddToCart navTo="/all-products" productId={id} />
            </div>
          )}

          <AddToFavorite navTo="/all-products" productId={id} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
