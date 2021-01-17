import initialState from '../initialState';
import {
    APP_LOGIN,
    APP_LOGOUT,
    GET_FLIGHTS,
    FETCH_IS_START,
    FETCH_ERROR
} from '../actions/actionsTypes';

export function app(state = initialState, action) {
    switch(action.type) {
        case APP_LOGIN: 
        return {
            ...state,
            isLogin: true
        };
        case APP_LOGOUT: 
        return {
            ...state,
            isLogin: false
        };
        case GET_FLIGHTS: 
        return {
            ...state,
            flights: action.flights
        };
        case FETCH_IS_START: 
        return {
            ...state,
            isFetchStart: action.isFetchStart 
        };
        case FETCH_ERROR: 
        return {
            ...state,
            isFetchError: action.isFetchError
        };
        default: return state;
    }
}
