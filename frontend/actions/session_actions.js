import axios from 'axios';
import * as Api from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => {type: RECEIVE_CURRENT_USER, currentUser};
export const receiveErrors = errors => {type: RECEIVE_ERRORS, errors};

export const signUp = credentials => dispatch => Api.signUp(credentials).then(
  user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveErrors(err.responseJSON))
);
export const signIn = credentials => dispatch => Api.signIn(credentials).then(
  user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveErrors(err.responseJSON))
);
export const signOut = () => async (dispatch) => dispatch(
  receiveCurrentUser(await Api.signOut())
);
