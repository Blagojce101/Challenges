import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import artists, { Artist } from '../data';
import ErrorPage from './ErrorPage';

const ArtistPage = () => {

  const currentRoute = useLocation();

  const { id } = useParams();

  let foundArtist

  if (id) {
    foundArtist = artists.find((artist) => artist.id.toString() === id.toString());
  };

  if(!foundArtist){
    return <ErrorPage />;
  };

  return (
    <div className='container-fluid text-center filteredArtist'>
      <div className="row">
        <div className="col-12">
          <img src={`/images/covers/${foundArtist?.cover}.jpg`} alt="" className='filteredArtist-img rounded' />
          <h4>{foundArtist?.name}</h4>
          <p>{foundArtist?.bio}</p>
        </div>
      </div>
        <div className="row mb-3">
          {
            foundArtist?.albums.map((album) => {
              return (
                <div className="col-6 albums p-0" key={album.albumId}>
                  <Link to={`${currentRoute.pathname}/${album.albumId}`}>
                    <img src={`/images/albums/${album.cover}.jpg`} alt="" />
                  </Link>
                </div>
              );
            })
          }
        </div>
    </div>
  );
};

export default ArtistPage;
