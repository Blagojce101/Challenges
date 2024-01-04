import React, { useEffect, useState } from "react";
import { createContext } from "react";
import CardInterface from "../interfaces/CardInterface";

interface CardContextType {
  cards: CardInterface[];
  filteredCards: CardInterface[];
  filterCardsByType: (type: string) => void;
  setCards: React.Dispatch<React.SetStateAction<any>>;
  handleIsFavourite: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    id: string
  ) => void;
}

export const CardContext = createContext<CardContextType>({
  cards: [],
  filteredCards: [],
  filterCardsByType: () => {},
  setCards: () => {},
  handleIsFavourite: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const LS_RESTAURANTS = "Restaurants";

const CardContextConstructor: React.FC<Props> = ({ children }) => {
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardInterface[]>([]);

  useEffect(() => {
    if (localStorage.getItem(LS_RESTAURANTS)) {
      const restaurantsFromLS = JSON.parse(
        localStorage.getItem(LS_RESTAURANTS)!
      );

      setCards(restaurantsFromLS);
      setFilteredCards(restaurantsFromLS);
    } else {
      fetch("http://localhost:5001/restaurants")
        .then((res) => res.json())
        .then((data: CardInterface[]) => {
          setCards(data);
          setFilteredCards(data);
          localStorage.setItem(LS_RESTAURANTS, JSON.stringify(data));
        });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_RESTAURANTS, JSON.stringify(cards));
  }, [cards]);

  const filterCardsByType = (type: string) => {
    const filteredCards = cards.filter((card) => {
      if (card.restauranttype.toLowerCase() === type.toLowerCase()) {
        return true;
      }
      return false;
    });
    setFilteredCards(filteredCards);
  };

  const handleIsFavourite = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();

    const updatedCards = cards.map((restaurant) => {
      if (restaurant.id === id) {
        const updatedRestaurant = {
          ...restaurant,
          isFavourite: !restaurant.isFavourite,
        };
        return updatedRestaurant;
      }
      return restaurant;
    });

    console.log(updatedCards);

    setCards(updatedCards);
    localStorage.setItem(LS_RESTAURANTS, JSON.stringify(updatedCards));
  };

  return (
    <CardContext.Provider
      value={{
        cards,
        filteredCards,
        filterCardsByType,
        setCards,
        handleIsFavourite,
      }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextConstructor;
