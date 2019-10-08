/*eslint-disable*/
'use strict'

import {
	app,
	Menu,
	Tray,
	shell,
	ipcMain,
	BrowserWindow,
	globalShortcut
} from 'electron'

import pkg from '../../package.json'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
	global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

/**
 * 创建浏览器对象
 */
let mainWindow
const createWindow = function() {
	let BrowserWindowOption = {}
	let winURL = process.env.NODE_ENV === 'development' ?
		`http://localhost:9080` :
		`file://${__dirname}/index.html`
	if (process.env.NODE_ENV === 'development') {
		BrowserWindowOption = {
			width: 1366,
			height: 768,
			title: '上略互动触摸屏系统',
			useContentSize: true,
		}
	} else {
		BrowserWindowOption['resizable'] = false
		BrowserWindowOption['movable'] = false
		BrowserWindowOption['frame'] = false
		BrowserWindowOption['kiosk'] = true
		BrowserWindowOption['alwaysOnTop'] = true
	}

	mainWindow = new BrowserWindow(BrowserWindowOption)

	mainWindow.loadURL(winURL)
	mainWindow.setMenu(null)

	mainWindow.once('ready-to-show', () => {
		mainWindow.show()
	})

	mainWindow.on('closed', () => {
		mainWindow = null
		app.quit()
	})
}
/**
 * 创建系统托盘
 */
let mainTray
const createTray = function() {
	mainTray = new Tray(`${__static}/icons/icon.ico`)
	const contextMenu = Menu.buildFromTemplate([{
			label: '关于',
			click: function() {
				shell.openExternal('http://www.sunlue.com')
			}
		},
		{
			type: 'separator'
		},
		{
			label: '退出',
			click: function() {
				app.quit()
			}
		}
	])
	mainTray.setToolTip('上略互动触摸屏系统')
	mainTray.setContextMenu(contextMenu)
}

/**
 * 设置开机自启动
 */
const AppName = pkg.name
const Start = require('./start.js')
const ipcAutoStart = function() {
	ipcMain.on('checkAutoStart', function(event, arg) {
		Start.getAutoStartValue(AppName, (code, result) => {
			console.log('checkAutoStartCode:' + code)
			if (code === 400) {
				event.sender.send('getAutoStartValue', false)
			} else {
				event.sender.send('getAutoStartValue', true)
			}
		})
	})

	ipcMain.on('enableAutoStart', () => {
		Start.enableAutoStart(AppName, process.execPath, (e) => {
			console.log('enableAutoStart ' + (e == null ? 'success' : 'error'))
		})
	})

	ipcMain.on('disableAutoStart', () => {
		Start.disableAutoStart(AppName, (e) => {
			console.log('disableAutoStart ' + (e == null ? 'success' : 'error'))
		})
	})
}
/**
 * 快捷键注册
 */
const createShortcut = function() {
	const retESC = globalShortcut.register('ESC', () => {
		console.log('ESC is pressed')
		mainWindow.webContents.send('listen', 'ESC')
	})
	if (!retESC) {
		console.log('retESC registration failed')
	}
	const retF9 = globalShortcut.register('F9', () => {
		console.log('F9 is pressed')
		mainWindow.webContents.send('listen', 'F9')
	})
	if (!retF9) {
		console.log('F9 registration failed')
	}
	const retF10 = globalShortcut.register('F10', () => {
		console.log('F10 is pressed')
		mainWindow.webContents.send('listen', 'F10')
	})
	if (!retF10) {
		console.log('F10 registration failed')
	}
}

app.on('ready', () => {
	createWindow()
	createTray()
	ipcAutoStart()
	createShortcut()
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('will-quit', () => {
	globalShortcut.unregisterAll()
})

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow()
	}
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
