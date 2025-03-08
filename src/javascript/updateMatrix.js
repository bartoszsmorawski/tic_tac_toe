import { state } from "./state";
import { player1, player2 } from "./players";
import { checkWin } from "./checkWin";
import { getItem } from './localStorage';

export function updateMatrix(cell, playerText) {
    if (state.winnerStatus.isWin) return;

    const row = state.matrix.find(r => r.includes(cell));
    const col = row.findIndex(el => el === cell);

    const coordinates = `${state.matrix.indexOf(row)}${col}`;

    const firstPlayer = getItem('player1') || 'Gracz 1';
    const secondPlayer = getItem('player2') || 'Gracz 2';

    if (!(state.count % 2)) {
        player1.push(coordinates);
        checkWin(player1, '1');
        playerText.textContent = secondPlayer;
    } else {
        player2.push(coordinates);
        checkWin(player2, '2');
        playerText.textContent = firstPlayer;
    }
}