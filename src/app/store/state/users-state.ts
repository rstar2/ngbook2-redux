import { User } from "../../model/model";

/**
 * This file describes the state concerning Users, how to modify it through
 * the reducer, and the selectors.
 */
export interface UsersState {
  currentUser: User;
}

export const initialState: UsersState = {
  currentUser: null
};
