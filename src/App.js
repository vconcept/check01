import React from 'react';
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./components/name.js";
import Price from "./components/price.js";
import Description from "./components/description.js";
import Image from "./components/image.js";
import "./App.css";

const myName = "Victor Osed";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Card style={{ width: "28rem", margin: "20px" }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <Card style={{ width: "28rem", margin: "20px" }}>
        <h2>{myName ? `Hello ${myName}` : "Hello there"}</h2>
      </Card>

      <Card style={{ width: "28rem", margin: "20px" }}>
        {myName && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9TAHy9r5455C3I1T_CrWaCuJkYjNaWkKJw&s" />}
      </Card>
    </div>
  );
}

export default App;
