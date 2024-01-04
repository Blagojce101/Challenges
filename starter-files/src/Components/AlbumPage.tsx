import React from 'react'
import { useParams } from 'react-router-dom'
import artists, { Artist } from '../data'
import ErrorPage from './ErrorPage'

const AlbumPage = () => {

    const albumId = useParams();

    let foundedArtist;

    let foundedAlbum;
    
    if (albumId.id) {
      foundedArtist = artists.find((artist) => artist.id.toString() === albumId.id?.toString())
    };

    if(albumId.albumId) {
      foundedAlbum = foundedArtist?.albums.find((album) => album.albumId === albumId.albumId)
    };

    if(!foundedAlbum) {
      return <ErrorPage />
    };

  return (
    <div className='container-fluid'>
      <div className="row py-5">
        {
          <div className='col-12 text-center foundedAlbum'>
            <img src={`/images/albums/${foundedAlbum?.cover}.jpg`} alt="" className='my-3 rounded'/>
            <p>Title: <span className='text-black-50'>{foundedAlbum?.title}</span></p>
            <p>Year: <span className='text-black-50'>{foundedAlbum?.year}</span></p>
            <p>Price: <span className='text-black-50'>{foundedAlbum?.price} $</span></p>
          </div>
        }
      </div>
    </div>
  );
};

export default AlbumPage;
