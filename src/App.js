
import { useState } from 'react';
import './App.css';


const cardImages = [
  {"src": "/img/"},
  {"src": "/img/"},
  {"src": "/img/"},
  {"src": "/img/"},
  {"src": "/img/"},
  {"src": "/img/"},
  {"src": "/img/"},
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random() }))
  
    setCards(shuffledCards)
  }
  console.log(turns, cards);

  return (
    <div className="App">
      <h1 className="bruegel-mem">Bruegel-mem</h1>
      <button onClick={shuffleCards}>Rejouer</button>
      <div className="copy">
        ©2020 <a className="svsem" href="https://svsem.github.io/Memorai/">Svyatoslav Semelov</a> - Aldo Nascimbene @6ème Evans - W.R - <a href="https://github.com/landscapersParis">Vaiiho Nascimbene(lpChamps`)</a>
      </div>
    </div>
  );
}

export default App;
