import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";
import RestaurantCard from "../components/RestaurantCard";
import { useParams } from "react-router-dom";

const CuisineDetailPage = () => {
  const { filteredCards, handleIsFavourite } = useContext(CardContext);

  const { id } = useParams();

  return (
    <div className="container" style={{ minHeight: "71.8vh" }}>
      <div className="text-center mb-3 text-uppercase">
        <h3>{id} restaurants</h3>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {filteredCards.map((card, index) => {
          return <RestaurantCard key={`${card.id}-${index}`} {...card} />;
        })}
      </div>
    </div>
  );
};

export default CuisineDetailPage;
