const GameHeader = ({ score, moves, resetAll }) => {
  return (
    <header>
      <h1>🎮Memory Card</h1>
      <div className="game-stats">
        <div className="game-score">
          <span className="stats-label">Score</span>{' '}
          <span className="stats-score">{score}</span>
        </div>
        <div className="game-move">
          <span className="stats-label">Moves</span>{' '}
          <span className="stats-score">{moves}</span>
        </div>
      </div>
      <button onClick={resetAll} className="btn">
        👾New Game
      </button>
    </header>
  );
};

export default GameHeader;
