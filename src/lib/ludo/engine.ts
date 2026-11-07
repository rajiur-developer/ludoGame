import { SAFE_SQUARES, START_OFFSETS } from "./constants";
import type { LudoPlayer, LudoState, MoveResult, PlayerColor, TokenProgress } from "./types";

export function createGame(playerCount: number, names: string[] = []): LudoState {
  const colors: PlayerColor[] = playerCount === 2 ? ["red", "yellow"] : playerCount === 3 ? ["red", "green", "yellow"] : ["red", "green", "yellow", "blue"];
  const players: LudoPlayer[] = colors.map((color, index) => ({
    id: color,
    color,
    name: names[index]?.trim() || `Player ${index + 1}`,
    tokens: [-1, -1, -1, -1] as TokenProgress[],
  }));
  return { players, currentPlayer: 0, dice: null, winner: null, message: "Roll the dice to start. You need a 6 to bring a token out.", consecutiveSixes: 0 };
}

export function rollDice(state: LudoState, value = Math.floor(Math.random() * 6) + 1): LudoState {
  if (state.winner || state.dice !== null) return state;
  if (value < 1 || value > 6) throw new Error("Dice value must be between 1 and 6.");
  const sixes = value === 6 ? state.consecutiveSixes + 1 : 0;
  if (sixes === 3) {
    return { ...state, dice: null, consecutiveSixes: 0, currentPlayer: (state.currentPlayer + 1) % state.players.length, message: "Three sixes in a row. Turn passed to the next player." };
  }
  const player = state.players[state.currentPlayer];
  const movable = player.tokens.some((position) => position === -1 ? value === 6 : position + value <= 57);
  return { ...state, dice: value, consecutiveSixes: sixes, message: movable ? (value === 6 ? "Great! Choose a token to enter or move." : "Choose one of your highlighted tokens.") : "No legal move. Your turn will pass." };
}

export function getMovableTokens(state: LudoState): number[] {
  if (state.dice === null || state.winner) return [];
  return state.players[state.currentPlayer].tokens.flatMap((position, index) => {
    if (position === -1 && state.dice === 6) return [index];
    if (position >= 0 && position + state.dice! <= 57) return [index];
    return [];
  });
}

export function moveToken(state: LudoState, tokenIndex: number): MoveResult {
  const movable = getMovableTokens(state);
  if (!movable.includes(tokenIndex) || state.dice === null) return { state, captured: 0, finished: false };
  const players = state.players.map((player) => ({ ...player, tokens: [...player.tokens] }));
  const active = players[state.currentPlayer];
  const oldPosition = active.tokens[tokenIndex];
  const nextPosition = (oldPosition === -1 ? 0 : oldPosition + state.dice) as TokenProgress;
  active.tokens[tokenIndex] = nextPosition;
  const absolute = (START_OFFSETS[active.color] + nextPosition) % 52;
  let captured = 0;
  if (nextPosition < 52 && !SAFE_SQUARES.has(absolute)) {
    players.forEach((opponent, playerIndex) => {
      if (playerIndex === state.currentPlayer) return;
      opponent.tokens = opponent.tokens.map((position) => {
        if (position >= 0 && position < 52 && (START_OFFSETS[opponent.color] + position) % 52 === absolute) {
          captured++;
          return -1;
        }
        return position;
      }) as TokenProgress[];
    });
  }
  const finished = active.tokens.every((position) => position === 57);
  const winner = finished ? active.name : null;
  const extraTurn = state.dice === 6 || captured > 0;
  const nextPlayer = extraTurn ? state.currentPlayer : (state.currentPlayer + 1) % players.length;
  const message = winner ? `${active.name} wins the match! 🎉` : captured ? `Captured ${captured} token(s)! Roll again.` : extraTurn ? "Six! You get another turn." : "Move completed. Next player's turn.";
  return { state: { ...state, players, currentPlayer: nextPlayer, dice: null, winner, consecutiveSixes: winner ? 0 : state.consecutiveSixes, message }, captured, finished };
}

export function currentPlayer(state: LudoState): LudoPlayer { return state.players[state.currentPlayer]; }
