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

import '../renderer/store'

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
	let BrowserWindowOption = {
		webPreferences:{
			nodeIntegration:true
		}
	}
	let winURL = process.env.NODE_ENV === 'development' ?
		`http://localhost:9080` :
		`file://${__dirname}/index.html`
	if (process.env.NODE_ENV === 'development') {
		BrowserWindowOption['width'] = 1366
		BrowserWindowOption['height'] = 768
		BrowserWindowOption['title'] = '上略互动触摸屏系统'
		BrowserWindowOption['useContentSize'] = true
	} else {
		BrowserWindowOption['resizable'] = false
		BrowserWindowOption['movable'] = false
		BrowserWindowOption['frame'] = false
		BrowserWindowOption['kiosk'] = true
		// BrowserWindowOption['alwaysOnTop'] = true
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
import {
	autoUpdater
} from 'electron-updater'
let updateEvent
const ipcAppUpdate=function(){
	let message = {
		error: '检查更新出错',
		checking: '正在检查更新……',
		updateAva: '检测到新版本，正在下载……',
		updateNotAva: '当前是最新版本，不用更新',
	};
	
	const uploadUrl = pkg.build.publish[0]['url']; // 下载地址，不加后面的**.exe
	autoUpdater.setFeedURL(uploadUrl);
	
	//当更新发生错误的时候触发
	autoUpdater.on('error', function(error) {
		console.log('更新错误：'+ message.error);
		updateEvent.sender.send('updateMessage', {
			msg:error
		})
	});
	
	//当开始检查更新的时候触发
	autoUpdater.on('checking-for-update', function() {
		console.log('检查更新：'+ message.checking);
		updateEvent.sender.send('updateMessage', {
			msg:message.checking
		})
	});
	
	//当发现一个可用更新的时候触发，更新包下载会自动开始。
	autoUpdater.on('update-available', function(info) {
		console.log('发现更新：'+ message.updateAva);
		updateEvent.sender.send('updateMessage', {
			info:info,
			msg:message.updateAva
		})
	});
	
	//当没有可用更新的时候触发
	autoUpdater.on('update-not-available', function(info) {
		console.log('没有更新:'+message.updateNotAva);
		updateEvent.sender.send('updateMessage', {
			info:info,
			msg:message.updateNotAva
		})
	});
	
	// 更新下载进度事件
	autoUpdater.on('download-progress', function(progressObj) {
		updateEvent.sender.send('downloadProgress', progressObj)
	})
	
	//更新下载完成
	autoUpdater.on('update-downloaded', function(event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) {
		ipcMain.on('isUpdateNow', (e, arg) => {
			console.log(arguments);
			console.log("开始更新");
			//some code here to handle event
			autoUpdater.quitAndInstall();
		});
	
		updateEvent.sender.send('isUpdateNow')
	});
	
	ipcMain.on('checkUpdate',function(event, arg){
		updateEvent=event
		console.log("更新检查");
		//执行自动更新检查
		autoUpdater.checkForUpdates();
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
	createShortcut()
	ipcAutoStart()
	ipcAppUpdate()
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


// import {
// 	autoUpdater
// } from 'electron-updater'

// autoUpdater.on('update-downloaded', () => {
// 	autoUpdater.quitAndInstall()
// })

// app.on('ready', () => {
// 	if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
// })

