// 引用winreg模块
var Registry = require('winreg')
var regKey = new Registry({ // new operator is optional
  hive: Registry.HKCU, // open registry hive HKEY_CURRENT_USER
  key: '\\Software\\Microsoft\\Windows\\CurrentVersion\\Run' // key containing autostart programs
})
var Start = {
  // 设置自动启动
  enableAutoStart: function (name, file, callback) {
    regKey.set(name, Registry.REG_SZ, file, callback)
  },
  // 取消自动启动
  disableAutoStart: function (name, callback) {
    regKey.remove(name, callback)
  },
  // 获取是否自动启动
  getAutoStartValue: function (name, callback) {
    let resultSuccess = 200
    let resultError = 400
    regKey.get(name, function (error, result) {
      if (result) {
        callback(resultSuccess, result.value)
      } else {
        callback(resultError, error)
      }
    })
  }
}

// 导出
module.exports = Start
