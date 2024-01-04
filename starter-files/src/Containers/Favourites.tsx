import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";
import FavouriteCard from "../components/FavouriteCard";

const Favourites = () => {
  const { cards } = useContext(CardContext);
  const favouritesRestaurant = cards.filter((card) => {
    return card.isFavourite === true;
  });
  return (
    <div className="container" style={{ minHeight: "70.5vh" }}>
      <div className="row d-flex justify-content-center">
        {favouritesRestaurant.length < 1 ? (
          <p>
            There is nothing in Favorites yet. Please add some restaurant to see
            your Favourites restaurants.
          </p>
        ) : (
          favouritesRestaurant.map((card) => {
            return (
              <div key={card.id} className="col-12">
                <FavouriteCard {...card} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Favourites;
