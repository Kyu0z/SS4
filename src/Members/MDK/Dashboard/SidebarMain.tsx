import React from "react";
import {
  PieChartOutlined,
  UsergroupAddOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem(
    "Dashboard",
    "grp",
    null,
    [
      getItem(<PieChartOutlined />, "Home"),
      getItem(<UsergroupAddOutlined />, "Group"),
      getItem(<FileTextOutlined />, "File"),
    ],
    "group"
  ),
];

const SidebarMain: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
        boxShadow: "10px 10px 20px rgba(218, 213, 213, 50%)",
        borderRadius: "12px",
      }}
      className="border-gray-300"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default SidebarMain;
