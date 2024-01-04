import React from 'react'
import artists from '../data';
import ArtistItem from './ArtistItem';

const ArtistsList = () => {
  return (
    <>
      <h4 className='textBlack mb-3'>Browse the artist</h4>

      {
        artists.map((artist) => {
          return (
            <ArtistItem key={artist.id} id={artist.id} cover={artist.cover} name={artist.name} />
          )
        })
      }

    </>
  );
};

export default ArtistsList;
