import { state } from './state';
import { renderIcons } from './icons';
import { updateMatrix } from './updateMatrix'


export function clickHandler(event) {
  if (event.target.innerHTML || state.winnerStatus.isWin) return;

	const idx = parseInt(event.target.dataset.index);
	updateMatrix(idx, event.target.parentNode.parentNode.previousElementSibling);

	state.count++;

	if (state.count === 9 && state.winnerStatus.isWin === false) {
		winnerHeadline.textContent = 'Remis!';
	}

	const iconSrc = state.count % 2 ? 'x' : 'circle';
	const icon = `<i data-lucide="${iconSrc}"></i>`;
	event.target.innerHTML = icon;

	renderIcons();
}
