import React, { useEffect } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch} from "react-redux";
import { selectedFruit } from "../actions/fruitActions";
import { useSelector } from "react-redux";

const Fruit = () => {
  const fruit = useSelector((state) => state.selectedFruit.fruit);
 
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchFruit = async () => {
    const response = await axios
      .get(`http://localhost:5000/fruits.json/${id}`)
      .catch((error) => {
        console.log("error", error);
      });
    dispatch(selectedFruit(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchFruit();
  }, [id]);

  const origin = fruit.origin;
  const benefit = fruit.benefit;

  return (
      <section className="fruitInfoContainer">
        <h1 className="fruitName">{fruit.name}</h1>
        <section className="detailsContainer">
          <section className="originContainer">
            <h1>Origin</h1>
            <div>
              {origin && origin.map((thisorigin, i) => <p key={i}>{thisorigin}</p>)}
            </div>
          </section>
          <section className="typeCaloriesContainer">
            <article>
              <h1>Type</h1>
              <p>{fruit.type}</p>
            </article>
            <article>
              <div>
                <h1>Calories</h1>
                <p>(per portion)</p>
              </div>
              <p>{fruit.calories} cal</p>
            </article>
          </section>
          <section className="benefitsContainer">
            <h1>Benefits</h1>
            <div>
              {benefit && benefit.map((thisorigin, i) => <p key={i}>{thisorigin}</p>)}
            </div>
          </section>
          <section className="fruitInfoImageContainer">
            <img src={fruit.img} alt="fruit" className="fruitInfoImage" />
          </section>
        </section>
      </section>
  );
};

export default Fruit;
