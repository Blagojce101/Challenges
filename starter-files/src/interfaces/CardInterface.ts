import ReviewUser from "./ReviewUser";

export default interface CardInterface {
  isFavourite: boolean;
  reviews: number;
  parkinglot: boolean;
  phone: string;
  image: string;
  restauranttype: string;
  businessname: string;
  address: string;
  slug: string;
  email: string;
  id: string;
  reviewsList: ReviewUser[];
}
