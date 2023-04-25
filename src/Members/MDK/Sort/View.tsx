import React from "react";
import GridIcon from "../icon/GridIcon";
import ListIcon from "../icon/ListIcon";
import { Space, Typography } from "antd";
import { useGrid } from "@src/context/view_context";

const { Title } = Typography;

const View: React.FC = () => {
  const { grid_view, toggleGrid, toggleList } = useGrid();

  return (
    <Space className="flex items-center justify-center pr-5">
      <Title
        level={3}
        className="relative top-[4px] !text-[#BFC3CD] !text-[24px]"
      >
        View:
      </Title>
      <button
        onClick={toggleGrid}
        className="flex items-center justify-center ml-[1rem] mr-[1rem]"
      >
        <GridIcon className="mr-[.5rem]" />
        Grid
      </button>
      <button onClick={toggleList} className="flex items-center justify-center">
        <ListIcon className="mr-[.5rem]" />
        List
      </button>
    </Space>
  );
};

export default View;
