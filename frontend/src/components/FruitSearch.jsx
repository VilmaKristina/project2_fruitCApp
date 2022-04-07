import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import FruitCard from "./FruitCard";
import FruitSearchCss from "./FruitSearch.module.css";


const FruitSearch = () => {
  const fruits = useSelector((state) => state.allFruits.fruits);
  const category = useSelector((state) => state.selectedCategory.category);
  const searchEvent = useSelector((state) => state.allSearch.searchEvent);
  
  return (
    <div>
      <section className={FruitSearchCss.fruitContainer}>
        {fruits
          .filter((fruit) => {
            if (searchEvent === "" || category) {
              return null;
            } else if (
              fruit.name.toLowerCase().includes(searchEvent.toLowerCase())
            ) {
              return fruit;
            }
          })
          .map((fruit) => {
            fruit.quantity = 1;
            return <FruitCard fruit={fruit} key={fruit.id} />;
          })}
      </section>
    </div>
  );
};

export default FruitSearch;
