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
      setRandomColor(colors[Math.floor(Math.random() * colors.length)]); // Change color after guess
    }, 1000); 
  };

  const startNewGame = () => {
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
    setGameMessage('Guess the correct color');
    setScore(0);
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
      {
        guessCount >= 10 ?(
          <button
          onClick={startNewGame} 
          data-testid="newGameButton" 
          className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all"
          >
             Start New Game
            
          </button>

        ) : (
          <NewGameButton startNewGame={startNewGame} />)
      }
    </div>
  );
};

export default Game;
