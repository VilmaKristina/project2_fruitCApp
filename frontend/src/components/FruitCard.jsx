
import React, { useState } from "react";
import "../App.css";
import FruitCardCss from "./FruitCard.module.css";
import { trackVitamin } from "../actions/fruitActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function FruitCard({ fruit }) {
  const [isDisabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const disableButton = () => {
    setDisabled(false);
  };

  return (
    <main key={fruit.id} className={FruitCardCss.fruitCategoryContainer}>
      <div className={FruitCardCss.vitContainer}>
        <p>Vitamin C:</p>
        <p className="vitCount">{fruit.vitaminCMg} mg</p>
      </div>
      <img src={fruit.img} alt="fruit" className={FruitCardCss.categoryImage} />
      <h4>Portion: {fruit.portionInG} g.</h4>
      <div className={FruitCardCss.portionContainer}>
        ({fruit.portion} {fruit.name})
      </div>
      <div className="buttonsContainer">
        <Link to={`/${fruit.id}`} className="infoLink">
          <button className="trackVitBtn">Info</button>
        </Link>

        <button
          onClick={() => {dispatch(trackVitamin(fruit)); disableButton()}}
          className={isDisabled ? "trackVitBtn" : "trackVitBtn2"}
        >
          Track
        </button>
      </div>
    </main>
  );
}

export default FruitCard;




