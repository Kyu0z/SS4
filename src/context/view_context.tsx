import React, { createContext, useContext, useState } from "react";

type GridContextType = {
  grid_view: boolean;
  toggleGrid: () => void;
  toggleList: () => void;
};

const GridContext = createContext<GridContextType>({
  grid_view: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleGrid: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleList: () => {},
});

export const useGrid = () => {
  return useContext(GridContext);
};

export const GridProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [grid_view, setGrid] = useState<boolean>(true);

  const toggleGrid = () => {
    setGrid(true);
    console.log("Clicked Grid button");
  };

  const toggleList = () => {
    console.log("Clicked List button");
    setGrid(false);
  };

  const contextValue: GridContextType = {
    grid_view,
    toggleGrid,
    toggleList,
  };

  return (
    <GridContext.Provider value={contextValue}>{children}</GridContext.Provider>
  );
};
