import { AnyAction } from 'redux';
import { State } from '../types/general.types';

export function handleGetCurrentUser(state: State, action: AnyAction): State {
  const _state: State = { ...state };
  _state.user = { ...state.user, ...action.payload };
  return _state;
}

export default {
  handleGetCurrentUser,
};
