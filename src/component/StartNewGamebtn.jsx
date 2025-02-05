import React from "react";

const NewGameButton = ({ startNewGame, guessCount }) => {
  return (
  <div>
   
      <button 
        onClick={startNewGame} 
        data-testid="newGameButton" 
        className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all"
      >
        Start New Game
       
      </button>
   
  </div>
  );
};

export default NewGameButton;
