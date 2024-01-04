import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './Components/Container';
import ArtistsList from './Components/ArtistsList';
import ArtistPage from './Components/ArtistPage';
import AlbumPage from './Components/AlbumPage';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Container>
          <Routes>

            <Route path='/' element={<ArtistsList />}/>
            <Route path='artist/:id' element={ <ArtistPage /> }/>
            <Route path='artist/:id/:albumId' element={ <AlbumPage /> }/>
            <Route path='*' element={ <ErrorPage /> }/>

          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
