import { combineReducers } from "redux";
import {
  categoryReducer,
  fruitReducer,
  searchReducer,
  trackReducer,
  selectedFruitReducer,
} from "./fruitReducer";

const reducers = combineReducers({
  allFruits: fruitReducer,
  allTrack: trackReducer,
  allSearch: searchReducer,
  selectedCategory: categoryReducer,
  selectedFruit: selectedFruitReducer,
});

export default reducers;
