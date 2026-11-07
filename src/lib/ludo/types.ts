export type PlayerColor = "red" | "green" | "yellow" | "blue";
export type TokenProgress = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57;
export interface LudoPlayer { id: string; name: string; color: PlayerColor; tokens: TokenProgress[]; }
export interface LudoState { players: LudoPlayer[]; currentPlayer: number; dice: number | null; winner: string | null; message: string; consecutiveSixes: number; }
export interface MoveResult { state: LudoState; captured: number; finished: boolean; }
