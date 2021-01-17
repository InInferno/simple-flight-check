import {
    APP_LOGIN,
    APP_LOGOUT,
    GET_FLIGHTS,
    FETCH_IS_START,
    FETCH_ERROR
} from './actionsTypes'

export function isLoginSuccess() {
    return {
        type: APP_LOGIN,
        isLogin: true
    };
}

export function isLogoutSuccess() {
    return {
        type: APP_LOGOUT,
        isLogin: false
    };
}

export function flightsListSuccess(flights) {
    return {
        type: GET_FLIGHTS,
        flights
    };
}

export function isFetchStart(boolean) {
    return { 
        type: FETCH_IS_START,
        isFetchStart: boolean
    };
}

export function isFetchError(error) {
    return { 
        type: FETCH_ERROR,
        isFetchError: error
    };
}
