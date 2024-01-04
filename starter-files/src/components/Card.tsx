import React from 'react'

interface Card {
  img: string,
  bikeName: string,
  bikePrice: string,
  bikeBrand: string,
};

const Card = ({ img, bikeName, bikePrice, bikeBrand }: Card) => {
  return (
    <div className="card"  style={{width: "31.2%", margin: "5px", height: "320px"}}>
      <img src={`../img/${img}.png`} style={{height: "200px"}} className="card-img-top" alt="..."/>
        <div className="card-body custom-card-body">
          <h5 className="card-title">{bikeName}</h5>
          <span>{bikeBrand}</span>
          <p className="card-text">{bikePrice}$</p>
        </div>
    </div>
  );
};

export default Card;
