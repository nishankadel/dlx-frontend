import React from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";

const Home = () => {
  const data = JSON.parse(localStorage.getItem("persist:dlx"));
  console.log(data);
  return (
    <>
      <HomeCarousel />
    </>
  );
};

export default Home;
