import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const cars = [
  "Tata Motors",
  "Maruti Suzuki",
  "Mahindra & Mahindra",
  "Hyundai Motor India",
  "Kia Motors India",
  "Toyota Kirloskar Motor",
  "Honda Cars India",
  // "Renault India",
  // "Volkswagen India",
  // "Ford India",
];

export default function RenderList() {
  const [list, setList] = useState([...cars]);
  const [input, setInput] = useState();

  function handleAdd() {
    if (input !== undefined) {
      setList([input, ...list]);
      console.log([input, ...list]);
      setInput("");
    } else {
      alert("Enter Company name");
    }
  }
  function handleDelete(index) {
    const updateList = list.filter((_, i) => i !== index);
    setList(updateList);
  }

  return (
    <div
      style={{
        margin: "5% 10%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label>
        <h1>List Items</h1>
      </label>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          placeholder="Enter Company name"
          style={{ width: "200px" }}
          value={input || ""}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <Button
          variant="success"
          style={{
            width: "100px",
            margin: "5px",
            font: "15px",
            cursor: "pointer",
          }}
          onClick={handleAdd}
        >
          +
        </Button>
      </div>
      <ListGroup
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <ListGroupItem style={{ width: "200px", fontWeight: "bold" }}>
          Company Name
        </ListGroupItem>
        {list.map((item, index) => {
          return (
            <ListGroupItem
              key={index}
              style={{ width: "200px", cursor: "pointer" }}
              onClick={() => handleDelete(index)}
            >
              {item}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
}
