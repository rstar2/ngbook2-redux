import { createSelector } from 'reselect';
import { Action } from "redux";

import { User } from "../../model";
import { UsersState, initialState } from "../state/users-state";
import { UsersActions } from "../actions";

export const UsersReducer =
  function (state: UsersState = initialState, action: Action): UsersState {
    switch (action.type) {
      case UsersActions.SET_CURRENT_USER:
        const user: User = (<UsersActions.SetCurrentUserAction>action).user;
        return {
          currentUser: user
        };
      default:
        return state;
    }
  };

export const getUsersState = (state): UsersState => state.users;

export const getCurrentUser = createSelector(
  getUsersState,
  (state: UsersState) => state.currentUser);
