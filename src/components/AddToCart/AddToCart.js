import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import baseUrl from "../../baseUrl";

const AddToCart = ({ productId, navTo }) => {
  const profile = JSON.parse(localStorage.getItem("user-profile"));
  const token = JSON.parse(localStorage.getItem("user-token"));

  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (profile) {
      axios
        .post(
          `${baseUrl}/product/add-to-cart`,
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
          handleAddToCart();
        }}
        type="submit"
        className="p-2 pl-3 mt-2 pr-3 bg-transparent border-2 border-indigo-500 text-indigo-500 text-sm rounded-lg hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300"
      >
        Add To Cart
      </button>
    </>
  );
};

export default AddToCart;
