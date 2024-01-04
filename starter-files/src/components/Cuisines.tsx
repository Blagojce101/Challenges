import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";
import { Link } from "react-router-dom";

const resType = [
  "canteen",
  "bukka",
  "eatery",
  "seafood",
  "pizza",
  "vegan",
  "pasta",
  "american",
  "japanese",
];

const Cuisines = () => {
  const { filterCardsByType } = useContext(CardContext);

  return (
    <div className="container text-center">
      <h3 className="font-weight-bold mb-3 text-uppercase">cuisines</h3>
      {resType.map((type, index) => {
        return (
          <Link
            key={`${type}-${index}`}
            to={`/cuisineDetail/${type}-restaurants`}>
            <button
              className="btn cuisine mb-1"
              style={{
                background: "#ff613d",
                color: "white",
                padding: "5px 20px",
              }}
              onClick={() => {
                filterCardsByType(type);
              }}>
              {type}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Cuisines;
