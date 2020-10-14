import React, { useState } from "react";
import "../App.css";
import { paper, rock, scissors } from "../assets/";
import {Link} from "react-router-dom"

function Game({ match }) {
  const pictures = { paper, rock, scissors };
  const CHOICES = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
  };
  const WIN_TABLE = {
    [CHOICES.ROCK]: {
      [CHOICES.ROCK]: 0,
      [CHOICES.PAPER]: -1,
      [CHOICES.SCISSORS]: 1,
    },
    [CHOICES.PAPER]: {
      [CHOICES.ROCK]: 1,
      [CHOICES.PAPER]: 0,
      [CHOICES.SCISSORS]: -1,
    },
    [CHOICES.SCISSORS]: {
      [CHOICES.ROCK]: -1,
      [CHOICES.PAPER]: 1,
      [CHOICES.SCISSORS]: 0,
    },
  };

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const computerPlay = () =>
    Object.values(CHOICES)[Math.floor(Math.random() * 3)];

  const winner = () => playerScore >= 10 || computerScore >= 10;
  const checkWinner = () => playerScore > computerScore;

  const clickHandle = (e) => {
    const playerChoiceValue = e.target.value;
    const computerChoiceValue = computerPlay();

    const result = WIN_TABLE[playerChoiceValue][computerChoiceValue];

    result > 0 && setPlayerScore(playerScore + 1);
    result < 0 && setComputerScore(computerScore + 1);

    setPlayerChoice(playerChoiceValue);
    setComputerChoice(computerChoiceValue);
  };

  const restart = () => {
    setPlayerScore(0);
    setComputerScore(0);
  };

  return (
    <div className="App">
      <div className="score">
        <h1>{match.params.name}</h1>
        <p>{playerScore}</p>
        <h1>Computer</h1>
        <p>{computerScore}</p>
      </div>

      <div className="match">
        {winner() ? (
          <>
            <button onClick={restart}>restart</button>
            <h1 className="score">
              {checkWinner() ? "YOU WON" : "COMPUTER WON"}
            </h1>
          </>
        ) : (
          <>
            <div className="hands">
              <img src={pictures[playerChoice]} alt=""></img>
              <img src={pictures[computerChoice]} alt=""></img>
            </div>
            <button value="paper" onClick={clickHandle}>
              Paper
            </button>
            <button value="rock" onClick={clickHandle}>
              Rock
            </button>
            <button value="scissors" onClick={clickHandle}>
              Scissors
            </button>
          </>
        )}
      </div>
      <Link to={`/`} >
          <button className="home" type='submit'> Back to home </button>
        </Link>
    </div>
  );
}

export default Game;
