import { ThreadsState } from "./threads-state";
import { UsersState } from "./users-state";

export interface AppState {
  users: UsersState;
  threads: ThreadsState;
}
