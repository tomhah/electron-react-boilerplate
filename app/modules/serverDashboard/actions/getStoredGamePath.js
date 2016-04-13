function getStoredGamePath({services, output}) {
  services.electron.get('getStoredGamePath')
  .then((response) => {
    output.success({gamePath: response});
  })
  .catch(() => {
    output.error();
  });
}

getStoredGamePath.async = true;

export default getStoredGamePath;
