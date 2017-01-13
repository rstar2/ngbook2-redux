import { User } from "../../model";

/**
 * This file describes the state concerning Users, how to modify it through
 * the reducer, and the selectors.
 */
export interface UserState {
  currentUser: User;
}

export const initialState: UserState = {
  currentUser: null
};
