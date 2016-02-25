function setRefreshRate({services, output, state}) {
  services.electron.get('setRefreshRate', {refreshRate: state.get('serverDashboard.refreshRate')})
  .then((response) => {
    output.success(response);
  })
  .catch((error) => {
    output.error(error);
  });
}

setRefreshRate.async = true;

export default setRefreshRate;
