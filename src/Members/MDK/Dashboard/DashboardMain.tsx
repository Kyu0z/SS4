import React from "react";
import { Col, Row } from "antd";
import { Layout, Space, Typography } from "antd";
import HeaderMain from "./HeaderMain";
import SidebarMain from "./SidebarMain";
import SearchMain from "./SearchMain";
import RoomList from "../RoomList";
import View from "../Sort/View";

const { Title } = Typography;

const DashboardMain: React.FC = () => {
  return (
    <div>
      <Layout>
        <HeaderMain />
      </Layout>
      <Row style={{ margin: "2rem 1rem" }}>
        <Col span={20} push={4}>
          <Space className="flex items-center justify-between mb-8">
            <Space className="flex items-center">
              <Title
                level={3}
                className="relative top-[2px] font-extrabold mr-[1rem] ml-[2rem]"
              >
                Room List
              </Title>
            </Space>
            <View />
          </Space>
          <div className="mt-6 mb-6 ml-[2rem]">
            <SearchMain />
          </div>
          <div className="ml-[2rem]">
            <RoomList />
          </div>
        </Col>
        <Col span={4} pull={20}>
          <SidebarMain />
        </Col>
      </Row>
    </div>
  );
};

export default DashboardMain;
