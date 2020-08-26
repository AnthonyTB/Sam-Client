import React, { createContext, useReducer } from 'react';

export const Context = createContext();

export function ContextProvider(props) {
  const Reducer = (prevState, { type, payload }) => {
    switch (type) {
      case 'StateRecentReviews':
        return {
          ...prevState,
          StateRecentReviews: payload.StateRecentReviews,
        };
      case 'FoodRecentReviews':
        return {
          ...prevState,
          FoodRecentReviews: payload.FoodRecentReviews,
        };
      case 'StateReviews':
        return {
          ...prevState,
          StateReviews: payload.StateReviews,
        };
      case 'FoodReviews':
        return {
          ...prevState,
          FoodReviews: payload.FoodReviews,
        };
      default:
        return '';
    }
  };

  const [state, dispatch] = useReducer(Reducer, {
    StateRecentReviews: null,
    FoodRecentReviews: null,
    StateReviews: null,
    FoodReviews: null,
  });

  const dataSetter = (section, data) => {
    dispatch({
      type: `${section}`,
      payload: {
        [section]: data,
      },
    });
  };

  const value = {
    dataSetter,
    StateRecentReviews: state.StateRecentReviews,
    FoodRecentReviews: state.FoodRecentReviews,
    StateReviews: state.StateReviews,
    FoodReviews: state.FoodReviews,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
