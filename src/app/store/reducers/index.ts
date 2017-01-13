import { Reducer, combineReducers } from 'redux';

import { UsersReducer } from './users-reducer';
import { ThreadsReducer } from './threads-reducer';

import { AppState } from "../state";

export * from './users-reducer';
export * from './threads-reducer';

const appReducer: Reducer<AppState> = combineReducers<AppState>({
  users: UsersReducer,
  threads: ThreadsReducer
});

export default appReducer;
