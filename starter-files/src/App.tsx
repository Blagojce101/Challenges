import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardContextConstructor from "./context/CardContext";
import HomePage from "./Containers/HomePage";
import CuisineDetailPage from "./Containers/CuisineDetailPage";
import RestaurantDetailPage from "./Containers/RestaurantDetailPage";
import ErrorPage from "./components/ErrorPage";
import Favourites from "./Containers/Favourites";

const App = () => {
  return (
    <CardContextConstructor>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/restaurantDetail/:id"
            element={<RestaurantDetailPage />}
          />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cuisineDetail/:id" element={<CuisineDetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CardContextConstructor>
  );
};

export default App;
