import Display from './Display.js'
import Button from './Button.js'

export default function Calculator () {
  const container = document.createElement('div')
  container.style.width = '300px'
  container.style.border = '5px solid #5E3023'
  container.style.borderRadius = '10px'
  container.style.backgroundColor = '#DAB49D'
  container.style.padding = '10px'
  container.style.boxShadow = '0 0 20px #895737'

  const display = Display()
  const buttons = Button(display)

  container.appendChild(display)
  container.appendChild(buttons)

  return container
}
