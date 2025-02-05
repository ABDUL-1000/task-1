import React, { useEffect, useState } from 'react';
import ColorBox from './ColorBox';
import ColorOption from './ColorOption';
import GameStatus from './GameStatus';
import NewGameButton from './StartNewGamebtn';

const Game = () => {
  const colors = ['red', 'black', 'green', 'orange', 'pink', 'blue'];
  const [randomColor, setRandomColor] = useState(colors[Math.floor(Math.random() * colors.length)]);
  const [gameMessage, setGameMessage] = useState('Guess the correct color');
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hasGuessed, setHasGuessed] = useState(false);
  const [guessCount, setGuessCount] = useState(0);


  const handleGuessed = (selectedColor) => {
    if (guessCount >= 50) return;
    setHasGuessed(true);
    setGuessCount((prevCount) => prevCount + 1);

    if (selectedColor === randomColor) {
      setIsCorrect(true);
      setGameMessage('✅ Correct! 🎉');
      setScore((prevSc) => prevSc + 1);
    } else {
      setIsCorrect(false);
      setGameMessage('❌ Incorrect! Try Again.');
    }

    // Show color box briefly before changing it
    setTimeout(() => {
      setHasGuessed(false);
      if (guessCount + 1 === 50) {
        setGameMessage("🎉 Congratulations! You've finished your round. Click to start a new game!");
      } else {
        setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
      }
    }, 1000);

  };

  const startNewGame = () => {
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
    setGameMessage('Guess the correct color');
    setScore(0);
    setGuessCount(0);
    setIsCorrect(false);
    setHasGuessed(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h2 data-testid="gameInstructions" className="text-2xl font-semibold mb-4">{gameMessage}</h2>
      
     
      {hasGuessed && <ColorBox color={randomColor} hasGuessed={hasGuessed} />}

      <ColorOption colors={colors} hasGuessed={hasGuessed} handlePlay={handleGuessed} />
      <h3 className="text-lg font-semibold mt-2">
        Guess: {guessCount}/50
      </h3>
      <GameStatus score={score} isCorrect={isCorrect} hasGuessed={hasGuessed} />
      <NewGameButton startNewGame={startNewGame} guessCount={guessCount} />
    </div>
  );
};

export default Game;
