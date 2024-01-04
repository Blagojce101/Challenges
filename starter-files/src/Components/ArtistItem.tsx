import React from 'react'
import { Artist } from '../data';
import { Link } from 'react-router-dom';

const ArtistItem = ({ id, cover, name }:Artist) => {

  return (
    <div className='col-12 artist mb-3' id={id?.toString()} >
      <Link to={`/artist/${id}`}>
        <img src={`/images/covers/${cover}.jpg`} alt=''/>
        <span className='position bg-primary text-white'>{name}</span>
      </Link>
    </div>
  )
};

export default ArtistItem;
