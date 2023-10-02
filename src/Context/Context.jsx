import { createContext, useReducer } from "react";

export const HotelContext = createContext();

const data = {
  allData: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ALL_DATA":
      return state;
  }
};

const Context = ({ children }) => {
  const [allData, dispatch] = useReducer(reducer, data);
  return (
    <HotelContext.Provider
      value={{
        allData,
        dispatch,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export default Context;
