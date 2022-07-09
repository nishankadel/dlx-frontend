import axios from "axios";
import KhaltiCheckout from "khalti-checkout-web";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/Spinner";
// import config from "../../Khalti";

const Cart = () => {
  const profile = JSON.parse(localStorage.getItem("user-profile"));
  const token = JSON.parse(localStorage.getItem("user-token"));

  const cartProductId = [];
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        "http://localhost:8000/api/product/get-cart",
        { userId: profile._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setCart(res.data.cart.cart);
        setTotalPrice(res.data.cart.totalPrice);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token, profile._id]);

  const handleClearCart = async () => {
    setLoading(true);
    axios
      .post(
        "http://localhost:8000/api/product/clear-cart",
        { userId: profile._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCartIncrease = async (id) => {
    setLoading(true);
    axios
      .post(
        "http://localhost:8000/api/product/increase-cart",
        { userId: profile._id, productId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
          navigate("/cart");
          window.location.reload();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleCartDecrease = async (id) => {
    setLoading(true);
    axios
      .post(
        "http://localhost:8000/api/product/decrease-cart",
        { userId: profile._id, productId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
          navigate("/cart");
          window.location.reload();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteFavorite = async (id) => {
    setLoading(true);
    axios
      .post(
        "http://localhost:8000/api/product/delete-cart",
        { id: id, userId: profile._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        navigate("/cart");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // KHALTI INTEGRATION
  let config = {
    // replace this key with yours
    publicKey: "test_public_key_424a6e1006d14b3f94a1eb2af5f24cc8",
    productIdentity: "1234567890",
    productName: "DLX",
    productUrl: "http://localhost:3000",
    eventHandler: {
      onSuccess(payload) {
        axios
          .post(
            "http://localhost:8000/api/product/order-history",
            {
              userId: profile._id,
              amount: payload.amount,
              token: payload.token,
              cartProductId,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            toast.success(res.data.message);
            navigate("/all-products");
            handleClearCart();
          })
          .catch((err) => {
            console.log(err);
          });
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };

  var checkout = new KhaltiCheckout(config);

  const handleKhaltiPayment = () => {
    checkout.show({ amount: totalPrice * 100 });
  };
  // KHALTI INTEGRATION
  return (
    <>
      {loading && <Spinner />}

      {cart && (
        <div className="flex justify-center my-6">
          <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <div className="flex-1">
              <table className="w-full text-sm lg:text-base" cellSpacing="0">
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="hidden md:table-cell"></th>
                    <th className="text-left">Products</th>
                    <th className="lg:text-right text-left pl-5 lg:pl-0">
                      <span className="lg:hidden" title="Quantity">
                        Qtd
                      </span>
                      <span className="hidden lg:inline">Quantity</span>
                    </th>
                    <th className="hidden text-right md:table-cell">
                      Unit price
                    </th>
                    <th className="text-right">Total price</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(
                    (c) => (
                      cartProductId.push(c.productId._id),
                      (
                        <tr key={c._id}>
                          <td className="hidden pb-4 md:table-cell">
                            <Link to={`/single-product/${c.productId._id}`}>
                              <img
                                src={c.productId.image["url"]}
                                className="w-20 rounded"
                                alt="Thumbnail"
                              />
                            </Link>
                          </td>
                          <td>
                            <Link to={`/single-product/${c.productId._id}`}>
                              <p className="mb-2 md:ml-4">
                                {" "}
                                {c.productId.name}{" "}
                              </p>
                            </Link>

                            <button
                              onClick={() => {
                                deleteFavorite(c.productId._id);
                              }}
                              type="submit"
                              className="text-gray-700 md:ml-4 hover:text-red-700"
                            >
                              <small>
                                <i className="fa-solid fa-trash-can text-2xl"></i>
                              </small>
                            </button>
                          </td>
                          <td className="justify-center md:justify-end md:flex mt-6">
                            <div className="w-20 h-10">
                              <div className="relative flex flex-row w-full h-8">
                                {c.productId.stock <= 0 ? (
                                  <p className="text-red-700 ml-2">
                                    Out Of Stock
                                  </p>
                                ) : (
                                  <div className="flex">
                                    {c.quantity !== 1 && (
                                      <div
                                        className="hover:cursor-pointer"
                                        onClick={() => {
                                          handleCartDecrease(c.productId._id);
                                        }}
                                      >
                                        <i className="fa-solid fa-minus bg-blue-500 text-white p-1 rounded font-bold"></i>
                                      </div>
                                    )}
                                    <p className="w-full pl-4 pr-4 font-semibold text-center focus:outline-none hover:text-black focus:text-black">
                                      {c.quantity}
                                    </p>

                                    <div
                                      className="hover:cursor-pointer"
                                      onClick={() => {
                                        handleCartIncrease(c.productId._id);
                                      }}
                                    >
                                      <i className="fa-solid fa-plus bg-blue-500 text-white p-1 rounded font-bold"></i>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="hidden text-right md:table-cell">
                            <span className="text-sm lg:text-base font-medium">
                              Rs {c.unitPrice} /-
                            </span>
                          </td>
                          <td className="text-right">
                            <span className="text-sm lg:text-base font-medium">
                              Rs {c.unitTotalPrice} /-
                            </span>
                          </td>
                        </tr>
                      )
                    )
                  )}
                </tbody>
              </table>
              <hr className="pb-6 mt-6" />

              {cart.length > 0 && (
                <div className="my-4 mt-6 -mx-2 lg:flex">
                  <div className="lg:px-2 lg:w-1/2">
                    <h1 className="ml-2 font-bold text-3xl uppercase">
                      Action
                    </h1>

                    <button
                      onClick={() => {
                        handleClearCart();
                        toast.success("Cart cleared successfully");
                        navigate("/cart");
                      }}
                      type="submit"
                      className="relative bg-red-500 hover:bg-red-700 text-white mt-1 p-3 rounded font-bold overflow-hidden"
                    >
                      Clear Cart
                    </button>
                  </div>
                  <div className="lg:px-2 lg:w-1/2">
                    <div className="p-4 bg-gray-100 rounded-full">
                      <h1 className="ml-2 font-bold uppercase">
                        Order Details
                      </h1>
                    </div>
                    <div className="p-4">
                      {/* <% var total = 0   <% price_arr.forEach(function(t){   <% total +=
            t   <%})  */}
                      <div className="flex justify-between pt-4 border-b">
                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                          Total
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                          Rs {totalPrice}
                        </div>
                      </div>
                      <br />
                      <button
                        type="submit"
                        onClick={handleKhaltiPayment}
                        className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                      >
                        <svg
                          aria-hidden="true"
                          data-prefix="far"
                          data-icon="credit-card"
                          className="w-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                          />
                        </svg>
                        <span className="ml-2 mt-5px">Pay with Khalti</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {cart.length <= 0 && (
        <div className="mt-20 h-screen">
          <div className="bg-white p-6 md:mx-auto">
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Nothing is on cart!
              </h3>
              <p className="text-gray-600 my-2">Add to cart first.</p>
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

export default Cart;
