import { AlertActionType } from '../actiontype/index';

export const AlertAction = {
    success,
    error,
    clear
};

function success(message) {
    alert(message)
    return { type: AlertActionType.SUCCESS, message };
}

function error(message) {
    alert(message)
    return { type: AlertActionType.ERROR, message };
}

function clear() {
    return { type: AlertActionType.CLEAR };
}