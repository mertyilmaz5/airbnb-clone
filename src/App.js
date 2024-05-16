// App.js
import React from "react";
import data from "./data";
import CardList from "./components/CardList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="logo"
          height={130}
          width={400}
        />{" "}
        <span
          style={{
            fontWeight: "bolder",
            fontSize: "5rem",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "30px",
          }}
        >
          {" "}
          Clone{" "}
        </span>
      </div>
      <CardList data={data} />
    </div>
  );
}

export default App;
