const ipcRenderer = require('electron').ipcRenderer;

export default {
  get: (url) => {
    return new Promise((resolve) => {
      ipcRenderer.once(url, (event, response) => {
        resolve(response);
      });
      ipcRenderer.send(url);
    });
  }
};
