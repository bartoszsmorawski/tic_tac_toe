import { state } from "./state";
import { getItem, setItem } from "./localStorage";

export function checkWin(playerMoves, player) {
  const status = state.winningCombinations.some((combination) => {
    return combination.every((position) => playerMoves.includes(position));
  });

  if (status === false) return;

  const winnerHeadline = document.getElementById("player");
  const winTemplate = document.getElementById("win");

  state.winnerStatus.isWin = true;
  state.winnerStatus.winner = player;

  // Ta część kodu pobiera wynik z localStorage i zwiększa go o 1.
  const player1Wins = getItem("player1Wins") || 0;
  const player2Wins = getItem("player2Wins") || 0;

  // Zwiększa wynik gracza o 1 w zależności od tego, kto wygral rundę.
  if (player === "1") {
    setItem("player1Wins", player1Wins + 1);
  } else {
    setItem("player2Wins", player2Wins + 1);
  }

  // Odświeża wynik gry na stronie.

  const winner = getItem(`player${player}`) || `Gracz ${player}`;

  winTemplate.content.querySelector("span").textContent = winner;

  winnerHeadline.outerHTML = winTemplate.innerHTML;

  return state.winnerStatus;
}
