const appDataStore = {
  key: 'appState',

  set(data) {
    localStorage.setItem(appDataStore.key, JSON.stringify(data))
  },

  get() {
    return JSON.parse(localStorage.getItem(appDataStore.key))
  },
}
