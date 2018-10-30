import { AlertActionType } from '../actiontype/index';

export function Alert(state = {}, action) {
  switch (action.type) {
    case AlertActionType.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case AlertActionType.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case AlertActionType.CLEAR:
      return {};
    default:
      return state
  }
}