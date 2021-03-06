import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import baseUrl from "../../baseUrl";

const AddToFavorite = ({ productId, navTo }) => {
  const profile = JSON.parse(localStorage.getItem("user-profile"));
  const token = JSON.parse(localStorage.getItem("user-token"));

  const navigate = useNavigate();
  const handleAddToFavorite = async () => {
    if (profile) {
      axios
        .post(
          `${baseUrl}/product/add-to-favorite`,
          { productId, userId: profile._id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          if (res.data.success === true) {
            toast.success(res.data.message);
            navigate(navTo);
          } else {
            toast.error(res.data.message);
            navigate(navTo);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Please login to continue.");
      navigate("/auth/login");
    }
  };

  return (
    <>
      <button
        onClick={() => {
          handleAddToFavorite();
        }}
        type="submit"
        className="p-2 mt-5 pl-3 pr-3 bg-transparent border-2 border-red-500 text-red-500 text-sm rounded-lg hover:bg-red-500 hover:text-gray-100 focus:border-4 focus:border-red-300"
      >
        Favourite <i className="fa-solid fa-heart"></i>
      </button>
    </>
  );
};

export default AddToFavorite;
