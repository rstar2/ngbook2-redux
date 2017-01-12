import { Reducer, combineReducers } from 'redux';

import { UsersState } from "../state/users-state";
import { UsersReducer } from './users-reducer';

import { ThreadsState } from "../state/threads-state";
import { ThreadsReducer } from './threads-reducer';

export * from './users-reducer';
export * from './threads-reducer';

export interface AppState {
  users: UsersState;
  threads: ThreadsState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  users: UsersReducer,
  threads: ThreadsReducer
});

export default rootReducer;
