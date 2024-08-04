import React from "react";
import Hero from "./components/main/Hero";
import Movingtext from "./components/main/Movingtext";
import Featuredproducts from "./components/main/Featuredproducts";
import Collection from "./components/main/Collection";
import Review from "./components/main/Review";
const page = () => {
  return (
    <>
      <Hero />
      <Movingtext />
      <Featuredproducts />
      <Collection />
      <Review />
    </>
  );
};

export default page;
