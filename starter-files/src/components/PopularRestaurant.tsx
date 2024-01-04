import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";
import RestaurantCard from "./RestaurantCard";
import { sortByAverageStars } from "../utils/utils";

const PopularRestaurant = () => {
  const { cards } = useContext(CardContext);

  const restaurantsWithoutRaitings = cards.filter(
    (restaurant) => restaurant.reviewsList.length === 0
  );

  const restaurantsWithRaitings = cards.filter(
    (restaurant) => restaurant.reviewsList.length > 0
  );

  const sortingRestaurants = sortByAverageStars(cards);

  const makingCombinationOfRestaurants = [
    ...sortingRestaurants,
    ...restaurantsWithoutRaitings,
  ];

  const popularRestaurants = makingCombinationOfRestaurants.slice(0, 10);

  return (
    <div className="container">
      <h3 className="mb-3 font-weight-bold text-uppercase text-center">
        our most popular restaurants
      </h3>
      <div className="d-flex flex-wrap justify-content-center">
        {popularRestaurants.map((res, index) => {
          return <RestaurantCard key={`${index} - ${res.id}`} {...res} />;
        })}
      </div>
    </div>
  );
};

export default PopularRestaurant;
