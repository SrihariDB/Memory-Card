import { useState } from 'react';
import Card from './Components/Card';
import GameHeader from './Components/GameHeader';
import Modal from './Components/Modal';

const cardValues = [
  '🍎',
  '🍌',
  '🍇',
  '🍊',
  '🍓',
  '🥝',
  '🍑',
  '🍒',
  '🍎',
  '🍌',
  '🍇',
  '🍊',
  '🍓',
  '🥝',
  '🍑',
  '🍒',
];

const App = () => {
  function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const initialState = () => {
    return shuffleCards(cardValues).map((value, index) => ({
      value,
      id: index,
      isMatched: false,
      isFlipped: true,
    }));
  };

  const [enable, setEnable] = useState(false);
  const [cards, setCard] = useState(initialState);
  const [flippedCard, setFlipCard] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);

  const resetAll = () => {
    setCard(initialState());
    setFlipCard([]);
    setMatched([]);
    setScore(0);
    setMoves(0);
  };


  const enableEvent = () => {
    setTimeout(() => setEnable((prev) => !prev), 500);
  };

  const handleCardClick = (card) => {
    if (!card.isFlipped || card.isMatched || enable) {
      return;
    }

    console.log(flippedCard);
    const updateData = cards.map((data) =>
      data.id == card.id
        ? {
            ...data,
            isFlipped: false,
          }
        : data
    );

    setCard(updateData);
    setFlipCard([...flippedCard, card.id]);

    if (flippedCard.length == 1) {
      const firstCard = cards[flippedCard[0]];
      setEnable((prev) => !prev);
      if (firstCard.value == card.value) {
        setMatched([...matched, card.id, firstCard.id]);
        setScore((prev) => prev + 1);

        setCard((cards) =>
          cards.map((currCard) =>
            currCard.id === firstCard.id ||
            currCard.id === card.id
              ? { ...currCard, isMatched: true }
              : currCard
          )
        );

        enableEvent();
      } else {
        setTimeout(() => {
          const newState = cards.map((currCard) =>
            flippedCard.includes(currCard.id) ||
            currCard.id === card.id
              ? { ...currCard, isFlipped: true }
              : currCard
          );
          setCard(newState);
          enableEvent();
        }, 1000);
      }

      setFlipCard([]);
    }

    setMoves((prev) => prev + 1);
  };

  return (
    <div>
      <GameHeader
        score={score}
        moves={moves}
        resetAll={resetAll}
      />
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            handleCardClick={handleCardClick}
            matched={matched}
          />
        ))}
      </div>

      {score === 8 && <Modal playAgain={resetAll} />}
    </div>
  );
};

export default App;
