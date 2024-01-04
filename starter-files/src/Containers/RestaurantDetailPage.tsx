import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import CardInterface from "../interfaces/CardInterface";
import { CardContext } from "../context/CardContext";
import Form from "../components/Form";
import { calculateAverageStars } from "../utils/utils";

const RestaurantDetailPage = () => {
  const { cards } = useContext(CardContext);

  const { id } = useParams();

  let foundRestaurant: CardInterface | undefined = undefined;

  if (id) {
    foundRestaurant = cards.find((card) => card.id === id);
  }

  if (!foundRestaurant) {
    return <ErrorPage />;
  }

  const averageRaitingStars = calculateAverageStars(
    foundRestaurant.reviewsList
  );

  return (
    <div className="container">
      <h3 className="text-uppercase mb-3 font-weight-bold text-center">
        {foundRestaurant.businessname}
      </h3>
      <div className="d-flex flex-column border round custom-bg-light mb-3">
        <img src={foundRestaurant.image} className="round" alt="" />
        <div className="py-2 px-3 round">
          {foundRestaurant.reviews && foundRestaurant.reviewsList.length > 0 ? (
            <p className="p-0 m-0">{`rating - ${averageRaitingStars}`}</p>
          ) : null}
          {foundRestaurant.reviews === 0 ? (
            ""
          ) : (
            <small>based on {foundRestaurant.reviews} reviews</small>
          )}
          <p className="mt-2">{foundRestaurant.phone}</p>
          <p>{foundRestaurant.email}</p>
          <p>{foundRestaurant.address}</p>
          <p>
            {foundRestaurant.parkinglot === true
              ? "We have a parking lot waiting for you 😊."
              : "We don`t have a parking for you 😒."}
          </p>
        </div>
      </div>
      {foundRestaurant.reviewsList.length > 0 ? (
        <div>
          <h3 className="text-uppercase my-3 font-weight-bold text-center">
            reviews
          </h3>
          {foundRestaurant.reviewsList.map((review) => {
            return (
              <div
                key={review.id}
                className="custom-bg-light round px-3 py-3 mb-3">
                <p className="font-weight-bold mb-2">
                  Author:{" "}
                  <span className="font-weight-normal">{review.author}</span>
                </p>
                <p className="font-weight-bold mb-2">
                  Message:{" "}
                  <span className="font-weight-normal">{review.comment}</span>
                </p>
                <p className="font-weight-bold mb-0">
                  Stars:{" "}
                  <span className="font-weight-normal">{review.stars}</span>
                </p>
              </div>
            );
          })}
        </div>
      ) : null}
      <Form />
    </div>
  );
};

export default RestaurantDetailPage;
