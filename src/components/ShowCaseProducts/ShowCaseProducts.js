import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import baseUrl from "../../baseUrl";
import ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";

const ShowCaseProducts = ({ title }) => {
  const [showProduct, setShowProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/product/get-showcase-products`)
      .then((res) => {
        setShowProduct(res.data.products);
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
      <section className="text-gray-600">
        <div className="container px-3 py-3 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl  font-medium title-font mb-2 text-gray-900">
                {title}
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            {showProduct.map((p) => (
              <ProductCard
                key={p._id}
                name={p.name}
                brand={p.brand}
                price={p.price}
                onStock={p.onStock}
                image={p.image["url"]}
                id={p._id}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row-reverse flex-wrap m-auto">
            <Link
              to="/all-products"
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

export default ShowCaseProducts;
