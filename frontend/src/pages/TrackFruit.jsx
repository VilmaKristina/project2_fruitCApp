import React from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFruit,
  increasePortion,
  decreasePortion,
} from "../actions/fruitActions";
import { format } from "date-fns";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Track() {
  const track = useSelector((state) => state.allTrack.track);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let totalGrams = track.reduce(
    (amount, fruit) => amount + fruit.vitaminCMg * fruit.quantity,
    0
  );

  const date = new Date();
  const dateCurrent = format(date, "yyyy/MM/dd");

  const refreshPage = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <h1 className="currentDate">{dateCurrent}</h1>
      <div className="infoTitle">Your VIT-C intake today:</div>
      <h2>{totalGrams} mg</h2>
      <section className="vitLevels">
        <div className={totalGrams < 35 ? "red" : "redLight"}>Too Low</div>
        <div
          className={
            totalGrams >= 35 && totalGrams < 82 ? "yellow" : "yellowLight"
          }
        >
          Low
        </div>
        <div className={totalGrams >= 82 ? "green" : "greenLight"}>
          Sufficient
        </div>
      </section>

      {track.length !== 0 ? (
        track.map((fruit) => {
          return (
            <main key={fruit.id} className="trackContainer">
              <article>
                <div className="trackInfo">
                  <h3 className="trackName">{fruit.name}</h3>
                  <img src={fruit.img} alt="fruit" className="trackImage" />
                </div>
                <h4>VIT-C ({fruit.vitaminCMg} mg)</h4>
                <h4>Per portion</h4>
              </article>
              <article className="trackPortion">
                <div className="portionCount">
                  <div
                    onClick={() => dispatch(decreasePortion(fruit))}
                    className="trackBtn"
                  >
                    -
                  </div>
                  <h3>{fruit.quantity}</h3>
                  <div
                    onClick={() => dispatch(increasePortion(fruit))}
                    className="trackBtn"
                  >
                    +
                  </div>
                </div>
              </article>
              <div
                onClick={() => dispatch(removeFruit(fruit))}
                className="removeIcon"
              >
                <FaTimes className="trackIcon" />
              </div>
            </main>
          );
        })
      ) : (
        <Link to="/" className="infoLink">
          <button className="vitBtnBack" onClick={() => refreshPage()}>
            BACK TO SEARCH
          </button>
        </Link>
      )}
    </div>
  );
}

export default Track;
