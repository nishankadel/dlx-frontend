import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import baseUrl from "../../baseUrl";
import AddToCart from "../../components/AddToCart/AddToCart";
import Spinner from "../../components/Spinner/Spinner";

const Favorites = () => {
  const profile = JSON.parse(localStorage.getItem("user-profile"));
  const token = JSON.parse(localStorage.getItem("user-token"));

  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        `${baseUrl}/product/get-favorites`,
        { userId: profile._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setFavorites(res.data.favorites.favorite);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token, profile._id]);

  const deleteFavorite = async (id) => {
    setLoading(true);
    axios
      .post(
        `${baseUrl}/product/delete-favorite`,
        { id: id, userId: profile._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        navigate("/favourites");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      {loading && <Spinner />}
      {favorites && (
        <div className="flex justify-center my-6">
          <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <div className="flex-1">
              <table className="w-full text-sm lg:text-base" cellSpacing="0">
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="hidden md:table-cell"></th>
                    <th className="text-left">Products</th>
                    <th className="text-left">Unit Price</th>
                    <th className="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* if item xaena vane loop  */}
                  {favorites.map((favorite) => (
                    <tr key={favorite._id}>
                      <td className="hidden pb-4 md:table-cell">
                        <Link to={`/single-product/${favorite.productId._id}`}>
                          <img
                            src={favorite.productId.image["url"]}
                            className="w-20 rounded"
                            alt="Thumbnail"
                          />
                        </Link>
                      </td>
                      <td>
                        <Link to={`/single-product/${favorite.productId._id}`}>
                          <p className="mb-2 md:ml-4">
                            {favorite.productId.name}
                          </p>
                        </Link>

                        <button
                          onClick={() => {
                            deleteFavorite(favorite.productId._id);
                          }}
                          type="submit"
                          className="text-gray-700 md:ml-4 hover:text-red-700"
                        >
                          <small>
                            <i className="fa-solid fa-trash-can text-2xl"></i>
                          </small>
                        </button>
                      </td>
                      <td className="hidden pb-4 md:table-cell">
                        {favorite.productId.price}
                      </td>
                      <td className="text-right">
                        {/* if stock xaena vane loop  */}
                        {favorite.productId.onStock > 0 ? (
                          <AddToCart
                            navTo="/favourites"
                            productId={favorite.productId._id}
                          />
                        ) : (
                          <p className="text-red-700 mb-2 md:ml-4">
                            Out of Stock
                          </p>
                        )}
                        {/* if item xaena vane loop  */}
                      </td>
                    </tr>
                  ))}

                  {/* if item xaena vane loop  */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {/* if item xaena vane loop  */}

      {/* if item xaena vane loop  */}
      {favorites.length <= 0 && (
        <div className="mt-20 h-screen">
          <div className="bg-white p-6 md:mx-auto">
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Nothing is on favourite!
              </h3>
              <p className="text-gray-600 my-2">Add to favourite first.</p>
              <div className="py-10 text-center">
                <Link
                  to="/all-products"
                  className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Favorites;
