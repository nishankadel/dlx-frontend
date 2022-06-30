import React from "react";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import ShowCaseBlogs from "../../components/ShowCaseBlogs/ShowCaseBlogs";
import ShowCaseProducts from "../../components/ShowCaseProducts/ShowCaseProducts";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <ShowCaseProducts title="New Medicines" />
      <FeatureCard />
      <ShowCaseBlogs title="New Blogs" />
    </>
  );
};

export default Home;
