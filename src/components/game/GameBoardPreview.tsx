const cells = Array.from({ length: 225 }, (_, index) => {
  const row = Math.floor(index / 15);
  const col = index % 15;
  const inHome = (row < 6 && col < 6) || (row < 6 && col > 8) || (row > 8 && col < 6) || (row > 8 && col > 8);
  const safe = [[6,1],[2,6],[1,8],[6,13],[8,12],[12,8],[13,6],[8,2]];
  const isSafe = safe.some(([r,c]) => r === row && c === col);
  const isCenter = row >= 6 && row <= 8 && col >= 6 && col <= 8;
  let color = "";
  if (row < 6 && col < 6) color = "red";
  if (row < 6 && col > 8) color = "green";
  if (row > 8 && col < 6) color = "blue";
  if (row > 8 && col > 8) color = "yellow";
  const path = !inHome && !isCenter && (row === 6 || row === 7 || row === 8 || col === 6 || col === 7 || col === 8);
  const lane = (row === 7 && col >= 1 && col <= 5) ? "blue" : (col === 7 && row >= 1 && row <= 5) ? "green" : (row === 7 && col >= 9 && col <= 13) ? "yellow" : (col === 7 && row >= 9 && row <= 13) ? "red" : "";
  return { row, col, inHome, color, path, isSafe, isCenter, lane };
});

export function GameBoardPreview() {
  return <div className="board-frame"><div className="ludo-board" role="img" aria-label="Illustration of a four-colour Ludo board">
    {cells.map((cell, i) => <div key={i} className={["board-cell", cell.inHome ? `home-${cell.color}` : "", cell.path ? "path-cell" : "", cell.isSafe ? "safe-cell" : "", cell.isCenter ? "center-cell" : "", cell.lane ? `lane-${cell.lane}` : ""].filter(Boolean).join(" ")}>
      {cell.inHome && ((cell.row === 1 || cell.row === 4) && (cell.col === 1 || cell.col === 4)) && <span className={`home-token ${cell.color}`} />}
      {cell.isSafe && <span className="safe-star">★</span>}
      {cell.isCenter && cell.row === 7 && cell.col === 7 && <span className="center-star">✦</span>}
    </div>)}
    <div className="board-center"><span>✦</span></div>
  </div></div>;
}
