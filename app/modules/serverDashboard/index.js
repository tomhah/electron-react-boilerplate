import opened from './signals/opened';
import selectGameFolderClicked from './signals/selectGameFolderClicked';
import getGameDataClicked from './signals/getGameDataClicked';
import refreshRateChanged from './signals/refreshRateChanged';
import changeRefreshRateClicked from './signals/changeRefreshRateClicked';

export default () => {
  return (module) => {
    module.addState({
      serverIP: '',
      gamePath: null,
      refreshRate: 18
    });

    module.addSignals({
      opened,
      selectGameFolderClicked,
      getGameDataClicked,
      refreshRateChanged,
      changeRefreshRateClicked
    });
  };
};
