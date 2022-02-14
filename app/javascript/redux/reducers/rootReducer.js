import { combineReducers } from 'redux'
import greetingsReducer from './greetingReducer';

const rootReducer = combineReducers({
  greetings: greetingsReducer
});

export default rootReducer;