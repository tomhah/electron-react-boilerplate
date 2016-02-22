function getServerIP({services, output}) {
  services.electron.get('getServerIP')
  .then((response) => {
    output.success(response);
  })
  .catch((error) => {
    output.error(error);
  });
}

getServerIP.async = true;

export default getServerIP;
