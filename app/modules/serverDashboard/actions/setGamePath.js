function setGamePath({services, output}) {
  services.electron.get('setGamePath')
  .then((response) => {
    output.success(response);
  })
  .catch((error) => {
    output.error(error);
  });
}

setGamePath.async = true;

export default setGamePath;
