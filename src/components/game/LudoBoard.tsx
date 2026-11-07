"use client";
import type { LudoPlayer } from "@/lib/ludo/types";
import { START_OFFSETS, SAFE_SQUARES } from "@/lib/ludo/constants";

const track = Array.from({ length: 52 }, (_, index) => index);
export function LudoBoard({ players, movableTokens, activePlayerId, onMove }: { players: LudoPlayer[]; movableTokens: number[]; activePlayerId: string; onMove: (index: number) => void }) {
  return <div className="classic-board" aria-label="Ludo board">
    <div className="classic-homes">
      {(["red", "green", "blue", "yellow"] as const).map((color) => {
        const player = players.find((item) => item.color === color);
        return <section className={`classic-home ${color}`} key={color}>
          <strong>{player?.name ?? "Waiting"}</strong>
          <div className="classic-yard">{[0,1,2,3].map((token) => {
            const isMovable = !!player && player.id === activePlayerId && movableTokens.includes(token);
            const position = player?.tokens[token] ?? -1;
            return <button key={token} type="button" aria-label={`${player?.name ?? color} token ${token + 1}`} className={`yard-token ${color} ${isMovable && position === -1 ? "token-selectable" : ""}`} onClick={() => isMovable && onMove(token)} disabled={!isMovable || position !== -1}>{position === -1 ? token + 1 : "•"}</button>;
          })}</div>
        </section>;
      })}
    </div>
    <div className="classic-track">{track.map((cell) => {
      const occupants = players.flatMap((player) => player.tokens.map((progress, tokenIndex) => ({ player, tokenIndex, progress, absolute: progress >= 0 && progress < 52 ? (START_OFFSETS[player.color] + progress) % 52 : -1 }))).filter((token) => token.absolute === cell);
      return <div key={cell} className={`classic-cell ${SAFE_SQUARES.has(cell) ? "safe" : ""}`}><span>{SAFE_SQUARES.has(cell) ? "★" : ""}</span>{occupants.map((token) => <button key={token.player.id + token.tokenIndex} className={`board-token ${token.player.color} ${token.player.id === activePlayerId && movableTokens.includes(token.tokenIndex) ? "token-selectable" : ""}`} onClick={() => token.player.id === activePlayerId && movableTokens.includes(token.tokenIndex) && onMove(token.tokenIndex)} aria-label={`Move ${token.player.name} token ${token.tokenIndex + 1}`} />)}</div>;
    })}</div>
    <div className="classic-center"><span>★</span><b>LUDO</b><small>ARENA</small></div>
    <p className="board-hint">Select a highlighted token to move it</p>
  </div>;
}
