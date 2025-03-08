import { player1, player2 } from './players';

export const state = {
	count: 0,
	winnerStatus: {
		winner: null,
		isWin: false,
	},
	matrix: [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	],
	winningCombinations: [
		// Poziome
		['00', '01', '02'],
		['10', '11', '12'],
		['20', '21', '22'],
		// Pionowe
		['00', '10', '20'],
		['01', '11', '21'],
		['02', '12', '22'],
		// Przekątne
		['00', '11', '22'],
		['02', '11', '20'],
	],
};

export const stateCopy = JSON.parse(JSON.stringify(state));

export const resetState = () => {
	state.count = 0;
	state.winnerStatus.isWin = false;
	state.winnerStatus.winner = null;
	state.matrix = stateCopy.matrix;

	player1.length = 0;
	player2.length = 0;
};
