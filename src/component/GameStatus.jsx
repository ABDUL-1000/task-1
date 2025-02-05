import React from "react";

const GameStatus = ({ score, isCorrect, hasGuessed }) => {
  return (
    <h3 data-testid="score" className="text-xl font-semibold mt-4">
  Score: {score}
  <p
    data-testid="gameStatus"
    className={`text-lg font-semibold transition-all duration-500 ease-in-out ${
      hasGuessed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px]"
    }`}
  >
    {hasGuessed ? (isCorrect ? "🎉 Correct! 🎉" : "❌ Try Again ❌") : ""}
  </p>
</h3>
  );
};

export default GameStatus;
