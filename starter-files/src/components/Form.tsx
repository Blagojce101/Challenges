import React, { useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import CardInterface from "../interfaces/CardInterface";
import { CardContext, LS_RESTAURANTS } from "../context/CardContext";

const ReviewForm: React.FC = () => {
  const { setCards } = useContext(CardContext);

  const nameRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLInputElement>(null);
  const starsRef = useRef<HTMLInputElement>(null);

  const { id } = useParams();

  const handleSubmit = async () => {
    const newReview = {
      id: new Date().valueOf(),
      author: nameRef.current?.value,
      comment: commentRef.current?.value,
      stars: starsRef.current?.value,
    };

    const res = await fetch(`http://localhost:5001/restaurants/${id}`);
    const data: CardInterface = await res.json();

    const updatedReviewsList = [...data.reviewsList, newReview];

    const updatedRestaurant = {
      ...data,
      reviewsList: updatedReviewsList,
      reviews: updatedReviewsList.length,
    };

    await fetch(`http://localhost:5001/restaurants/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRestaurant),
    });

    setCards((prevCards: CardInterface[]) => {
      return prevCards.map((restaurant: CardInterface) =>
        restaurant.id === id ? updatedRestaurant : restaurant
      );
    });

    nameRef.current!.value = "";
    commentRef.current!.value = "";
    starsRef.current!.value = "0";
  };

  return (
    <div>
      <h2>Review Form</h2>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          handleSubmit();
        }}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />

        <label htmlFor="comment">Comment</label>
        <input type="text" id="comment" ref={commentRef} />

        <label htmlFor="stars">Stars</label>
        <input
          type="range"
          id="stars"
          min="0"
          max="5"
          step="1"
          defaultValue="0"
          ref={starsRef}
        />

        <button type="submit" className="btn btn-success w-100">
          Leave a review!
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
