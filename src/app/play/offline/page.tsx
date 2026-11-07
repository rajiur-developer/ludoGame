"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/shared/PageHeader";
import { LudoBoard } from "@/components/game/LudoBoard";
import { createGame, currentPlayer, getMovableTokens, moveToken, rollDice } from "@/lib/ludo/engine";
import { Dices, RotateCcw, Trophy, Users, ArrowLeft, Plus, Minus } from "lucide-react";

export default function OfflineGamePage() {
  const [playerCount, setPlayerCount] = useState(2);
  const [names, setNames] = useState(["Player 1", "Player 2", "Player 3", "Player 4"]);
  const [game, setGame] = useState(() => createGame(2));
  const [rolling, setRolling] = useState(false);
  const active = currentPlayer(game);
  const movable = useMemo(() => getMovableTokens(game), [game]);
  const startNewGame = () => setGame(createGame(playerCount, names.slice(0, playerCount)));
  const roll = () => {
    if (rolling || game.dice !== null || game.winner) return;
    setRolling(true);
    window.setTimeout(() => {
      setGame((previous) => rollDice(previous));
      setRolling(false);
    }, 450);
  };
  const selectToken = (index: number) => {
    const result = moveToken(game, index);
    if (result.state !== game) setGame(result.state);
  };
  const passTurn = () => setGame((previous) => ({ ...previous, dice: null, consecutiveSixes: 0, currentPlayer: (previous.currentPlayer + 1) % previous.players.length, message: "No legal move. Turn passed to the next player." }));
  const tokenCount = (tokens: number[]) => tokens.filter((position) => position === 57).length;

  return <AppShell><div className="inner-page game-page">
    <PageHeader eyebrow="LOCAL MATCH" title="Offline Ludo" description="Play classic-style Ludo with 2–4 players on one device. No internet connection required."/>
    <div className="offline-setup">
      <div><span className="section-kicker">MATCH SETUP</span><strong>Players</strong></div>
      <div className="player-count-control"><button aria-label="Decrease players" onClick={() => setPlayerCount((n) => Math.max(2, n - 1))} disabled={playerCount === 2}><Minus size={15}/></button><b>{playerCount}</b><button aria-label="Increase players" onClick={() => setPlayerCount((n) => Math.min(4, n + 1))} disabled={playerCount === 4}><Plus size={15}/></button></div>
      <div className="setup-names">{names.slice(0, playerCount).map((name, index) => <input key={index} aria-label={`Player ${index + 1} name`} value={name} maxLength={16} onChange={(event) => setNames((previous) => previous.map((item, i) => i === index ? event.target.value : item))}/>)}</div>
      <button className="setup-start" onClick={startNewGame}>Start new match</button>
    </div>
    <div className="game-layout">
      <section className="game-board-panel">
        <div className="game-board-top"><span className="mini-badge"><span/> LOCAL MATCH</span><span className="board-player-count"><Users size={14}/> {game.players.length} players</span></div>
        <LudoBoard players={game.players} movableTokens={movable} activePlayerId={active.id} onMove={selectToken}/>
        <div className="game-legend">{game.players.map((player) => <span key={player.id}><i className={`legend-dot ${player.color}`}/>{player.name}</span>)}</div>
      </section>
      <aside className="game-control-panel">
        <span className="section-kicker">MATCH CONTROL</span>
        <h2>{game.winner ? "Match complete" : `${active.name}'s turn`}</h2>
        <div className="turn-indicator"><span className={`turn-avatar ${active.color}`}>{active.name.slice(0,1).toUpperCase()}</span><div><strong>{active.name}</strong><small>{active.color.toUpperCase()} PLAYER</small></div><span className="turn-pill">ACTIVE</span></div>
        <div className={`dice-display ${rolling ? "dice-rolling" : ""}`}><span>{game.dice ?? "?"}</span><small>{game.dice ? "DICE RESULT" : "ROLL TO PLAY"}</small></div>
        <button className="roll-button" onClick={roll} disabled={rolling || game.dice !== null || !!game.winner}><Dices size={19}/>{rolling ? "Rolling…" : "Roll the dice"}</button>
        {game.dice !== null && movable.length === 0 && <button className="move-button" onClick={passTurn}>No move — pass turn</button>}
        <p className="game-message" role="status">{game.winner ? <><Trophy size={16}/> {game.winner} wins this match!</> : game.message}</p>
        <div className="player-score-list">{game.players.map((player) => <div className="player-score" key={player.id}><span className={`legend-dot ${player.color}`}/><span>{player.name}</span><strong>{tokenCount(player.tokens)}/4 home</strong></div>)}</div>
        <button className="reset-button" onClick={startNewGame}><RotateCcw size={15}/> Restart match</button>
        <Link href="/play" className="back-to-modes"><ArrowLeft size={15}/> Change game mode</Link>
      </aside>
    </div>
    <div className="game-rules-note"><strong>How to play</strong><span>Roll a 6 to bring a token out. Select a highlighted token to move. Land on an opponent to send their token home. Safe squares protect tokens. Reach the finish with an exact roll. Three consecutive sixes pass your turn.</span></div>
  </div></AppShell>;
}
