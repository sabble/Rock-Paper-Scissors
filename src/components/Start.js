import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Start() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <div className="intro">
        <h1>Rock Paper and Scissors</h1>

        <h2>Enter Your Name</h2>
        <form>
          <input type="text" onChange={handleChange}></input>
        </form>
        {name && (
          <Link to={`/game/${name}`}>
            <button type="submit"> Let's Play </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Start;
