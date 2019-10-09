
/*eslint-disable*/
import '@/utils/echart'
import weather from './weather'

const method = {
  ridership: function (params) {
    return new Promise((resolve, reject) => {
      ridership.get().then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  sex: function (params) {
    return new Promise((resolve, reject) => {
      sex.get().then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  crowd: function (params) {
    return new Promise((resolve, reject) => {
      crowd.get().then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  age: function (params) {
    return new Promise((resolve, reject) => {
      age.get().then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  source: function (params) {
    return new Promise((resolve, reject) => {
      source.get().then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  weather: {
    air: function (params) {
      return new Promise((resolve, reject) => {
        weather.air(params).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    tem: function (params) {
      return new Promise((resolve, reject) => {
        weather.tem(params).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    humidity: function (params) {
      return new Promise((resolve, reject) => {
        weather.humidity(params).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    weather: function (params) {
      return new Promise((resolve, reject) => {
        weather.weather(params).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    hours: function (params) {
      return new Promise((resolve, reject) => {
        weather.hours(params).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  site: {
    access: function (params) {
      return new Promise((resolve, reject) => {
        site.access(params).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    source: function (params) {
      return new Promise((resolve, reject) => {
        site.source(params).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    sources: function (params) {
      return new Promise((resolve, reject) => {
        site.sourcePie(params).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default method
