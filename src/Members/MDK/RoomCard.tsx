import React, { useState, useEffect } from "react";
import { db } from "@src/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { Space, Typography, Card } from "antd";

const { Title } = Typography;

const RoomCard: React.FC = () => {
  interface Room {
    id: string;
    name: string;
    // notify: boolean;
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
          // notify: doc.data().notify,
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
    <>
      {rooms.map((room, index) => {
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
          <Title level={5} className="flex items-center justify-center mt-4">
            {room.checkIn} - {room.checkOut}
          </Title>
        </Card>;
      })}
    </>
  );
};

export default RoomCard;
