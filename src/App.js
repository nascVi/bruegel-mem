import './App.css';


const card = [
  {"src": "/img/"},
  {"src": "/img/"},
  {"src": "/img/"},
  {"src": "/img/"},
  {"src": "/img/"},
  {"src": "/img/"},
  {"src": "/img/"},
]

function App() {
  return (
    <div className="App">
      {/* <h1 className="title">
        Jouer avec Bruegel - Le Memory
      </h1>
      <br /><br />
      <h2 className="title">
        <i>
          <p>Cet ouvrage de l'Elève aux Maîtres et l'Artiste, est un hômage au personnes que nous avons perdu</p>
        Que Renaisse un jour l'Italie, coeur de l'art, de culture, de spiritualité, et des jeux de l'enfance, ad vitam aeternum. Amen ✝
        </i>
      </h2>
      <div className="game container-md">

        <img src="../../../images/jouerAvecBruegel.jpg" />
        <div className="cards-container">
          {cards.map(card => <Card onClick={() => onCardClick(card)} key={card.id} {...card} />)}
        </div>
      </div> */}
      <div className="copy">
        ©2020 <a className="svsem" href="https://svsem.github.io/Memorai/">Svyatoslav Semelov</a> - Aldo Nascimbene @6ème Evans - W.R - <a href="https://github.com/landscapersParis">Vaiiho Nascimbene(lpChamps`)</a>
      </div>
    </div>
  );
}

export default App;
