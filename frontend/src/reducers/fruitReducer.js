const initialState = {
  fruits: [],
  fruit: {},
  searchEvent: "",
  category: "",
  track: [],
};

export const fruitReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_FRUITS":
      return { ...state, fruits: payload };
    default:
      return state;
  }
};

export const selectedFruitReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case "SELECTED_FRUIT":
      return { ...state, fruit: payload };
    default:
      return state;
  }
};

export const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SEARCH_FRUITS":
      return { ...state, searchEvent: payload };
    case "SEARCH_INITIAL_STATE":
      return state;
    default:
      return state;
  }
};

export const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SEARCH_CATEGORY":
      return { ...state, category: payload };
    case "CATEGORY_INITIAL_STATE":
      return { ...initialState };
    default:
      return state;
  }
};

export const trackReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "TRACK_VITAMIN":
      let fruitTrack = state.track.filter((fruit) => fruit.id === payload.id);
      if (fruitTrack < 1) {
        return { track: [...state.track, payload] };
      } else {
        return state;
      }
    case "REMOVE_FRUIT":
      return {
        ...state,
        track: state.track.filter((fruit) => fruit.id !== payload.id),
      };
    case "INCREASE_PORTION":
      let trackIncrease = state.track.map((fruit) => {
        if (fruit.id === payload.id) {
          return {
            ...fruit,
            quantity: fruit.quantity + 1,
          };
        }
        return fruit;
      });
      return { ...state, track: trackIncrease };
    case "DECREASE_PORTION":
      let trackDecrease = state.track
        .map((fruit) => {
          if (fruit.id === payload.id) {
            return { ...fruit, quantity: fruit.quantity - 1 };
          }
          return fruit;
        })
        .filter((fruit) => fruit.quantity !== 0);
      return { ...state, track: trackDecrease };
    default:
      return state;
  }
};
