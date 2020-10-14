import React, { useState } from 'react';
import { paper, rock, scissors } from './assets';

import './App.css';

function App() {
  const CHOICES = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors',
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

  const pictures = { paper, rock, scissors };

  const [playerChoice, setPlayerChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();

  const [playerResult, setPlayerResult] = useState(0);
  const [computerResult, setComputerResult] = useState(0);

  const computerPlay = () => Object.values(CHOICES)[Math.floor(Math.random() * 3)];

  const play = (e) => {
    const playerChoiceValue = e.target.value;
    const computerChoiceValue = computerPlay();

    const result = WIN_TABLE[playerChoiceValue][computerChoiceValue];

    result > 0 && setPlayerResult(playerResult + 1);
    result < 0 && setComputerResult(computerResult + 1);

    setPlayerChoice(playerChoiceValue);
    setComputerChoice(computerChoiceValue);
  };

  return (
    <div className='App'>
      <div className='score'>
        <h1>Player</h1>
        <p>{playerResult}</p>
        <h1>Computer</h1>
        <p>{computerResult}</p>
      </div>

      <div className='hands'>
        <img src={pictures[playerChoice]} alt=''></img>
        <img src={pictures[computerChoice]} alt=''></img>
      </div>

      <div className='intro'>
        <button value={CHOICES.PAPER} onClick={play}>
          Paper
        </button>
        <button value={CHOICES.ROCK} onClick={play}>
          Rock
        </button>
        <button value={CHOICES.SCISSORS} onClick={play}>
          Scissors
        </button>
      </div>
    </div>
  );
}

export default App;
