import { combineReducers } from 'redux';
import sessionsReducer  from './sessions_reducer';
// import uiReducer from './ui_reducer';


const rootReducer = combineReducers({
  session: sessionsReducer
});

export default rootReducer;
