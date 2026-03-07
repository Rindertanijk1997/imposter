import { useState } from "react";
import "./App.css";
import { createGameState } from "./gameLogic";

export default function App() {
  const [screen, setScreen] = useState("setup");
  const [nameInput, setNameInput] = useState("");
  const [players, setPlayers] = useState([]);
  const [gameState, setGameState] = useState(null);
  const [overlay, setOverlay] = useState(null);
  const [revealed, setRevealed] = useState({});
  const [showWord, setShowWord] = useState(false);

  const addPlayer = () => {
    const name = nameInput.trim();
    if (!name || players.includes(name)) return;
    setPlayers([...players, name]);
    setNameInput("");
  };

  const removePlayer = (name) => setPlayers(players.filter((p) => p !== name));

  const startGame = () => {
    setGameState(createGameState(players));
    setRevealed({});
    setShowWord(false);
    setScreen("game");
  };

  const openReveal = (name) => {
    if (revealed[name]) return;
    setOverlay({ name, isImposter: gameState.roles[name] === "imposter", word: gameState.word });
  };

  const closeReveal = () => {
    setRevealed((r) => ({ ...r, [overlay.name]: true }));
    setOverlay(null);
  };

  const resetGame = () => {
    setGameState(null);
    setOverlay(null);
    setRevealed({});
    setShowWord(false);
  };

  const allRevealed = gameState?.playerOrder.every((p) => revealed[p]);

  return (
    <div className="app">
      <div className="header">
        <div className="title">IMP<span>O</span>STER</div>
      </div>

      {screen === "setup" && (
        <div className="setup">
          <div className="input-row">
            <input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addPlayer()}
              placeholder="Lägg till spelare..."
              maxLength={20}
            />
            <button className="btn-add" onClick={addPlayer}>+</button>
          </div>

          {players.length > 0 && (
            <div className="players-list">
              {players.map((p, i) => (
                <div key={p} className="player-chip">
                  <div><span className="player-num">{i + 1}.</span>{p}</div>
                  <button onClick={() => removePlayer(p)}>✕</button>
                </div>
              ))}
            </div>
          )}

          <button className="btn-start" disabled={players.length < 3} onClick={startGame}>
            Starta spelet
          </button>
          {players.length < 3 && <p className="min-players">Minst 3 spelare krävs</p>}
        </div>
      )}

      {screen === "game" && gameState && (
        <div className="game">
          <div className="round-info">
            <div className="round-text">
              <strong>Tryck på ditt namn</strong>
              Se ditt ord — en av er är impostorn
            </div>
          </div>

          <div className="players-grid">
            {gameState.playerOrder.map((name) => (
              <button
                key={name}
                className={`player-btn ${revealed[name] ? "revealed" : ""}`}
                onClick={() => openReveal(name)}
              >
                <span className="player-btn-name">{name}</span>
                <span className="player-btn-status">{revealed[name] ? "Sett" : "Tryck"}</span>
              </button>
            ))}
          </div>

          {allRevealed && (
            <div className="all-revealed">
              <p>Alla har sett sina roller — dags att diskutera</p>
              <button className="btn-discuss" onClick={() => setScreen("discuss")}>
                Starta diskussion
              </button>
            </div>
          )}

          <button className="btn-new-round" onClick={() => { resetGame(); setScreen("setup"); }}>
            Tillbaka till spelarlista
          </button>
        </div>
      )}

      {screen === "discuss" && gameState && (
        <div className="game">
          <div className="discuss-hero">
            <h2 className="discuss-title">Diskutera</h2>
            <p className="discuss-text">Vem är impostorn?<br />Den med mest röster förlorar rundan.</p>
          </div>

          <div className="word-box">
            <p className="word-label">Ordet var</p>
            {showWord
              ? <p className="word-value">{gameState.word}</p>
              : <button className="btn-show-word" onClick={() => setShowWord(true)}>Visa ordet</button>
            }
          </div>

          <button className="btn-start" onClick={startGame}>Ny runda</button>
          <button className="btn-new-round" onClick={() => { resetGame(); setScreen("setup"); }}>Byt spelare</button>
        </div>
      )}

      {overlay && (
        <div className="overlay">
          <div className="reveal-card">
            <div className="reveal-name">{overlay.name}</div>
            <div className={`reveal-role ${overlay.isImposter ? "imposter" : "crewmate"}`}>
              {overlay.isImposter ? "Impostor" : "Lagmedlem"}
            </div>
            <div className="reveal-word">
              {overlay.isImposter
                ? <span className="no-word">Du vet inget</span>
                : <>Ordet är: <span>{overlay.word}</span></>
              }
            </div>
            <button className="btn-close" onClick={closeReveal}>Jag har sett — stäng</button>
          </div>
        </div>
      )}
    </div>
  );
}