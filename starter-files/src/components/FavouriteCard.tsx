import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardInterface from "../interfaces/CardInterface";
import { CardContext } from "../context/CardContext";
import { calculateAverageStars } from "../utils/utils";

const FavouriteCard: React.FC<CardInterface> = (card) => {
  const { handleIsFavourite } = useContext(CardContext);
  const averageRaitingStars = calculateAverageStars(card.reviewsList);
  return (
    <Link
      to={`/restaurantDetail/${card.id}`}
      style={{ textDecoration: "none" }}>
      <div className="res custom-bg-light m-0 mb-3 round text-dark">
        <picture>
          <i
            className={`${
              card.isFavourite ? "fa-solid" : "fa-regular"
            } fa-heart heart-favouriteCard text-danger fa-2x`}
            onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
              handleIsFavourite(event, card.id);
            }}></i>
          <img src={card.image} alt="" className="round" />
        </picture>
        <div className="p-3 round">
          <h5 className="card-title mb-1 font-weight-bold text-capitalize">
            {card.businessname}
          </h5>
          <p className="card-text m-0 c-orange font-weight-bold">
            {card.restauranttype}
          </p>
          {card.reviews && card.reviewsList.length > 0 ? (
            <p className="p-0 m-0">{`rating - ${averageRaitingStars}`}</p>
          ) : null}
          {card.reviews === 0 ? (
            ""
          ) : (
            <small>based on {card.reviews} reviews</small>
          )}
        </div>
      </div>
    </Link>
  );
};

export default FavouriteCard;
