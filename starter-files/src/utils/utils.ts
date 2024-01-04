import CardInterface from "../interfaces/CardInterface";
import ReviewUser from "../interfaces/ReviewUser";

export const calculateAverageStars = (reviewsList: ReviewUser[]) => {
  if (reviewsList.length === 0) {
    return 0;
  }
  const totalStars = reviewsList.reduce(
    (sum, review) => sum + +review.stars,
    0
  );

  const averageStars = totalStars / reviewsList.length;
  return parseFloat(averageStars.toFixed(1));
};

export const sortByAverageStars = (restaurant: CardInterface[]) =>
  [...restaurant].sort(
    (a, b) =>
      calculateAverageStars(b.reviewsList) -
      calculateAverageStars(a.reviewsList)
  );
