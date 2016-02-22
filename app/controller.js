import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';

const model = Model({
  user: {
    isLoggedIn: false,
    isLoading: false,
    isAdmin: false
  }
});

export default Controller(model);
