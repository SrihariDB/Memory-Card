const Card = ({ card, handleCardClick, matched }) => {
  return (
    <div
      style={{
        backgroundColor: matched.includes(card.id)
          ? 'rgba(255, 255, 255, 0.3)'
          : 'rgba(255, 255, 255, 0.1)',
        border: matched.includes(card.id)
          ? '1px solid #fff'
          : '',

        pointerEvents: matched.includes(card.id)
          ? 'none'
          : '',
      }}
      className="card"
      onClick={() => {
        handleCardClick(card);
      }}
    >
      {card.isFlipped ? '?' : card.value}
    </div>
  );
};

export default Card;
