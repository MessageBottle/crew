import { combineReducers } from 'redux';

import crewReducer from './crew';
import userReducer from './user';

const rootReducer = combineReducers({ crew: crewReducer, user: userReducer });

export default rootReducer;
