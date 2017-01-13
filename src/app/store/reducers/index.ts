import { Reducer, combineReducers } from 'redux';

import { UsersReducer } from './user-reducer';
import { ThreadsReducer } from './threads-reducer';

import { AppState } from "../state";

export * from './user-reducer';
export * from './threads-reducer';

const appReducer: Reducer<AppState> = combineReducers<AppState>({
  users: UsersReducer,
  threads: ThreadsReducer
});

export default appReducer;
