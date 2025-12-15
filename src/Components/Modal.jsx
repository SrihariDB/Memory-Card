const Modal = ({ playAgain }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="popup-icon">🏆</span>

        <h2 className="popup-title">Victory!</h2>
        <p className="popup-message">
          You matched all the cards perfectly.
        </p>

        <button className="popup-btn" onClick={playAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
