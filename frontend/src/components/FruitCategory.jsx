import "../App.css";
import { useSelector } from "react-redux";
import FruitCard from "./FruitCard";
import FruitCategoryCss from "./FruitCategory.module.css";

const FruitCategory = () => {
  const fruits = useSelector((state) => state.allFruits.fruits);
  const category = useSelector((state) => state.selectedCategory.category);

  return (
    <section className={FruitCategoryCss.fruitContainer}>
      {fruits
        .filter((fruit) => {
          if (fruit.type === category) {
            return fruit;
          } else if (category === "All") {
            return fruit;
          } else {
            return null;
          }
        })
        .map((fruit) => {
          fruit.quantity = 1;
          return <FruitCard fruit={fruit} key={fruit.id} />;
        })}
    </section>
  );
};

export default FruitCategory;
