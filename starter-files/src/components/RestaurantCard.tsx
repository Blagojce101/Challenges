import React, { useContext } from "react";
import CardInterface from "../interfaces/CardInterface";
import { Link } from "react-router-dom";
import { calculateAverageStars } from "../utils/utils";
import { CardContext } from "../context/CardContext";

const RestaurantCard: React.FC<CardInterface> = (card) => {
  const { handleIsFavourite } = useContext(CardContext);

  const averageRaitingStars = calculateAverageStars(card.reviewsList);

  return (
    <Link
      to={`/restaurantDetail/${card.id}`}
      style={{ textDecoration: "none" }}>
      <div
        className="card res m-1 text-dark custom-bg-light round"
        style={{ width: "13rem", minHeight: "318px" }}>
        <picture>
          <i
            className={`${
              card.isFavourite ? "fa-solid" : "fa-regular"
            } fa-heart heart text-danger fa-2x`}
            onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
              handleIsFavourite(event, card.id);
            }}></i>
          <img src={card.image} className="round " alt="..." />
        </picture>
        <div className="card-body p-2 round custom-bg-light">
          <h5 className="card-title mb-1 font-weight-bold text-capitalize">
            {card.businessname}
          </h5>
          <p className="card-text m-0 c-orange font-weight-bold">
            {card.restauranttype}
          </p>
          {card.reviews && card.reviewsList.length > 0 ? (
            <p className="p-0 m-0">{`rating - ${averageRaitingStars}`}</p>
          ) : null}

          {card.reviews ? (
            <span>{`based on ${card.reviews} reviews`}</span>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
