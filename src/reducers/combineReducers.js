import { combineReducers } from 'redux';
import BaseNavigation from '../config/router';
import main from './main';

export default combineReducers({
  	navigation: (state, action) => BaseNavigation.router.getStateForAction(action, state),
  	state: (state = {}) => state,
  	main,
});
