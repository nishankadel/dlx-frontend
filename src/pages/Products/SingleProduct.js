import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "../../components/AddComment/AddComment";
import AddToCart from "../../components/AddToCart/AddToCart";
import AddToFavorite from "../../components/AddToFavorite/AddToFavorite";
import CommentList from "../../components/CommentList/CommentList";
import ShowCaseProducts from "../../components/ShowCaseProducts/ShowCaseProducts";
import Spinner from "../../components/Spinner/Spinner";

const SingleProduct = () => {
  const profile = JSON.parse(localStorage.getItem("user-profile"));
  const token = JSON.parse(localStorage.getItem("user-token"));
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/single-product/${id}`)
      .then((res) => {
        setProduct(res.data.product);
        setImage(res.data.image);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/comment/get-comment/${id}`)
      .then((res) => {
        setComments(res.data.comments);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const isEmpty = Object.keys(product).length === 0;
  return (
    <>
      {loading || (isEmpty && <Spinner />)}

      {product && (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-20 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {product.brand}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.name}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    {moment(product.createdAt).format("MMMM Do YYYY")}
                    <span className="text-gray-600 ml-3">2 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    {product.category}
                  </span>
                </div>
                <p className="leading-relaxed">{product.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    Rs {product.price} /-
                  </span>
                  <div className="flex ml-auto py-2 px-6 focus:outline-none rounded"></div>
                  <div>
                    <AddToFavorite
                      navTo={`/single-product/${id}`}
                      productId={id}
                    />
                  </div>
                  <div className="mt-3 ml-2">
                    <AddToCart navTo={`/single-product/${id}`} productId={id} />
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
              <div className="text-indigo-500 ml-5">{product.uses}</div>
            </div>
            <div className="w-full mb-6 lg:mb-0">
              <h3 className="sm:text-2xl text-3xl font-bold  mb-2 text-gray-900">
                Side Effects
              </h3>
              <div className="text-indigo-500 ml-5">{product.sideEffects}</div>
            </div>
            <div className="w-full mb-6 lg:mb-0">
              <h3 className="sm:text-2xl text-3xl font-bold  mb-2 text-gray-900">
                Dosages
              </h3>
              <div className="text-indigo-500 ml-5">{product.dosages}</div>
            </div>
            <div className="w-full mb-6 lg:mb-0">
              <h3 className="sm:text-2xl text-3xl font-bold  mb-2 text-gray-900">
                Precautions & Warnings
              </h3>
              <div className="text-indigo-500 ml-5">{product.precaution}</div>
            </div>
          </div>
        </section>
      )}

      {/* comment section  */}
      <section className="text-gray-600 mt-14">
        <div className="container px-3 py-3 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-bold  title-font mb-2 text-gray-900">
                Comments
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          {/* Comment goes here  */}

          {comments &&
            comments.map((comment) => (
              <CommentList
                key={comment._id}
                Id={product._id}
                comment={comment}
                profile={profile}
                token={token}
                nav="product"
              />
            ))}

          {profile && <AddComment id={product._id} nav="product" />}
        </div>
      </section>

      <ShowCaseProducts title="Other Medicines" />
    </>
  );
};

export default SingleProduct;
