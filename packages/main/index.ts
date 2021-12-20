import { app, BrowserWindow } from 'electron'
import { join } from 'path'

app.on('ready', () => {
  const window = new BrowserWindow({
    width: 1200,
    height: 900
  })
  // window.loadURL('https://localhost:3000')
  window.loadFile(join(__dirname, '../render/index.html'))
})
