import { Reducer, combineReducers } from 'redux';

import { UserReducer } from './user-reducer';
import { ThreadsReducer } from './threads-reducer';

import { AppState } from "../state";

export * from './user-reducer';
export * from './threads-reducer';

const appReducer: Reducer<AppState> = combineReducers<AppState>({
  user: UserReducer,
  threads: ThreadsReducer
});

export default appReducer;
