import { app, BrowserWindow } from 'electron'

app.on('ready', function(){
    var win = new BrowserWindow({ width: 1200, height:  900})
    win.loadURL('https://localhost:3000')
})