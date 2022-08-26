import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import AllBlogs from "./pages/Blogs/AllBlogs";
import SingleBlog from "./pages/Blogs/SingleBlog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import AllProducts from "./pages/Products/AllProducts";
import SingleProduct from "./pages/Products/SingleProduct";
import Register from "./pages/Register/Register";
import Profile from "./pages/User/Profile";
import Favorites from "./pages/Favorites/Favorites";
import Cart from "./pages/Cart/Cart";
import OrderHistory from "./pages/User/OrderHistory";
import OrderDetails from "./pages/User/OrderDetails";
import UpdateProfile from "./pages/User/UpdateProfile";
import ChangePassword from "./pages/User/ChangePassword";
import Features from "./pages/Features/Features";
import LabTest from "./pages/Features/LabTest";
import MedicineRequest from "./pages/Features/MedicineRequest";
import EPrescription from "./pages/Features/EPrescription";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="dark"
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/all-blogs" element={<AllBlogs />} />
          <Route path="/single-blog/:id" element={<SingleBlog />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/favourites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/order-details/:id" element={<OrderDetails />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features/lab-test" element={<LabTest />} />
          <Route
            path="/features/medicine-request"
            element={<MedicineRequest />}
          />
          <Route path="/features/e-prescription" element={<EPrescription />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
