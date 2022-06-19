import React, { useEffect } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setLogout } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
// import "./navbar.css"

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/");
    toast.success("Logged out successfully");
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <>
      <Disclosure as="nav" className="bg-gray-700 navbar">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to="/">
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="/logo.png"
                        alt="DLX-Logo"
                      />
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="/logo.png"
                        alt="DLX-Logo"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      <Link
                        to="/"
                        className=" text-white hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Home
                      </Link>
                      <Link
                        to="/all-products"
                        className=" text-white hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Products
                      </Link>
                      <Link
                        to="/all-blogs"
                        className=" text-white hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Blogs
                      </Link>
                      <Link
                        to="/about"
                        className=" text-white hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium"
                      >
                        About
                      </Link>
                      <Link
                        to="/features"
                        className=" text-white hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Features
                      </Link>

                      <Link
                        to="/contact"
                        className=" text-white hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Cart ko button haru yaha hai  */}
                  {/* <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button> */}
                  <button
                    type="button"
                    className=" text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className=" text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ml-3"
                  >
                    <span className="sr-only">View notifications</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
                  {/* Cart ko button haru yaha hai  */}
                  {/* Profile dropdown */}

                  {user.isLoggedIn ? (
                    <div className="flex">
                      <Menu as="div" className="ml-7 relative">
                        <div>
                          <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <Link to="/user/profile">
                              <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </Link>
                          </Menu.Button>
                        </div>
                      </Menu>

                      <Link
                        to="/auth/login"
                        className="bg-red-700 text-gray-300 hover:bg-red-800 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium ml-5"
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </div>
                  ) : (
                    <Link
                      to="/auth/login"
                      className="bg-indigo-700 text-gray-300 hover:bg-indigo-800 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium ml-5"
                    >
                      Join Now
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className=" text-white hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/all-products"
                  className=" text-white hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </Link>
                <Link
                  to="/all-blogs"
                  className=" text-white hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blogs
                </Link>
                <Link
                  to="/about"
                  className=" text-white hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/features"
                  className=" text-white hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium"
                >
                  Features
                </Link>

                <Link
                  to="/contact"
                  className=" text-white hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default NavBar;
