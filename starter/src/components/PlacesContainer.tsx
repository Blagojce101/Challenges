import React, { useEffect, useState } from 'react';

interface Card {
    id: number,
    place: string,
    desc: string,
    img: string,
};

const PlacesContainer = () => {

    const [card, setCard] = useState<Card[]>([]);
    
    useEffect(() => {
        fetch("http://localhost:5001/places")
        .then((res) => res.json())
        .then((data) => {
            setCard(data);
        })
    }, []);

  return (
    <div className='card-container'>
        {card.map((card) => {
            return (
                <div className='Card' style={{backgroundImage: `url(${card.img})`}} key={card.id}>
                    <h3>{card.place}</h3>
                    <p>{card.desc}</p>
                </div>
            );
        })}
    </div>
  );
};

export default PlacesContainer;
