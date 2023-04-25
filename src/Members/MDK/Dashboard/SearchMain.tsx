import React, { useState, useEffect, useRef } from "react";
import { InputRef, Table, TablePaginationConfig } from "antd";
import { Input as MyAntdInput } from "antd";
import { db } from "@src/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const { Search } = MyAntdInput;

interface RoomData {
  id: string;
  name: string;
  checkIn: string;
  checkOut: string;
  notify: boolean;
}

const SearchMain: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<RoomData[]>([]);
  const [showTable, setShowTable] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setShowTable(true);
  };

  useEffect(() => {
    const q = query(
      collection(db, "ListRoom"),
      where("name", ">=", searchTerm),
      where("name", "<=", searchTerm + "\uf8ff")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results: RoomData[] = snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as RoomData)
      );
      setSearchResults(results);
    });
    return () => unsubscribe();
  }, [searchTerm]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Check In",
      dataIndex: "checkIn",
      key: "checkIn",
    },
    {
      title: "Check Out",
      dataIndex: "checkOut",
      key: "checkOut",
    },
  ];

  return (
    <>
      <Search
        style={{ width: "30%" }}
        placeholder="Enter room name..."
        onChange={handleInputChange}
        onFocus={() => setShowTable(true)}
        onBlur={() => setShowTable(false)}
      />
      {showTable && (
        <Table
          style={{ width: "30%" }}
          dataSource={searchResults}
          columns={columns}
        />
      )}
    </>
  );
};

export default SearchMain;
