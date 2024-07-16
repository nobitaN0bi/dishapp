import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  didChange: true,
  toggleDidChange: () => {},
});

const StateContextProvider = ({ children }) => {
  const [didChange, toggleDidChange] = useState(true);

  return (
    <StateContext.Provider
      value={{
        didChange,
        toggleDidChange: () => {
          toggleDidChange((prev) => !prev);
          console.log("toggled");
        },
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default StateContextProvider;
