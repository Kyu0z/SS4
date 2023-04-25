import React from "react";
import { Layout, Avatar } from "antd";
import { BellOutlined, InfoCircleOutlined } from "@ant-design/icons";

// Header
const { Header } = Layout;

const HeaderMain: React.FC = () => {
  return (
    <Header
      className="header flex items-center justify-between"
      style={{ backgroundColor: "#eaeaea" }}
    >
      <div className="Version">Verison 1.19.</div>
      <div className="header-list list-none flex items-center justify-between">
        <li className="header-item flex items-center">
          <BellOutlined />
        </li>
        <li className="header-item flex items-center mr-[1rem] ml-[1rem]">
          <InfoCircleOutlined />
        </li>
        <li className="header-item flex items-center">
          <p>Mau Duy Khai</p>
          <Avatar className="ml-[.5rem]">K</Avatar>
        </li>
      </div>
    </Header>
  );
};

export default HeaderMain;
