import React from "react";
import SurpriseRestaurant from "../components/SurpriseRestaurant";
import Cuisines from "../components/Cuisines";
import AllRestaurants from "../components/AllRestaurants";
import PopularRestaurant from "../components/PopularRestaurant";

const HomePage = () => {
  return (
    <>
      <SurpriseRestaurant />
      <PopularRestaurant />
      <Cuisines />
      <AllRestaurants />
    </>
  );
};

export default HomePage;
