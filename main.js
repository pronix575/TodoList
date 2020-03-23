const { app, BrowserWindow } = require('electron'),
      path = require('path'),
      url = require('url');


const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 640,
    minWidth: 950,
    minHeight: 380,
    icon: __dirname + '/media/imgs/logo.png'
  })

  win.removeMenu();
  win.loadFile('index.html');
  //win.webContents.openDevTools();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
