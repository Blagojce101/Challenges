import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";
import RestaurantCard from "./RestaurantCard";

const AllRestaurants = () => {
  const { cards } = useContext(CardContext);
  return (
    <div className="container">
      <h3 className="text-uppercase font-weight-bold mb-3 text-center">
        all restaurants
      </h3>
      <div className="d-flex flex-wrap justify-content-center">
        {cards.map((card) => {
          return <RestaurantCard key={card.id} {...card} />;
        })}
      </div>
    </div>
  );
};

export default AllRestaurants;
