import React from "react";
import Standard from "./Rooms/Standard/Standard";
import Double from "./Rooms/Double/Double";
import King from "./Rooms/King/King";

const RoomList: React.FC = () => {
  return (
    <>
      <Standard />
      <Double />
      <King />
    </>
  );
};

export default RoomList;
