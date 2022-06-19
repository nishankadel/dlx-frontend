import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import ProductCard from "../../components/ProductCard/ProductCard";
import {
  allProducts,
  getProducts,
} from "../../redux/features/product/productSlice";
import Spinner from "../../components/Spinner/Spinner";

const AllProducts = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(getProducts);
  const products = productsData.productList;

  useEffect(() => {
    dispatch(allProducts());
  }, []);

  return (
    <>
      {productsData.isLoading && <Spinner />}
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
      {/* <Pagination /> */}
    </>
  );
};

export default AllProducts;
