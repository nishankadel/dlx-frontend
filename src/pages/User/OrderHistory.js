import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Spinner from "../../components/Spinner/Spinner";
import axios from "axios";
import baseUrl from "../../baseUrl";

const OrderHistory = () => {
  const token = JSON.parse(localStorage.getItem("user-token"));
  const profile = JSON.parse(localStorage.getItem("user-profile"));

  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        `${baseUrl}/user/order-history`,
        { userId: profile._id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        if (res.data.success === true) {
          setOrderList(res.data.userOrder);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token]);
  return (
    <>
      {loading && <Spinner />}
      <section className="text-gray-600">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">
                Track Your Order
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
              <div className="w-full lg:w-5/6">
                <div className="bg-white shadow-md rounded my-6">
                  <table className="min-w-max w-full table-auto">
                    <thead>
                      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-center">Order Id</th>
                        <th className="py-3 px-6 text-center">Ordered By</th>
                        <th className="py-3 px-6 text-center">Ordered Date</th>
                        <th className="py-3 px-6 text-center">Total Price</th>
                        <th className="py-3 px-6 text-center">Pay Type</th>
                        <th className="py-3 px-6 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                      {orderList.map((order) => (
                        <tr
                          key={order._id}
                          className="border-b border-gray-200 hover:bg-gray-100"
                        >
                          <td className="py-3 px-6 text-center">
                            <div className="flex items-center justify-center text-blue-500">
                              <Link to={`/order-details/${order._id}`}>
                                {order._id}
                              </Link>
                            </div>
                          </td>
                          <td className="py-3 px-6 text-center">
                            {order.paidBy}
                          </td>
                          <td className="py-3 px-6 text-center">
                            <div className="flex item-center justify-center">
                              {moment(order.orderAt).format("MMM DD, YYYY")}
                            </div>
                          </td>
                          <td className="py-3 px-6 text-center">
                            <div className="flex item-center justify-center">
                              {order.totalPrice}
                            </div>
                          </td>
                          <td className="py-3 px-6 text-center">
                            <div className="flex item-center justify-center">
                              {order.payType}
                            </div>
                          </td>
                          <td className="py-3 px-6 text-center">
                            <div className="flex item-center justify-center">
                              {order.status}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {orderList.length <= 0 && (
        <div className="mt-20 h-screen">
          <div className="bg-white p-6 md:mx-auto">
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Nothing is ordered yet!
              </h3>
              <p className="text-gray-600 my-2">Buy some products first.</p>
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

export default OrderHistory;
