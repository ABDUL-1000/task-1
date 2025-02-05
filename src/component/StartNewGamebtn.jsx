import React from "react";

const NewGameButton = ({ startNewGame }) => {
  return (
    <button
      data-testid="newGameButton"
      className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      onClick={startNewGame}
    >
      New Game
    </button>
  );
};

export default NewGameButton;
