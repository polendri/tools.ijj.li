export function loadSettings() {
  var settingsStr = localStorage.getItem('settings');

  if (settingsStr) {
    return JSON.parse(settingsStr);
  } else {
    return {
      darkTheme: false,
    }
  }
}

export function saveSettings(settings) {
  localStorage.setItem('settings', JSON.stringify(settings));
}
