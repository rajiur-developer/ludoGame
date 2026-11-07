import type { PlayerColor } from "./types";
export const PLAYER_COLORS: PlayerColor[] = ["red", "green", "yellow", "blue"];
export const START_OFFSETS: Record<PlayerColor, number> = { red: 0, green: 13, yellow: 26, blue: 39 };
export const SAFE_SQUARES = new Set([0, 8, 13, 21, 26, 34, 39, 47]);
export const COLOR_LABELS: Record<PlayerColor, string> = { red: "Red", green: "Green", yellow: "Yellow", blue: "Blue" };
export const HOME_LANES: Record<PlayerColor, number[]> = {
  red: [1, 2, 3, 4, 5, 6],
  green: [1, 2, 3, 4, 5, 6],
  yellow: [1, 2, 3, 4, 5, 6],
  blue: [1, 2, 3, 4, 5, 6],
};
