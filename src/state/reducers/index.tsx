/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AnyAction } from 'redux';
import { ActionName } from '../constants';
import { State } from '../types/general.types';
import user from './user';


export const initialState : any = {
  user: null,
};

export const rootReducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionName.GET_CURRENT_USER:
      return user.handleGetCurrentUser(state, action);
    default:
      return state;
  }
};
