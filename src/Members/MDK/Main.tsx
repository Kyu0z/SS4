import React from "react";
import DashboardMain from "./Dashboard/DashboardMain";
import { GridProvider } from "@src/context/view_context";

const Main: React.FC = () => {
  return (
    <div>
      <GridProvider>
        <DashboardMain />
      </GridProvider>
    </div>
  );
};

export default Main;
