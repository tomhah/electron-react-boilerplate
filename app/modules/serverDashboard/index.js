import opened from './signals/opened';
import selectGameFolderClicked from './signals/selectGameFolderClicked';

export default () => {
  return (module) => {
    module.addState({
      serverIP: '',
      gamePath: null
    });

    module.addSignals({
      opened,
      selectGameFolderClicked
    });
  };
};
