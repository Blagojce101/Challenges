import React, { useEffect, useState } from "react";
import Card from "./Card";

interface Product {
  name: string;
  gender: string;
  price: string;
  brand: string;
  image: string;
}

const arrGender = ["MALE", "FEMALE"];
const arrBrand = ["LE GRAND BIKES", "KROSS", "EXPLORER", "VISITOR", "PONY", "FORCE", "E-BIKES", "IDEAL"];

const Filters = () => {

  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const [product, setProduct] = useState<Product[]>([]);
  const [name, setName] = useState("show all");
  const [isActiveFilter, setIsActiveFilter] = useState("Show all");

  localStorage.setItem("selected", name)

  const toggleClass = (filterName: string) => {
    return filterName === isActiveFilter ? "click-hover" : "";
  };

  // filtering SHOW ALL badge numbers
  const allBikes = allProducts.length;
  const showAllNumber = allBikes;


  // filtering GENDER badge numbers
  const genderNumbers = (gender: string) => {
    if (gender === "MALE") {
      const filteredMaleBikes = allProducts.filter((bike) => bike.gender === gender);
      return filteredMaleBikes.length;
    } 
    const filteredFemaleBikes = allProducts.filter((bike) => bike.gender === gender);
    return filteredFemaleBikes.length;
  };


  // filtering BRAND badge numbers
  const brandNumbers = (brand: string) => {
    switch (brand) {
      case "LE GRAND BIKES":
      if (brand === "LE GRAND BIKES") {
        const filteredMaleBikes = allProducts.filter((bike) => bike.brand === brand);
        return filteredMaleBikes.length;
      }
      break;
      case "KROSS":
        if (brand === "KROSS") {
        const filteredMaleBikes = allProducts.filter((bike) => bike.brand === brand);
        return filteredMaleBikes.length;
      }
      break;
      case "EXPLORER":
        if (brand === "EXPLORER") {
        const filteredMaleBikes = allProducts.filter((bike) => bike.brand === brand);
        return filteredMaleBikes.length;
      }
      break;
      case "VISITOR":
        if (brand === "VISITOR") {
        const filteredMaleBikes = allProducts.filter((bike) => bike.brand === brand);
        return filteredMaleBikes.length;
      }
      break;
      case "PONY":
        if (brand === "PONY") {
        const filteredMaleBikes = allProducts.filter((bike) => bike.brand === brand);
        return filteredMaleBikes.length;
      }
      break;
      case "FORCE":
        if (brand === "FORCE") {
        const filteredMaleBikes = allProducts.filter((bike) => bike.brand === brand);
        return filteredMaleBikes.length;
      }
      break;
      case "E-BIKES":
        if (brand === "E-BIKES") {
        const filteredMaleBikes = allProducts.filter((bike) => bike.brand === brand);
        return filteredMaleBikes.length;
      }
      break;
      case "IDEAL":
        if (brand === "IDEAL") {
        const filteredMaleBikes = allProducts.filter((bike) => bike.brand === brand);
        return filteredMaleBikes.length;
      }
      break;
    }
  };


  // Showing All Bikes
  const handleShowAll = () => {
    setName("Show all");
    setProduct(allProducts);
    setIsActiveFilter("Show all");
  };


  // Filtering Bikes by Gender
  const handleFilteringGender = (gender: string) => {
    setName(gender);
    setIsActiveFilter(gender);
    let filteredBikes = allProducts.filter((product) => product.gender === gender);
    setProduct(filteredBikes);
  };


  // Filtering Bikes by Brand
  const handleFilteringBikes = (bike: string) => {
    setName(bike);
    setIsActiveFilter(bike);
    let filteredBikes = allProducts.filter((product) => product.brand === bike);
    setProduct(filteredBikes);
  };


  // Fetching Data
  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
    .then((res) => res.json())
    .then((data) => {
      setProduct(data.products);
      setAllProducts(data.products);
    })
  }, []);
  

  return (
    <div className="container">
      <div className="row">
        <div id="filterElements" className="col-md-3 mb-3">
          <div className="row">
            <div className="col border-bottom">
              <h3>Filter by:</h3>
                <a id="showAll" onClick={() => {
                  handleShowAll()
                }}
                className={`d-flex justify-content-between align-items-center filters ${toggleClass("Show all")}`}>
                  <span id="showAll">Show all</span>
                  <span id="showAllBadge" className="badge badge-pill bg-secondary text-light">
                    {showAllNumber}
                  </span>
                </a>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col border-bottom">
              <h5>Gender</h5>
              {arrGender.map((gender) => {
                return (
                  <a key={gender} id={gender} onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                    handleFilteringGender(gender);
                  }}
                  className={`d-flex justify-content-between align-items-center filters ${toggleClass(gender)}`}>
                    <span>{gender}</span>
                    <span id={gender} className="badge badge-pill bg-secondary text-light">
                    {
                      `${genderNumbers(gender)}`
                    }
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h5>Brand</h5>
              {arrBrand.map((bike) => {
                return (
                  <a key={bike} id={bike} onClick={() => {
                    handleFilteringBikes(bike);
                  }}
                  className={`d-flex justify-content-between align-items-center filters ${toggleClass(bike)}`}>
                    <span>{bike}</span>
                    <span id="leGrandBikesBadge" className="badge badge-pill bg-secondary text-light">
                    {
                      `${brandNumbers(bike)}`
                    }
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div id="bikesContainer" className="col-md-9 mb-3 d-flex flex-wrap">
          {product.map((product, index) => {
            return (
              <Card
                key={index}
                img={product.image}
                bikeName={product.name}
                bikePrice={product.price}
                bikeBrand={product.brand}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filters;