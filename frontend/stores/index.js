import UserStore, { USER_STORE } from './UserStore';
import UiStore, { UI_STORE } from './UiStore';
import { autorun, toJS } from 'mobx';

const stores = {
  user: new UserStore(),
  ui: new UiStore(),
};

// Persist stores to localStorage
autorun(() => {
  localStorage.setItem(USER_STORE, stores.user.asJson);
  localStorage.setItem(UI_STORE, stores.ui.asJson);
});

export default stores;