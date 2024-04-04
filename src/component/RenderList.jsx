import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const cars = [
  "Tata Motors",
  "Maruti Suzuki",
  "Mahindra & Mahindra",
  "Hyundai Motor India",
  "Kia Motors India",
  "Toyota Kirloskar Motor",
  "Honda Cars India",
  "Renault India",
  "Volkswagen India",
  "Ford India",
];

export default function RenderList() {
  const [list, setList] = useState(cars);

  return (
    <div
      style={{
        margin: "5% 10%",
      }}
    >
      <label>
        <h1>List Items</h1>
      </label>
      <ListGroup
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ListGroupItem style={{ width: "200px", fontWeight: "bold" }}>
          Company Name
        </ListGroupItem>
        {list.map((item, index) => {
          return (
            <ListGroupItem key={index} style={{ width: "200px" }}>
              {item}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
}
