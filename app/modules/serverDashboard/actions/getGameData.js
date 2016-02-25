function getGameData({services}) {
  services.electron.get('getGameData')
  .then((response) => {
    console.log('gameData', response);
  })
  .catch((error) => {
    console.log('error', error);
  });
}

export default getGameData;
