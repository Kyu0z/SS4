import React, { useState, useEffect } from "react";
import { db } from "@src/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { Space, Typography, Card, Col, Row, Badge, Image, Button } from "antd";
import { NavLink } from "react-router-dom";
import { useGrid } from "@src/context/view_context";
import feature from "@src/Members/MDK/icon/feature.svg";

const { Title } = Typography;

const Standard: React.FC = () => {
  // set view
  const { grid_view } = useGrid();

  interface Room {
    id: string;
    name: string;
    notify: boolean;
    checkIn: string;
    checkOut: string;
  }

  const [rooms, setRooms] = useState<Room[]>([]);
  useEffect(() => {
    const q = query(collection(db, "standard"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const roomsData: Room[] = [];
      querySnapshot.forEach((doc) => {
        roomsData.push({
          id: doc.id,
          name: doc.data().name,
          notify: doc.data().notify,
          checkIn: doc.data().checkIn,
          checkOut: doc.data().checkOut,
        });
      });
      setRooms(roomsData);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Row>
      <Col span={24}>
        <Title level={3} className="!mb-6">
          Standard
        </Title>
      </Col>
      {/* Ràng buộc hiển thị grid/list view */}
      {grid_view ? (
        <>
          {rooms.map((room) => {
            const displayBadge = room.notify === true;
            return (
              <Col style={{ flex: "0 0 20%" }} span={5} key={room.id}>
                <NavLink to="/standard-detail">
                  {/* Ràng buộc hiển thị grid/list view */}
                  {displayBadge ? (
                    <Badge count={3}>
                      <Card
                        title={room.name}
                        extra={<a href="#">More</a>}
                        style={{
                          width: 200,
                          height: 160,
                          borderColor: "#ABAFB7",
                        }}
                      >
                        <Space className="flex items-center justify-center">
                          <div className="circle rounded-full bg-[#D9D9D9] w-[30px] h-[30px]"></div>
                          <div className="circle rounded-full bg-[#D9D9D9] w-[30px] h-[30px]"></div>
                          <div className="circle rounded-full bg-[#D9D9D9] w-[30px] h-[30px]"></div>
                        </Space>
                        <Title
                          level={5}
                          className="flex items-center justify-center mt-4"
                        >
                          {room.checkIn} - {room.checkOut}
                        </Title>
                      </Card>
                    </Badge>
                  ) : (
                    <Card
                      title={room.name}
                      extra={<a href="#">More</a>}
                      style={{
                        width: 200,
                        height: 160,
                        borderColor: "#ABAFB7",
                      }}
                    >
                      <Space className="flex items-center justify-center">
                        <div className="circle rounded-full bg-[#D9D9D9] w-[30px] h-[30px]"></div>
                        <div className="circle rounded-full bg-[#D9D9D9] w-[30px] h-[30px]"></div>
                        <div className="circle rounded-full bg-[#D9D9D9] w-[30px] h-[30px]"></div>
                      </Space>
                      <Title
                        level={5}
                        className="flex items-center justify-center mt-4"
                      >
                        {room.checkIn} - {room.checkOut}
                      </Title>
                    </Card>
                  )}
                </NavLink>
              </Col>
            );
          })}
        </>
      ) : (
        <>
          {rooms.map((room) => {
            const displayBadge = room.notify === true;
            return (
              <Col
                style={{ flex: "0 0 100%", marginBottom: "1.5rem" }}
                key={room.id}
              >
                {/* Ràng buộc hiển thị badge */}
                {displayBadge ? (
                  <Badge count={3}>
                    <Row
                      style={{
                        border: " 0.1rem solid rgba(170, 170, 170, 0.4)",
                        padding: "2rem",
                      }}
                    >
                      <Col span={6}>
                        <Card
                          title={room.name}
                          extra={<a href="#">More</a>}
                          style={{
                            width: 200,
                            height: 160,
                            borderColor: "#ABAFB7",
                          }}
                        >
                          <Space className="flex items-center justify-center">
                            <div className="circle rounded-full bg-[#D9D9D9] w-[30px] h-[30px]"></div>
                            <div className="circle rounded-full bg-[#D9D9D9] w-[30px] h-[30px]"></div>
                            <div className="circle rounded-full bg-[#D9D9D9] w-[30px] h-[30px]"></div>
                          </Space>
                          <Title
                            level={5}
                            className="flex items-center justify-center mt-4"
                          >
                            {room.checkIn} - {room.checkOut}
                          </Title>
                        </Card>
                      </Col>
                      <Col span={18}>
                        <div>
                          <Title level={5}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dicta at ipsum quae iste totam quam illum
                            officia blanditiis. Ullam voluptas et magnam totam
                            quia facere vitae illo culpa minus eum?
                          </Title>
                          <div className="flex item-center mt-[2.5rem] mb-[2.5rem]">
                            <Image preview={false} src={feature} />
                          </div>
                          <NavLink to="/standard-detail">
                            <Button size="large">READ MORE</Button>
                          </NavLink>
                        </div>
                      </Col>
                    </Row>
                  </Badge>
                ) : (
                  <Row
                    style={{
                      border: " 0.1rem solid rgba(170, 170, 170, 0.4)",
                      padding: "2rem",
                    }}
                  >
                    <Col span={6}>
                      <Card
                        title={room.name}
                        extra={<a href="#">More</a>}
                        style={{
                          width: 200,
                          height: 160,
                          borderColor: "#ABAFB7",
                        }}
                      >
                        <Space className="flex items-center justify-center">
                          <div className="circle rounded-full bg-[#D9D9D9] w-[30px] h-[30px]"></div>
                          <div className="circle rounded-full bg-[#D9D9D9] w-[30px] h-[30px]"></div>
                          <div className="circle rounded-full bg-[#D9D9D9] w-[30px] h-[30px]"></div>
                        </Space>
                        <Title
                          level={5}
                          className="flex items-center justify-center mt-4"
                        >
                          {room.checkIn} - {room.checkOut}
                        </Title>
                      </Card>
                    </Col>
                    <Col span={18}>
                      <div>
                        <Title level={5}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dicta at ipsum quae iste totam quam illum
                          officia blanditiis. Ullam voluptas et magnam totam
                          quia facere vitae illo culpa minus eum?
                        </Title>
                        <div className="flex item-center mt-[2.5rem] mb-[2.5rem]">
                          <Image preview={false} src={feature} />
                        </div>
                        <NavLink to="/standard-detail">
                          <Button size="large">READ MORE</Button>
                        </NavLink>
                      </div>
                    </Col>
                  </Row>
                )}
              </Col>
            );
          })}
        </>
      )}
    </Row>
  );
};

export default Standard;
