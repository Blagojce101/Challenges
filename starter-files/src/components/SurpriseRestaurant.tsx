import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../context/CardContext";

const SurpriseRestaurant = () => {
  const { cards } = useContext(CardContext);

  const randomRestaurant = useNavigate();

  const handleSurpriseMe = () => {
    if (cards.length > 0) {
      const randomIndex = Math.floor(Math.random() * cards.length);
      randomRestaurant(`/restaurantDetail/${cards[randomIndex].id}`);
    }
  };

  return (
    <div className="container text-center">
      <h3 className="text-uppercase font-weight-bold mb-4">
        don't know what to eat?
      </h3>
      <button className="btn btn-success w-100" onClick={handleSurpriseMe}>
        Surprise me!
      </button>
    </div>
  );
};

export default SurpriseRestaurant;
