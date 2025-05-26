import { handleClick } from './handlers.js'

export function setupCalculatorLogic (display, grid) {
  grid.querySelectorAll('.btn').forEach(btn => {
    btn.onclick = () => handleClick(btn.textContent, display)
  })
}
