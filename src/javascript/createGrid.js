import { clickHandler } from "./clickHandler";
import { renderIcons } from "./icons";

export function createGrid(element) {
  const container = document.createElement("section");

  container.classList.add("container");
  for (let i = 1; i <= 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    container.appendChild(cell);
    cell.addEventListener('click', clickHandler);
  }
  
  element.appendChild(container);
  renderIcons();
}

// Komponent prezentacyjny
