import * as Api from '../utils/real_api';
import { receiveErrors } from './session_actions';

export const RECEIVE_REALS = 'RECEIVE_REALS';
export const RECEIVE_REAL = 'RECEIVE_REAL';
export const UPDATE_REAL = 'UPDATE_REAL';
export const REMOVE_REAL = 'REMOVE_REAL';
export const TRUTH = 'TRUTH';
export const UNTRUTH = 'UNTRUTH';

export const receiveReals = reals => ({type: RECEIVE_REALS, reals});
export const receiveReal = real => ({type: RECEIVE_REAL, real});
export const patchReal = real => ({type: UPDATE_REAL, real});
export const removeReal = real => ({type: REMOVE_REAL, realId: real.id});

export const receiveTruth = details => {type: TRUTH, details};
export const removeTruth = details => {type: UNTRUTH, details};

// export const getAllReals = () => async (dispatch) => {
//   // dispatch(pageLoading());
//   return dispatch( receiveReals(await Api.getAllReals().data) );
// };

export const getAllReals = () => dispatch => Api.getAllReals().then(
  reals => dispatch(receiveReals(reals.data)),
  err => dispatch(receiveErrors(err.response.data))
);
// Search query also launches filtered GET request
export const createReal = real => dispatch => Api.createReal(real).then(
  newReal => dispatch(receiveReal(newReal.data)),
  err => dispatch(receiveErrors(err.response.data))
);

export const updateReal = real => async (dispatch) => dispatch(
  patchReal(await Api.updateReal(real).data)
);

export const deleteReal = id => async (dispatch) => dispatch(
  removeReal(await Api.deleteReal(id).data)
);

export const createTruth = realId => async (dispatch) => dispatch(
  receiveTruth(await Api.createTruth(realId).data)
);
export const destroyTruth = (id, realId) => async (dispatch) => dispatch(
  removeTruth(await Api.destroyTruth(id, realId).data)
);
