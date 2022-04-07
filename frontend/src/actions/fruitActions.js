export const setFruits = (fruits) => {
  return {
    type: "SET_FRUITS",
    payload: fruits,
  };
};


export const selectedFruit = (fruit) => {
  return {
    type: "SELECTED_FRUIT",
    payload: fruit,
  };
};

export const searchFruits = (searchEvent) => {
  return {
    type: "SEARCH_FRUITS",
    payload: searchEvent,
  };
};

export const searchCategory = (category) => {
  return {
    type: "SEARCH_CATEGORY",
    payload: category,
  };
};

export const resetCategory = () => {
  return {
    type: "CATEGORY_INITIAL_STATE",
  };
};

export const resetSearch = () => {
  return {
    type: "SEARCH_INITIAL_STATE",
  };
};


export const trackVitamin = (track) => {
  return {
    type: "TRACK_VITAMIN",
    payload: track,
  };
};

export const removeFruit = (track) => {
  return {
    type: "REMOVE_FRUIT",
    payload: track,
  };
};

export const increasePortion = (track) => {
  return {
    type: "INCREASE_PORTION",
    payload: track,
  };
};

export const decreasePortion = (track) => {
  return {
    type: "DECREASE_PORTION",
    payload: track,
  };
};







