import { createSelector } from 'reselect';
import { Action } from "redux";

import { User } from "../../model";
import { UserState, initialState } from "../state/user-state";
import { UserActions } from "../actions";

export const UsersReducer =
  function (state: UserState = initialState, action: Action): UserState {
    switch (action.type) {
      case UserActions.SET_CURRENT_USER:
        const user: User = (<UserActions.SetCurrentUserAction>action).user;
        return {
          currentUser: user
        };
      default:
        return state;
    }
  };

const getUsersState = (state): UserState => state.user;

export const getCurrentUser = createSelector(
  getUsersState,
  (state: UserState) => state.currentUser);
