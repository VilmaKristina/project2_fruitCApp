import React, { useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import FruitCategory from "../components/FruitCategory";
import FruitSearch from "../components/FruitSearch";
import {
  setFruits,
  searchFruits,
  searchCategory,
  resetCategory,
  resetSearch,
} from "../actions/fruitActions";

function Home() {
  const dispatch = useDispatch();

  const fetchFruits = async () => {
    const response = await axios
      .get("http://localhost:5000/fruits.json")
      .catch((error) => {
        console.log("Error", error);
      });
    dispatch(setFruits(response.data));
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <section className="homeContainer">
      <section className="mainContent">
        <section className="mainSearch">
          <input
            className="search"
            type="text"
            placeholder="Search fruit..."
            onChange={(e) => {
              dispatch(searchFruits(e.target.value));
              dispatch(resetCategory());
            }}
          />
          <section>
            <article className="categoryButtons">
              <input
                type="radio"
                name="type"
                value="Tropical"
                onChange={(e) => {
                  dispatch(searchCategory(e.target.value));
                  dispatch(resetSearch());
                }}
              />
              Tropical
              <input
                type="radio"
                name="type"
                value="Berry"
                onChange={(e) => {
                  dispatch(searchCategory(e.target.value));
                }}
              />
              Berry
              <input
                type="radio"
                name="type"
                value="Citrus"
                onChange={(e) => {
                  dispatch(searchCategory(e.target.value));
                }}
              />
              Citrus
              <input
                type="radio"
                name="type"
                value="Apples/Pears"
                onChange={(e) => {
                  dispatch(searchCategory(e.target.value));
                }}
              />
              Apples & Pears
            </article>
            <article className="allFruitsButton">
              <input
                type="radio"
                name="type"
                value="All"
                onChange={(e) => {
                  dispatch(searchCategory(e.target.value));
                }}
              />
              All fruits
            </article>
          </section>
        </section>
        <FruitSearch />
        <FruitCategory />
      </section>
    </section>
  );
}

export default Home;
