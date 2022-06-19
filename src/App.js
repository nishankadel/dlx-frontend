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

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <ToastContainer />
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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
