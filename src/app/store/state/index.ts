import { ThreadsState } from "./threads-state";
import { UserState } from "./user-state";

export interface AppState {
  user: UserState;
  threads: ThreadsState;
}
